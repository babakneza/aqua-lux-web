import { Award, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface StandardsComplianceProps {
  standards: string[];
  certificates?: string[];
}

export const StandardsCompliance = ({ standards, certificates }: StandardsComplianceProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-4">Compliant Standards</h3>
        <div className="flex flex-wrap gap-3">
          {standards.map((std) => (
            <Badge key={std} className="text-base py-2 px-4 bg-accent/20 text-accent-foreground">
              <Award className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
              {std}
            </Badge>
          ))}
        </div>
      </div>

      {certificates && certificates.length > 0 && (
        <div>
          <h3 className="text-xl font-bold mb-4">Certificates</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certificates.map((cert, idx) => (
              <a
                key={idx}
                href={cert}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl hover:bg-accent/10 transition-colors flex items-center gap-3"
              >
                <Award className="w-8 h-8 text-accent" />
                <div className="flex-1">
                  <div className="font-semibold">Certificate {idx + 1}</div>
                  <div className="text-sm text-muted-foreground">PDF Document</div>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
