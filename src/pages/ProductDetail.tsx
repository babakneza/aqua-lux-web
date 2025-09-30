import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { products } from '@/data/products';
import { useTranslation } from '@/hooks/useTranslation';
import { useLocale } from '@/contexts/LocaleContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductCard } from '@/components/ProductCard';
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  Download,
  Phone,
  ZoomIn,
  Ruler,
  Gauge,
  Award,
} from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const ProductDetail = () => {
  const { slug } = useParams();
  const { t, tObj } = useTranslation();
  const { locale } = useLocale();
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.mechanism === product.mechanism))
    .slice(0, 3);

  const isRTL = locale === 'fa';
  const ArrowIcon = isRTL ? ArrowRight : ArrowLeft;

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 space-x-reverse text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-accent transition-colors">{t('home')}</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-accent transition-colors">{t('products')}</Link>
          <span>/</span>
          <span className="text-foreground">{tObj(product.title)}</span>
        </nav>

        {/* Back Button */}
        <Button
          variant="ghost"
          asChild
          className="mb-6 hover:bg-accent/10"
        >
          <Link to="/products">
            <ArrowIcon className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            {t('backToProducts')}
          </Link>
        </Button>

        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Images */}
          <div className="lg:col-span-2 space-y-4">
            {/* Main Image */}
            <div
              className="glass-panel rounded-2xl p-8 h-96 flex items-center justify-center cursor-pointer group overflow-hidden"
              onClick={() => setLightboxOpen(true)}
            >
              <img
                src={product.images[selectedImage]}
                alt={tObj(product.title)}
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex space-x-4 space-x-reverse">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`glass-panel rounded-xl p-4 w-24 h-24 transition-all hover-scale ${
                      selectedImage === idx ? 'ring-2 ring-accent' : ''
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info & Actions */}
          <div className="space-y-6">
            <div className="glass-panel p-6 rounded-2xl space-y-4">
              {/* Title & Category */}
              <div>
                <Badge className="mb-3 bg-gold/90 text-gold-foreground">
                  {tObj({
                    fa: product.category === 'domestic' ? 'خانگی' : product.category === 'industrial' ? 'صنعتی' : 'کشاورزی',
                    en: product.category === 'domestic' ? 'Residential' : product.category === 'industrial' ? 'Industrial' : 'Agricultural'
                  })}
                </Badge>
                <h1 className="text-3xl font-bold mb-2 gradient-text">
                  {tObj(product.title)}
                </h1>
                <p className="text-muted-foreground">
                  {tObj(product.descriptionShort)}
                </p>
              </div>

              {/* Quick Specs */}
              <div className="space-y-3 py-4 border-y border-border/50">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <Gauge className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <span className="text-sm text-muted-foreground">
                      {tObj({ fa: 'مکانیزم:', en: 'Mechanism:' })}
                    </span>
                    <span className="font-semibold ltr:ml-2 rtl:mr-2">
                      {tObj({
                        fa: product.mechanism === 'multi-jet' ? 'مولتی جت' :
                            product.mechanism === 'single-jet' ? 'تک جت' :
                            product.mechanism === 'woltman' ? 'ولتمن' :
                            product.mechanism === 'ultrasonic' ? 'اولتراسونیک' : 'الکترومغناطیسی',
                        en: product.mechanism.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('-')
                      })}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 space-x-reverse">
                  <Ruler className="w-5 h-5 text-accent flex-shrink-0" />
                  <div>
                    <span className="text-sm text-muted-foreground">
                      {tObj({ fa: 'سایزها:', en: 'Sizes:' })}
                    </span>
                    <span className="font-semibold ltr:ml-2 rtl:mr-2">
                      DN {product.sizesDN.join(', ')}
                    </span>
                  </div>
                </div>

                {product.measurementClass && (
                  <div className="flex items-center space-x-3 space-x-reverse">
                    <Award className="w-5 h-5 text-accent flex-shrink-0" />
                    <div>
                      <span className="text-sm text-muted-foreground">
                        {tObj({ fa: 'کلاس:', en: 'Class:' })}
                      </span>
                      <span className="font-semibold ltr:ml-2 rtl:mr-2">
                        {product.measurementClass}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Standards */}
              <div>
                <h3 className="text-sm font-semibold mb-2">{t('standards')}</h3>
                <div className="flex flex-wrap gap-2">
                  {product.standards.map((standard) => (
                    <Badge key={standard} variant="secondary" className="bg-secondary/30">
                      {standard}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-4">
                <Button className="w-full magnetic-btn bg-gradient-gold" size="lg" asChild>
                  <Link to="/contact">
                    <FileText className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                    {t('addToQuote')}
                  </Link>
                </Button>

                <Button variant="outline" className="w-full" size="lg" asChild>
                  <Link to="/contact">
                    <Phone className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                    {t('contactSales')}
                  </Link>
                </Button>

                {product.datasheetUrl && (
                  <Button variant="ghost" className="w-full" size="lg" asChild>
                    <a href={product.datasheetUrl} download>
                      <Download className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
                      {t('downloadDatasheet')}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="glass-panel w-full justify-start overflow-x-auto">
            <TabsTrigger value="description">{t('description')}</TabsTrigger>
            <TabsTrigger value="specifications">{t('specifications')}</TabsTrigger>
            <TabsTrigger value="standards">{t('standards')}</TabsTrigger>
            <TabsTrigger value="documents">{t('documents')}</TabsTrigger>
          </TabsList>

          <TabsContent value="description" className="glass-panel p-8 rounded-2xl mt-4">
            <p className="text-foreground/90 leading-relaxed">
              {tObj(product.descriptionLong)}
            </p>
          </TabsContent>

          <TabsContent value="specifications" className="glass-panel p-8 rounded-2xl mt-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-border/30">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <tr key={key} className="hover:bg-accent/5">
                      <td className="py-3 ltr:pr-6 rtl:pl-6 font-semibold capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </td>
                      <td className="py-3">
                        {typeof value === 'object' ? tObj(value) : value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="standards" className="glass-panel p-8 rounded-2xl mt-4">
            <div className="space-y-4">
              {product.standards.map((standard) => (
                <div key={standard} className="flex items-start space-x-3 space-x-reverse p-4 bg-secondary/10 rounded-lg">
                  <Award className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">{standard}</h4>
                    <p className="text-sm text-muted-foreground">
                      {tObj({ fa: 'استاندارد بین‌المللی تایید شده', en: 'Certified international standard' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="documents" className="glass-panel p-8 rounded-2xl mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.datasheetUrl && (
                <a
                  href={product.datasheetUrl}
                  download
                  className="flex items-center space-x-3 space-x-reverse p-4 bg-secondary/10 hover:bg-secondary/20 rounded-lg transition-colors"
                >
                  <FileText className="w-8 h-8 text-accent" />
                  <div>
                    <h4 className="font-semibold">{tObj({ fa: 'دیتاشیت محصول', en: 'Product Datasheet' })}</h4>
                    <p className="text-sm text-muted-foreground">PDF</p>
                  </div>
                </a>
              )}
              {product.installManualUrl && (
                <a
                  href={product.installManualUrl}
                  download
                  className="flex items-center space-x-3 space-x-reverse p-4 bg-secondary/10 hover:bg-secondary/20 rounded-lg transition-colors"
                >
                  <FileText className="w-8 h-8 text-accent" />
                  <div>
                    <h4 className="font-semibold">{tObj({ fa: 'راهنمای نصب', en: 'Installation Manual' })}</h4>
                    <p className="text-sm text-muted-foreground">PDF</p>
                  </div>
                </a>
              )}
            </div>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-6 gold-text">{t('relatedProducts')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-4xl bg-black/95 border-none">
          <img
            src={product.images[selectedImage]}
            alt={tObj(product.title)}
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductDetail;
