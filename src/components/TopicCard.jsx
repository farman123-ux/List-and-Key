import { Eye, Lightbulb, CheckCircle2 } from 'lucide-react';
import CodeBlock from './CodeBlock';

export default function TopicCard({ topic }) {
  const { number, title, badge, definition, explanation, code, outputType, outputItems, tip } = topic;

  return (
    <article
      id={topic.id}
      className="scroll-mt-24 bg-white rounded-2xl border border-stone-200/90 shadow-xs overflow-hidden transition-all hover:border-stone-300"
    >
      {/* Topic Header */}
      <div className="px-6 py-5 border-b border-stone-200/80 bg-stone-50/40 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200/60 px-2.5 py-1 rounded-md">
            TOPIC {number}
          </span>
          <h3 className="text-xl font-bold text-stone-900 tracking-tight">
            {title}
          </h3>
        </div>
        <span className="text-xs font-medium text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full border border-stone-200">
          {badge}
        </span>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        {/* Definition */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
            Definition
          </h4>
          <p className="text-base text-stone-800 font-medium leading-relaxed bg-stone-50/70 p-4 rounded-xl border-l-4 border-blue-600 border-t border-r border-b border-stone-200">
            {definition}
          </p>
        </div>

        {/* Explanation */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">
            How It Works
          </h4>
          <p className="text-sm md:text-base text-stone-600 leading-relaxed">
            {explanation}
          </p>
        </div>

        {/* Code & Expected Output Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Code Section */}
          <div className="lg:col-span-7 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center justify-between">
              <span>React Code Example</span>
              <span className="text-[11px] font-mono text-stone-400 lowercase font-normal">jsx</span>
            </h4>
            <CodeBlock code={code} title={`Example_${number}.jsx`} />
          </div>

          {/* Expected Output Section */}
          <div className="lg:col-span-5 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-stone-500" />
              <span>Expected Output</span>
            </h4>

            <div className="bg-stone-50/80 rounded-xl border border-stone-200 p-4 min-h-[160px] flex flex-col justify-center">
              <div className="mb-2 pb-2 border-b border-stone-200/60 flex items-center justify-between text-[11px] text-stone-400 font-mono">
                <span>DOM Result</span>
                <span className="text-emerald-600 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  rendered
                </span>
              </div>

              {/* Render dynamic previews according to outputType */}
              {outputType === 'list' && (
                <ul className="space-y-1.5 text-sm text-stone-800">
                  {outputItems.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {outputType === 'numbered' && (
                <ol className="list-decimal pl-5 space-y-1 text-sm text-stone-800 font-medium">
                  {outputItems.map((item) => (
                    <li key={item} className="pl-1">
                      {item}
                    </li>
                  ))}
                </ol>
              )}

              {outputType === 'keyedList' && (
                <ul className="space-y-2 text-xs">
                  {outputItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center justify-between p-2 bg-white rounded-lg border border-stone-200"
                    >
                      <span className="font-semibold text-stone-800">{item.label}</span>
                      <span className="font-mono text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100">
                        key="{item.id}"
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {outputType === 'objects' && (
                <div className="space-y-2 text-xs">
                  {outputItems.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-stone-200"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2
                          className={`w-4 h-4 ${
                            task.done ? 'text-emerald-500' : 'text-stone-300'
                          }`}
                        />
                        <span className={task.done ? 'line-through text-stone-400' : 'text-stone-800 font-medium'}>
                          {task.title}
                        </span>
                      </div>
                      <span className="font-mono text-[10px] bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded">
                        {task.tag}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {outputType === 'conditional' && (
                <ul className="space-y-2 text-xs">
                  {outputItems.map((student) => (
                    <li
                      key={student.name}
                      className="flex items-center justify-between p-2 bg-white rounded-lg border border-stone-200"
                    >
                      <span className="text-stone-800 font-medium">{student.name}</span>
                      {student.isHonorRoll ? (
                        <span className="text-[10px] font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-full">
                          Honor Roll ⭐
                        </span>
                      ) : (
                        <span className="text-[10px] text-stone-400">Regular</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {(outputType === 'concept' || outputType === 'summaryChecklist') && (
                <ul className="space-y-2 text-xs text-stone-700">
                  {outputItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-white p-2 rounded-lg border border-stone-200">
                      <span className="text-blue-600 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Tip / Key Takeaway */}
        {tip && (
          <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs md:text-sm text-amber-900 flex items-start gap-3">
            <Lightbulb className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <div>
              <strong className="font-semibold text-amber-950">Key Developer Tip: </strong>
              <span>{tip}</span>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
