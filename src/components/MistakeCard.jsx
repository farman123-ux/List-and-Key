import { AlertTriangle, XCircle, CheckCircle2 } from 'lucide-react';
import CodeBlock from './CodeBlock';

export default function MistakeCard({ mistake }) {
  const { number, title, severity, description, consequence, badCode, goodCode, explanation } = mistake;

  const getSeverityBadge = (level) => {
    switch (level) {
      case 'Critical Bug':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'Error':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'Subtle Bug':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      default:
        return 'bg-orange-50 text-orange-700 border-orange-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-stone-200 bg-stone-50/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-stone-600 bg-stone-200/80 px-2 py-0.5 rounded">
            PITFALL {number}
          </span>
          <h3 className="text-base font-bold text-stone-900">{title}</h3>
        </div>
        <span
          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${getSeverityBadge(
            severity
          )}`}
        >
          {severity}
        </span>
      </div>

      <div className="p-6 space-y-4">
        {/* Description & Consequence */}
        <div className="space-y-2">
          <p className="text-sm text-stone-700">{description}</p>
          <div className="p-3 rounded-xl bg-red-50/50 border border-red-100 text-xs text-red-900 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
            <div>
              <strong className="font-semibold text-red-950">Consequence: </strong>
              <span>{consequence}</span>
            </div>
          </div>
        </div>

        {/* Side-by-side Before & After comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Bad */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-red-700">
              <XCircle className="w-4 h-4 text-red-600" />
              <span>Before (❌ Anti-Pattern)</span>
            </div>
            <div className="rounded-xl overflow-hidden border border-red-200">
              <CodeBlock code={badCode} title="Incorrect Code" />
            </div>
          </div>

          {/* Good */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>After (✅ Recommended Fix)</span>
            </div>
            <div className="rounded-xl overflow-hidden border border-emerald-200">
              <CodeBlock code={goodCode} title="Correct Pattern" />
            </div>
          </div>
        </div>

        {/* Resolution note */}
        <div className="pt-2 text-xs text-stone-500 border-t border-stone-100 flex items-center justify-between">
          <span>{explanation}</span>
        </div>
      </div>
    </div>
  );
}
