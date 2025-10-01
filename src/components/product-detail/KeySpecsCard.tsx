import { Ruler, Gauge, Award, Thermometer, Activity } from 'lucide-react';

interface KeySpecsCardProps {
  dn: string;
  class: string;
  standards: string[];
  temperatureRangeC: string;
  workingPressureBar: number;
}

export const KeySpecsCard = ({
  dn,
  class: classValue,
  standards,
  temperatureRangeC,
  workingPressureBar,
}: KeySpecsCardProps) => {
  return (
    <div className="glass-panel p-6 rounded-2xl space-y-4 sticky top-24">
      <h3 className="text-xl font-bold mb-4">Key Specifications</h3>

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <Ruler className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-sm text-muted-foreground">Nominal Size</div>
            <div className="font-semibold">{dn}</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Gauge className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-sm text-muted-foreground">Class</div>
            <div className="font-semibold">{classValue}</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-sm text-muted-foreground">Standards</div>
            <div className="font-semibold">{standards.join(', ')}</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Thermometer className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-sm text-muted-foreground">Temperature Range</div>
            <div className="font-semibold">{temperatureRangeC}</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Activity className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div>
            <div className="text-sm text-muted-foreground">Working Pressure</div>
            <div className="font-semibold">{workingPressureBar} bar</div>
          </div>
        </div>
      </div>
    </div>
  );
};
