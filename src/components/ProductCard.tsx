import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { useTranslation } from '@/hooks/useTranslation';
import { Badge } from './ui/badge';
import { Gauge, Ruler } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { tObj } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group relative block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl glass-panel hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
        {/* Product Image */}
        <div className="relative h-64 bg-gradient-primary overflow-hidden">
          <img
            src={product.images[0]}
            alt={tObj(product.title)}
            className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Category Badge */}
          <div className="absolute top-4 ltr:left-4 rtl:right-4 z-10">
            <Badge className="bg-gold/90 text-gold-foreground backdrop-blur-sm">
              {tObj({ 
                fa: product.category === 'domestic' ? 'خانگی' : product.category === 'industrial' ? 'صنعتی' : 'کشاورزی',
                en: product.category === 'domestic' ? 'Residential' : product.category === 'industrial' ? 'Industrial' : 'Agricultural'
              })}
            </Badge>
          </div>
        </div>

        {/* Default Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 gradient-text">
            {tObj(product.title)}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {tObj(product.descriptionShort)}
          </p>
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-overlay backdrop-blur-sm transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="p-6 h-full flex flex-col justify-center space-y-4">
            <p className="text-sm text-foreground">
              {tObj(product.descriptionShort)}
            </p>

            <div className="space-y-2">
              {/* Mechanism */}
              <div className="flex items-center space-x-2 space-x-reverse">
                <Gauge className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm">
                  {tObj({
                    fa: product.mechanism === 'multi-jet' ? 'مولتی جت' : 
                        product.mechanism === 'single-jet' ? 'تک جت' :
                        product.mechanism === 'woltman' ? 'ولتمن' :
                        product.mechanism === 'ultrasonic' ? 'اولتراسونیک' : 'الکترومغناطیسی',
                    en: product.mechanism.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('-')
                  })}
                </span>
              </div>

              {/* Sizes */}
              <div className="flex items-center space-x-2 space-x-reverse">
                <Ruler className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-sm">
                  DN {product.sizesDN.join(', ')}
                </span>
              </div>
            </div>

            {/* Standards */}
            <div className="flex flex-wrap gap-2">
              {product.standards.map((standard) => (
                <Badge
                  key={standard}
                  variant="secondary"
                  className="bg-secondary/30 text-secondary-foreground border border-secondary/50"
                >
                  {standard}
                </Badge>
              ))}
            </div>

            <div className="pt-2">
              <span className="text-accent font-semibold hover:underline">
                {tObj({ fa: 'مشاهده جزئیات ←', en: 'View Details →' })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
