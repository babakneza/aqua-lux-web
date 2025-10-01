interface Size {
  dn: string;
  thread: string;
  length: number;
  bodyDiameter: number;
}

interface SizesTableProps {
  sizes: Size[];
}

export const SizesTable = ({ sizes }: SizesTableProps) => {
  return (
    <div className="overflow-auto rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead className="bg-muted">
          <tr>
            <th className="px-4 py-3 text-start font-semibold">DN Size</th>
            <th className="px-4 py-3 text-start font-semibold">Thread/Flange</th>
            <th className="px-4 py-3 text-end font-semibold">Length (mm)</th>
            <th className="px-4 py-3 text-end font-semibold">Body Diameter (mm)</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((size, idx) => (
            <tr key={idx} className="border-t border-border hover:bg-accent/5 transition-colors">
              <td className="px-4 py-3 font-semibold">{size.dn}</td>
              <td className="px-4 py-3">{size.thread}</td>
              <td className="px-4 py-3 text-end font-mono">{size.length}</td>
              <td className="px-4 py-3 text-end font-mono">{size.bodyDiameter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
