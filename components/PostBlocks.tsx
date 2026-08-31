import type { ContentBlock } from "@/lib/yazilar";
import { CopyPromptBlock } from "@/components/CopyPromptBlock";

export function PostBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="flex max-w-2xl flex-col gap-4">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="text-base leading-relaxed text-stone-700">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                className="mt-4 text-xl font-semibold tracking-tight text-stone-950"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="mt-2 text-base font-semibold text-stone-950"
              >
                {block.text}
              </h3>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-2 border-stone-300 pl-4 text-sm italic leading-relaxed text-stone-600"
              >
                {block.text}
              </blockquote>
            );
          case "list":
            return (
              <ul key={i} className="flex flex-col gap-2 pl-5">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="list-disc text-base leading-relaxed text-stone-700 marker:text-stone-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "table":
            return (
              <div key={i} className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-sm">
                  <thead>
                    <tr>
                      {block.headers.map((h, j) => (
                        <th
                          key={j}
                          className="border-b border-stone-300 px-3 py-2 text-left font-semibold text-stone-950"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td
                            key={k}
                            className="border-b border-stone-200 px-3 py-2 align-top text-stone-700"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "links":
            return (
              <ul key={i} className="flex flex-col gap-2 pl-5">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="list-disc text-base leading-relaxed text-stone-700 marker:text-stone-400"
                  >
                    {item.label}{" "}
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-500 underline hover:text-stone-900"
                    >
                      {item.url}
                    </a>
                  </li>
                ))}
              </ul>
            );
          case "prompt":
            return <CopyPromptBlock key={i} text={block.text} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
