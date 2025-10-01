import { CheckCircle2, TrendingUp } from 'lucide-react';

interface FeaturesBenefitsProps {
  features: string[];
  benefits: string[];
}

export const FeaturesBenefits = ({ features, benefits }: FeaturesBenefitsProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Features */}
      <div>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-accent" />
          Features
        </h3>
        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div>
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-accent" />
          Benefits
        </h3>
        <ul className="space-y-3">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
