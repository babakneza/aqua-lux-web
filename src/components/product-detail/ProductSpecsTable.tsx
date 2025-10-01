import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, ArrowUpDown } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export interface SpecRow {
  nominalSizeInch: string;
  Qs: number;
  Qmin: number;
  Qt: number;
  Qn: number;
  Qmax: number;
  workingPressureBar: number;
  temperatureRangeC: string;
  resetMileageM3: number;
  readingAccuracy: string;
  pressureDropAtQnBar: number;
  lengthMm: number;
  bodyDiameterMm: number;
  lengthWithCouplingsMm: number;
  class: string;
}

interface ProductSpecsTableProps {
  rows: SpecRow[];
  loading?: boolean;
}

export const ProductSpecsTable = ({ rows, loading }: ProductSpecsTableProps) => {
  const [sizeFilter, setSizeFilter] = useState<string>('all');
  const [classFilter, setClassFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'dn' | 'qn'>('dn');

  const filteredAndSorted = useMemo(() => {
    let filtered = rows;

    if (sizeFilter !== 'all') {
      filtered = filtered.filter((r) => r.nominalSizeInch === sizeFilter);
    }

    if (classFilter !== 'all') {
      filtered = filtered.filter((r) => r.class === classFilter);
    }

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'qn') return a.Qn - b.Qn;
      return a.nominalSizeInch.localeCompare(b.nominalSizeInch);
    });

    return sorted;
  }, [rows, sizeFilter, classFilter, sortBy]);

  const uniqueSizes = useMemo(() => [...new Set(rows.map((r) => r.nominalSizeInch))], [rows]);
  const uniqueClasses = useMemo(() => [...new Set(rows.map((r) => r.class))], [rows]);

  const handleDownloadCSV = () => {
    const headers = [
      'Nominal Size',
      'Qs (m³/h)',
      'Qmin (m³/h)',
      'Qt (m³/h)',
      'Qn (m³/h)',
      'Qmax (m³/h)',
      'Working Pressure (bar)',
      'Temperature Range (°C)',
      'Reset Mileage (m³)',
      'Reading Accuracy',
      'Pressure Drop @ Qn (bar)',
      'Length (mm)',
      'Body Diameter (mm)',
      'Length w/ Couplings (mm)',
      'Class',
    ];

    const csvRows = [
      headers.join(','),
      ...filteredAndSorted.map((r) =>
        [
          r.nominalSizeInch,
          r.Qs,
          r.Qmin,
          r.Qt,
          r.Qn,
          r.Qmax,
          r.workingPressureBar,
          r.temperatureRangeC,
          r.resetMileageM3,
          `"${r.readingAccuracy}"`,
          r.pressureDropAtQnBar,
          r.lengthMm,
          r.bodyDiameterMm,
          r.lengthWithCouplingsMm,
          r.class,
        ].join(',')
      ),
    ];

    const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'specifications.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return <Skeleton className="w-full h-96" />;
  }

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-3 items-center">
        <Select value={sizeFilter} onValueChange={setSizeFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="All sizes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All sizes</SelectItem>
            {uniqueSizes.map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={classFilter} onValueChange={setClassFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="All classes" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All classes</SelectItem>
            {uniqueClasses.map((cls) => (
              <SelectItem key={cls} value={cls}>
                Class {cls}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setSortBy(sortBy === 'dn' ? 'qn' : 'dn')}
        >
          <ArrowUpDown className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
          Sort by {sortBy === 'dn' ? 'DN' : 'Qn'}
        </Button>

        <Button variant="outline" size="sm" onClick={handleDownloadCSV} className="ltr:ml-auto rtl:mr-auto">
          <Download className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
          Export CSV
        </Button>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block overflow-auto max-h-[60vh] rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-muted z-10">
            <tr>
              <th className="px-4 py-3 text-start font-semibold">Nominal Size</th>
              <th className="px-4 py-3 text-end font-semibold font-mono">Qs (m³/h)</th>
              <th className="px-4 py-3 text-end font-semibold font-mono">Qmin (m³/h)</th>
              <th className="px-4 py-3 text-end font-semibold font-mono">Qt (m³/h)</th>
              <th className="px-4 py-3 text-end font-semibold font-mono">Qn (m³/h)</th>
              <th className="px-4 py-3 text-end font-semibold font-mono">Qmax (m³/h)</th>
              <th className="px-4 py-3 text-end font-semibold font-mono">Pressure (bar)</th>
              <th className="px-4 py-3 text-start font-semibold">Temp (°C)</th>
              <th className="px-4 py-3 text-end font-semibold font-mono">Reset (m³)</th>
              <th className="px-4 py-3 text-start font-semibold">Accuracy</th>
              <th className="px-4 py-3 text-end font-semibold font-mono">Drop (bar)</th>
              <th className="px-4 py-3 text-end font-semibold font-mono">Length (mm)</th>
              <th className="px-4 py-3 text-end font-semibold font-mono">Diameter (mm)</th>
              <th className="px-4 py-3 text-end font-semibold font-mono">w/ Couplings (mm)</th>
              <th className="px-4 py-3 text-start font-semibold">Class</th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSorted.map((row, idx) => (
              <tr key={idx} className="border-t border-border hover:bg-accent/5 transition-colors">
                <td className="px-4 py-3">{row.nominalSizeInch}</td>
                <td className="px-4 py-3 text-end font-mono">{row.Qs}</td>
                <td className="px-4 py-3 text-end font-mono">{row.Qmin}</td>
                <td className="px-4 py-3 text-end font-mono">{row.Qt}</td>
                <td className="px-4 py-3 text-end font-mono">{row.Qn}</td>
                <td className="px-4 py-3 text-end font-mono">{row.Qmax}</td>
                <td className="px-4 py-3 text-end font-mono">{row.workingPressureBar}</td>
                <td className="px-4 py-3">{row.temperatureRangeC}</td>
                <td className="px-4 py-3 text-end font-mono">{row.resetMileageM3.toLocaleString()}</td>
                <td className="px-4 py-3 text-xs">{row.readingAccuracy}</td>
                <td className="px-4 py-3 text-end font-mono">{row.pressureDropAtQnBar}</td>
                <td className="px-4 py-3 text-end font-mono">{row.lengthMm}</td>
                <td className="px-4 py-3 text-end font-mono">{row.bodyDiameterMm}</td>
                <td className="px-4 py-3 text-end font-mono">{row.lengthWithCouplingsMm}</td>
                <td className="px-4 py-3">{row.class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {filteredAndSorted.map((row, idx) => (
          <div key={idx} className="glass-panel p-4 rounded-xl space-y-2 text-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-base">{row.nominalSizeInch}</span>
              <span className="text-xs bg-accent/20 px-2 py-1 rounded">Class {row.class}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <span className="text-muted-foreground">Qs:</span> <span className="font-mono">{row.Qs}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Qmin:</span> <span className="font-mono">{row.Qmin}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Qt:</span> <span className="font-mono">{row.Qt}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Qn:</span> <span className="font-mono">{row.Qn}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Qmax:</span> <span className="font-mono">{row.Qmax}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Pressure:</span>{' '}
                <span className="font-mono">{row.workingPressureBar} bar</span>
              </div>
              <div className="col-span-2">
                <span className="text-muted-foreground">Temp:</span> {row.temperatureRangeC}
              </div>
              <div className="col-span-2">
                <span className="text-muted-foreground">Accuracy:</span> {row.readingAccuracy}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
