import { useState, useMemo } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { products, categoryNames, mechanismNames } from '@/data/products';
import { useTranslation } from '@/hooks/useTranslation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, X, Filter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const Products = () => {
  const { t, tObj } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [mechanismFilter, setMechanismFilter] = useState<string>('all');
  const [sizeFilter, setSizeFilter] = useState<string>('all');

  // Get unique sizes
  const allSizes = useMemo(() => {
    const sizes = new Set<number>();
    products.forEach(p => p.sizesDN.forEach(size => sizes.add(size)));
    return Array.from(sizes).sort((a, b) => a - b);
  }, []);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const titleMatch = product.title.fa.toLowerCase().includes(query) || 
                          product.title.en.toLowerCase().includes(query);
        const descMatch = product.descriptionShort.fa.toLowerCase().includes(query) || 
                         product.descriptionShort.en.toLowerCase().includes(query);
        if (!titleMatch && !descMatch) return false;
      }

      // Category filter
      if (categoryFilter !== 'all' && product.category !== categoryFilter) return false;

      // Mechanism filter
      if (mechanismFilter !== 'all' && product.mechanism !== mechanismFilter) return false;

      // Size filter
      if (sizeFilter !== 'all') {
        const size = parseInt(sizeFilter);
        if (!product.sizesDN.includes(size)) return false;
      }

      return true;
    });
  }, [searchQuery, categoryFilter, mechanismFilter, sizeFilter]);

  const clearFilters = () => {
    setSearchQuery('');
    setCategoryFilter('all');
    setMechanismFilter('all');
    setSizeFilter('all');
  };

  const hasActiveFilters = searchQuery || categoryFilter !== 'all' || 
                          mechanismFilter !== 'all' || sizeFilter !== 'all';

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gold-text">{t('products')}</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {tObj({ 
              fa: 'کاوش در مجموعه کامل کنتورهای آب با کیفیت بالا و استانداردهای بین‌المللی', 
              en: 'Explore our complete range of high-quality water meters with international standards' 
            })}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="glass-panel p-6 rounded-2xl mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute ltr:left-3 rtl:right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder={t('search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ltr:pl-10 rtl:pr-10 bg-background/50 border-border/50"
            />
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder={t('filterByCategory')} />
              </SelectTrigger>
              <SelectContent className="bg-card/95 backdrop-blur-lg border-border/50 z-50">
                <SelectItem value="all">{tObj({ fa: 'همه دسته‌ها', en: 'All Categories' })}</SelectItem>
                {Object.entries(categoryNames).map(([key, name]) => (
                  <SelectItem key={key} value={key}>{tObj(name)}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={mechanismFilter} onValueChange={setMechanismFilter}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder={t('filterByMechanism')} />
              </SelectTrigger>
              <SelectContent className="bg-card/95 backdrop-blur-lg border-border/50 z-50">
                <SelectItem value="all">{tObj({ fa: 'همه مکانیزم‌ها', en: 'All Mechanisms' })}</SelectItem>
                {Object.entries(mechanismNames).map(([key, name]) => (
                  <SelectItem key={key} value={key}>{tObj(name)}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sizeFilter} onValueChange={setSizeFilter}>
              <SelectTrigger className="bg-background/50">
                <SelectValue placeholder={t('filterBySize')} />
              </SelectTrigger>
              <SelectContent className="bg-card/95 backdrop-blur-lg border-border/50 z-50">
                <SelectItem value="all">{tObj({ fa: 'همه سایزها', en: 'All Sizes' })}</SelectItem>
                {allSizes.map(size => (
                  <SelectItem key={size} value={size.toString()}>DN {size}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {hasActiveFilters && (
              <Button
                variant="outline"
                onClick={clearFilters}
                className="border-destructive/50 text-destructive hover:bg-destructive/10"
              >
                <X className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
                {t('clearFilters')}
              </Button>
            )}
          </div>

          {/* Active Filters Summary */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 pt-2">
              {searchQuery && (
                <Badge variant="secondary" className="bg-accent/20 text-accent">
                  {tObj({ fa: 'جستجو:', en: 'Search:' })} "{searchQuery}"
                </Badge>
              )}
              {categoryFilter !== 'all' && (
                <Badge variant="secondary" className="bg-accent/20 text-accent">
                  {tObj(categoryNames[categoryFilter as keyof typeof categoryNames])}
                </Badge>
              )}
              {mechanismFilter !== 'all' && (
                <Badge variant="secondary" className="bg-accent/20 text-accent">
                  {tObj(mechanismNames[mechanismFilter as keyof typeof mechanismNames])}
                </Badge>
              )}
              {sizeFilter !== 'all' && (
                <Badge variant="secondary" className="bg-accent/20 text-accent">
                  DN {sizeFilter}
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6 text-muted-foreground">
          {tObj({ 
            fa: `${filteredProducts.length} محصول یافت شد`, 
            en: `${filteredProducts.length} products found` 
          })}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Filter className="w-16 h-16 mx-auto text-muted-foreground mb-4 opacity-50" />
            <h3 className="text-xl font-semibold mb-2">
              {tObj({ fa: 'محصولی یافت نشد', en: 'No products found' })}
            </h3>
            <p className="text-muted-foreground mb-6">
              {tObj({ 
                fa: 'لطفاً فیلترهای خود را تغییر دهید', 
                en: 'Please adjust your filters' 
              })}
            </p>
            <Button onClick={clearFilters} variant="outline">
              {t('clearFilters')}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
