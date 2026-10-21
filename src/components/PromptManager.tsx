import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface Prompt {
  id: string;
  text: string;
  tags: string[];
  createdAt: number;
}

export interface PromptManagerProps {
  lang: string;
  translations: {
    heading?: string;
    subheading?: string;
    promptPlaceholder?: string;
    tagPlaceholder?: string;
    saveButton?: string;
    searchPlaceholder?: string;
    copyButton?: string;
    copiedButton?: string;
    deleteButton?: string;
    exportButton?: string;
    importButton?: string;
    emptyState?: string;
    noResults?: string;
    promptSaved?: string;
    promptDeleted?: string;
    exportSuccess?: string;
    importSuccess?: string;
    confirmDelete?: string;
    allTags?: string;
    charactersCount?: string;
    [key: string]: any;
  };
}

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function generateId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 9);
}

function formatRelativeTime(timestamp: number): string {
  const diff = Date.now() - timestamp;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 30) return `${days}d ago`;
  return new Date(timestamp).toLocaleDateString();
}

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const CopyIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const TrashIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const UploadIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="17 8 12 3 7 8"></polyline>
    <line x1="12" y1="3" x2="12" y2="15"></line>
  </svg>
);

/* ------------------------------------------------------------------ */
/*  PromptCard Component                                               */
/* ------------------------------------------------------------------ */

interface PromptCardProps {
  prompt: Prompt;
  isCopied: boolean;
  isConfirmingDelete: boolean;
  t: (key: string, fallback: string) => string;
  onCopy: (id: string, text: string) => void;
  onDeleteRequest: (id: string) => void;
  onConfirmDelete: (id: string) => void;
  onCancelDelete: () => void;
  onTagClick: (tag: string) => void;
}

const PromptCard: React.FC<PromptCardProps> = React.memo(({
  prompt,
  isCopied,
  isConfirmingDelete,
  t,
  onCopy,
  onDeleteRequest,
  onConfirmDelete,
  onCancelDelete,
  onTagClick,
}) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = prompt.text.length > 220;
  const displayText = isLong && !expanded ? prompt.text.slice(0, 220) + '…' : prompt.text;

  return (
    <article className="group flex flex-col justify-between p-4 rounded-xl border border-[#AEAC78]/30 dark:border-[#AEAC78]/20 bg-white/75 dark:bg-[#383330] shadow-sm hover:shadow-md transition-all duration-200">
      <div>
        {/* Prompt content */}
        <p
          className={`text-sm leading-relaxed text-[#4C4541] dark:text-[#FCF0DA]/90 whitespace-pre-wrap break-words font-sans ${isLong ? 'cursor-pointer' : ''}`}
          onClick={isLong ? () => setExpanded(!expanded) : undefined}
        >
          {displayText}
        </p>

        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="mt-1 text-xs font-semibold text-[#AEAC78] dark:text-[#F2C46A] hover:underline"
          >
            {expanded ? 'Show less' : 'Read more'}
          </button>
        )}

        {/* Tags */}
        {prompt.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {prompt.tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => onTagClick(tag)}
                className="px-2 py-0.5 rounded-full text-xs font-medium border border-[#AEAC78]/40 bg-[#AEAC78]/15 text-[#4C4541] dark:text-[#FCF0DA] hover:bg-[#AEAC78]/30 transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Card Footer: Metadata and Actions */}
      <div className="mt-4 pt-3 border-t border-[#AEAC78]/20 flex items-center justify-between text-xs text-[#4C4541]/60 dark:text-[#FCF0DA]/50">
        <div className="flex items-center gap-2">
          <span>{formatRelativeTime(prompt.createdAt)}</span>
          <span>•</span>
          <span>{prompt.text.length} {t('charactersCount', 'chars')}</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Copy Button */}
          <button
            type="button"
            onClick={() => onCopy(prompt.id, prompt.text)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold text-xs transition-all duration-150 shadow-sm active:scale-95 ${
              isCopied
                ? 'bg-emerald-600 text-white'
                : 'bg-[#F2C46A] text-[#4C4541] hover:bg-[#e5b85e]'
            }`}
            aria-label={isCopied ? t('copiedButton', 'Copied!') : t('copyButton', 'Copy')}
          >
            {isCopied ? <CheckIcon /> : <CopyIcon />}
            <span>{isCopied ? t('copiedButton', 'Copied!') : t('copyButton', 'Copy')}</span>
          </button>

          {/* Delete Button with confirmation */}
          {isConfirmingDelete ? (
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => onConfirmDelete(prompt.id)}
                className="px-2 py-1.5 rounded-lg text-xs font-medium bg-red-600 text-white hover:bg-red-700 active:scale-95 transition-colors"
                title={t('confirmDelete', 'Confirm Delete')}
              >
                {t('deleteButton', 'Delete')}
              </button>
              <button
                type="button"
                onClick={onCancelDelete}
                className="px-2 py-1.5 rounded-lg text-xs font-medium bg-[#AEAC78]/20 hover:bg-[#AEAC78]/30 text-[#4C4541] dark:text-[#FCF0DA] transition-colors"
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => onDeleteRequest(prompt.id)}
              className="p-1.5 rounded-lg text-[#4C4541]/40 dark:text-[#FCF0DA]/40 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-500/10 transition-colors"
              aria-label={t('deleteButton', 'Delete')}
              title={t('deleteButton', 'Delete')}
            >
              <TrashIcon />
            </button>
          )}
        </div>
      </div>
    </article>
  );
});

PromptCard.displayName = 'PromptCard';

/* ------------------------------------------------------------------ */
/*  Main PromptManager                                                 */
/* ------------------------------------------------------------------ */

export default function PromptManager({ lang, translations = {} }: PromptManagerProps) {
  // LocalStorage persistence for prompt vault
  const [prompts, setPrompts] = useLocalStorage<Prompt[]>('saveprompt-vault', []);

  // Form input state
  const [newText, setNewText] = useState('');
  const [newTags, setNewTags] = useState('');

  // Search & filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Card interaction state
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  // Toasts
  const [toasts, setToasts] = useState<Toast[]>([]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Safe translation resolver
  const t = useCallback(
    (key: string, fallback: string) => {
      return translations[key] || fallback;
    },
    [translations]
  );

  const showToast = useCallback((message: string, type: Toast['type'] = 'success') => {
    const id = generateId();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  // Collect all unique tags
  const allTags = useMemo(() => {
    const set = new Set<string>();
    prompts.forEach((p) => p.tags.forEach((tag) => set.add(tag)));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [prompts]);

  // Real-time filtered prompts
  const filteredPrompts = useMemo(() => {
    let list = prompts;

    if (activeTag) {
      list = list.filter((p) => p.tags.includes(activeTag));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.text.toLowerCase().includes(q) ||
          p.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    return list;
  }, [prompts, activeTag, searchQuery]);

  // Handle Save
  const handleSave = useCallback(() => {
    const trimmed = newText.trim();
    if (!trimmed) return;

    const parsedTags = newTags
      .split(',')
      .map((t) => t.trim().toLowerCase())
      .filter((t) => t.length > 0);

    const newPrompt: Prompt = {
      id: generateId(),
      text: trimmed,
      tags: parsedTags,
      createdAt: Date.now(),
    };

    setPrompts((prev) => [newPrompt, ...prev]);
    setNewText('');
    setNewTags('');
    showToast(t('promptSaved', 'Prompt saved!'));
    textareaRef.current?.focus();
  }, [newText, newTags, setPrompts, showToast, t]);

  // Handle Copy
  const handleCopy = useCallback(
    (id: string, text: string) => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          setCopiedId(id);
          setTimeout(() => setCopiedId(null), 2000);
        });
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      }
    },
    []
  );

  // Handle Delete
  const handleConfirmDelete = useCallback(
    (id: string) => {
      setPrompts((prev) => prev.filter((p) => p.id !== id));
      setConfirmDeleteId(null);
      showToast(t('promptDeleted', 'Prompt deleted.'));
    },
    [setPrompts, showToast, t]
  );

  // Export JSON
  const handleExport = useCallback(() => {
    if (prompts.length === 0) return;
    const blob = new Blob([JSON.stringify(prompts, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const dateStr = new Date().toISOString().slice(0, 10);
    const a = document.createElement('a');
    a.href = url;
    a.download = `saveprompt-${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast(t('exportSuccess', 'Prompts exported successfully!'));
  }, [prompts, showToast, t]);

  // Import JSON
  const handleImport = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (!Array.isArray(parsed)) {
            showToast('Invalid JSON file format', 'error');
            return;
          }

          const validPrompts: Prompt[] = parsed.filter(
            (p) =>
              p &&
              typeof p.id === 'string' &&
              typeof p.text === 'string' &&
              Array.isArray(p.tags) &&
              typeof p.createdAt === 'number'
          );

          if (validPrompts.length === 0) {
            showToast('No valid prompts found in file', 'error');
            return;
          }

          setPrompts((prev) => {
            const existingIds = new Set(prev.map((p) => p.id));
            const newItems = validPrompts.filter((p) => !existingIds.has(p.id));
            const merged = [...newItems, ...prev].sort((a, b) => b.createdAt - a.createdAt);
            showToast(t('importSuccess', 'Prompts imported successfully!'));
            return merged;
          });
        } catch {
          showToast('Failed to parse JSON file', 'error');
        }
      };
      reader.readAsText(file);
      e.target.value = '';
    },
    [setPrompts, showToast, t]
  );

  // Shortcut: Ctrl/Cmd + Enter to save
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleSave();
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Toast Notifications */}
      {toasts.length > 0 && (
        <div className="fixed top-16 right-4 z-50 flex flex-col gap-2 pointer-events-none" aria-live="polite">
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className={`px-4 py-2.5 rounded-lg text-xs font-semibold shadow-lg transition-all transform translate-y-0 ${
                toast.type === 'error'
                  ? 'bg-red-600 text-white'
                  : 'bg-[#4C4541] text-[#FCF0DA] border border-[#F2C46A]'
              }`}
            >
              {toast.message}
            </div>
          ))}
        </div>
      )}

      {/* ============================================================ */}
      {/* 1. Rapid-Entry Interface                                      */}
      {/* ============================================================ */}
      <section className="p-5 sm:p-6 rounded-2xl border border-[#AEAC78]/35 dark:border-[#AEAC78]/25 bg-white/60 dark:bg-[#3B3532] shadow-sm backdrop-blur-sm transition-colors duration-200">
        <label htmlFor="rapid-prompt-input" className="sr-only">
          {t('promptPlaceholder', 'Paste or type your prompt here...')}
        </label>
        <textarea
          ref={textareaRef}
          id="rapid-prompt-input"
          rows={3}
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('promptPlaceholder', 'Paste or type your prompt here...')}
          className="w-full p-4 rounded-xl border border-[#AEAC78]/40 dark:border-[#AEAC78]/30 bg-[#FCF0DA]/30 dark:bg-[#312C29] text-[#4C4541] dark:text-[#FCF0DA] placeholder-[#4C4541]/40 dark:placeholder-[#FCF0DA]/35 text-sm leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-[#F2C46A] focus:border-[#F2C46A] transition-all"
        />

        <div className="mt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="flex-1">
            <input
              type="text"
              value={newTags}
              onChange={(e) => setNewTags(e.target.value)}
              placeholder={t('tagPlaceholder', 'Add tags (comma-separated)')}
              className="w-full px-4 py-2.5 rounded-xl border border-[#AEAC78]/40 dark:border-[#AEAC78]/30 bg-[#FCF0DA]/30 dark:bg-[#312C29] text-[#4C4541] dark:text-[#FCF0DA] placeholder-[#4C4541]/40 dark:placeholder-[#FCF0DA]/35 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#F2C46A] focus:border-[#F2C46A] transition-all"
            />
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3">
            <span className="text-xs text-[#4C4541]/50 dark:text-[#FCF0DA]/40 tabular-nums">
              {newText.length} {t('charactersCount', 'characters')}
            </span>

            <button
              type="button"
              onClick={handleSave}
              disabled={!newText.trim()}
              className="px-6 py-2.5 rounded-xl bg-[#F2C46A] hover:bg-[#e5b85e] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed text-[#4C4541] font-bold text-xs sm:text-sm transition-all shadow-sm"
            >
              {t('saveButton', 'Save')}
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. Instant Local Search & Filters                            */}
      {/* ============================================================ */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search bar */}
          <div className="relative flex-1">
            <span className="absolute inset-y-0 left-3.5 flex items-center text-[#4C4541]/40 dark:text-[#FCF0DA]/40 pointer-events-none">
              <SearchIcon />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder', 'Search your prompts...')}
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-[#AEAC78]/40 dark:border-[#AEAC78]/30 bg-white/60 dark:bg-[#383330] text-[#4C4541] dark:text-[#FCF0DA] placeholder-[#4C4541]/40 dark:placeholder-[#FCF0DA]/35 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#F2C46A] transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-3 flex items-center text-xs text-[#4C4541]/40 hover:text-[#4C4541] dark:text-[#FCF0DA]/40 dark:hover:text-[#FCF0DA]"
              >
                ✕
              </button>
            )}
          </div>

          {/* Export / Import Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleExport}
              disabled={prompts.length === 0}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-[#AEAC78]/40 dark:border-[#AEAC78]/30 bg-white/60 dark:bg-[#383330] hover:bg-[#AEAC78]/15 text-[#4C4541] dark:text-[#FCF0DA] disabled:opacity-40 disabled:cursor-not-allowed font-medium text-xs transition-colors"
              title={t('exportButton', 'Export JSON')}
            >
              <DownloadIcon />
              <span className="hidden sm:inline">{t('exportButton', 'Export JSON')}</span>
            </button>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-[#AEAC78]/40 dark:border-[#AEAC78]/30 bg-white/60 dark:bg-[#383330] hover:bg-[#AEAC78]/15 text-[#4C4541] dark:text-[#FCF0DA] font-medium text-xs transition-colors"
              title={t('importButton', 'Import JSON')}
            >
              <UploadIcon />
              <span className="hidden sm:inline">{t('importButton', 'Import JSON')}</span>
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept=".json,application/json"
              onChange={handleImport}
              className="hidden"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Tag pills */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <button
              type="button"
              onClick={() => setActiveTag(null)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                activeTag === null
                  ? 'bg-[#F2C46A] text-[#4C4541] shadow-sm'
                  : 'border border-[#AEAC78]/40 bg-[#AEAC78]/10 text-[#4C4541] dark:text-[#FCF0DA] hover:bg-[#AEAC78]/25'
              }`}
            >
              {t('allTags', 'All')} ({prompts.length})
            </button>

            {allTags.map((tag) => {
              const count = prompts.filter((p) => p.tags.includes(tag)).length;
              const isSelected = activeTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveTag(isSelected ? null : tag)}
                  className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-[#F2C46A] text-[#4C4541] shadow-sm font-semibold'
                      : 'border border-[#AEAC78]/30 bg-[#AEAC78]/15 text-[#4C4541] dark:text-[#FCF0DA] hover:bg-[#AEAC78]/30'
                  }`}
                >
                  #{tag} <span className="opacity-60 text-[10px]">({count})</span>
                </button>
              );
            })}
          </div>
        )}
      </section>

      {/* ============================================================ */}
      {/* 3. Prompt Vault Grid                                          */}
      {/* ============================================================ */}
      <section>
        {prompts.length === 0 ? (
          <div className="py-16 text-center border-2 border-dashed border-[#AEAC78]/30 rounded-2xl p-8 bg-white/30 dark:bg-[#383330]/30">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#F2C46A]/20 flex items-center justify-center text-[#4C4541] dark:text-[#F2C46A] mb-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <p className="text-sm font-medium text-[#4C4541] dark:text-[#FCF0DA]/80 max-w-sm mx-auto">
              {t('emptyState', 'No prompts saved yet. Start by adding your first prompt above!')}
            </p>
          </div>
        ) : filteredPrompts.length === 0 ? (
          <div className="py-12 text-center border border-[#AEAC78]/25 rounded-2xl p-6 bg-white/30 dark:bg-[#383330]/30">
            <p className="text-sm text-[#4C4541]/70 dark:text-[#FCF0DA]/60">
              {t('noResults', 'No prompts match your search.')}
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveTag(null);
              }}
              className="mt-2 text-xs font-semibold text-[#F2C46A] hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPrompts.map((prompt) => (
              <PromptCard
                key={prompt.id}
                prompt={prompt}
                isCopied={copiedId === prompt.id}
                isConfirmingDelete={confirmDeleteId === prompt.id}
                t={t}
                onCopy={handleCopy}
                onDeleteRequest={(id) => setConfirmDeleteId(id)}
                onConfirmDelete={handleConfirmDelete}
                onCancelDelete={() => setConfirmDeleteId(null)}
                onTagClick={(tag) => setActiveTag(tag === activeTag ? null : tag)}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
