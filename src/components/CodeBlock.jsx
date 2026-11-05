import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export default function CodeBlock({ code, title = 'React JSX' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <div className="rounded-xl overflow-hidden border border-stone-800 bg-[#141416] text-stone-100 shadow-sm text-sm">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#1C1C21] border-b border-stone-800">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-stone-600/70"></span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-stone-600/70"></span>
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-stone-600/70"></span>
          <span className="ml-2 text-xs font-mono text-stone-400 font-medium tracking-wide">
            {title}
          </span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium rounded-md bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors duration-150 border border-stone-700/60"
          title="Copy code to clipboard"
          aria-label="Copy code to clipboard"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-4 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed text-stone-200">
        <pre className="m-0 font-mono">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
