import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MediaGallery } from '@/components/product-detail/MediaGallery';
import { ProductHeader } from '@/components/product-detail/ProductHeader';
import { KeySpecsCard } from '@/components/product-detail/KeySpecsCard';
import { ProductSpecsTable } from '@/components/product-detail/ProductSpecsTable';
import { FeaturesBenefits } from '@/components/product-detail/FeaturesBenefits';
import { StandardsCompliance } from '@/components/product-detail/StandardsCompliance';
import { SizesTable } from '@/components/product-detail/SizesTable';
import { PerformanceChart } from '@/components/product-detail/PerformanceChart';
import { DownloadsPanel } from '@/components/product-detail/DownloadsPanel';
import { mockProductDetail } from '@/data/mockProductDetail';

const ProductDetailNew = () => {
  const { locale } = useLocale();
  const [activeTab, setActiveTab] = useState('specs');
  const isRTL = locale === 'fa';
  const ArrowIcon = isRTL ? ArrowRight : ArrowLeft;

  const productData = mockProductDetail;

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-accent transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-foreground">{productData.title}</span>
        </nav>

        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6 hover:bg-accent/10">
          <Link to="/products">
            <ArrowIcon className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
            Back to Products
          </Link>
        </Button>

        {/* Desktop Layout (3-column) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 mb-12">
          {/* Left: Media Gallery (col 1-5) */}
          <div className="lg:col-span-5">
            <MediaGallery images={productData.gallery} featuredText={productData.featuredText} />
          </div>

          {/* Center: Product Header (col 6-8) */}
          <div className="lg:col-span-4">
            <ProductHeader
              title={productData.title}
              shortDesc={productData.shortDesc}
              meta={productData.meta}
              catalogUrl={productData.catalogUrl}
            />
          </div>

          {/* Right: Key Specs (col 9-12) */}
          <div className="lg:col-span-3">
            <KeySpecsCard
              dn={productData.keySpecs.dn}
              class={productData.keySpecs.class}
              standards={productData.keySpecs.standards}
              temperatureRangeC={productData.keySpecs.temperatureRangeC}
              workingPressureBar={productData.keySpecs.workingPressureBar}
            />
          </div>
        </div>

        {/* Mobile Layout (stacked) */}
        <div className="lg:hidden space-y-6 mb-12">
          <MediaGallery images={productData.gallery} featuredText={productData.featuredText} />
          <ProductHeader
            title={productData.title}
            shortDesc={productData.shortDesc}
            meta={productData.meta}
            catalogUrl={productData.catalogUrl}
          />
          <KeySpecsCard
            dn={productData.keySpecs.dn}
            class={productData.keySpecs.class}
            standards={productData.keySpecs.standards}
            temperatureRangeC={productData.keySpecs.temperatureRangeC}
            workingPressureBar={productData.keySpecs.workingPressureBar}
          />
        </div>

        {/* Detailed Sections - Tabs (Desktop) */}
        <div className="hidden lg:block">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="glass-panel w-full justify-start overflow-x-auto mb-6">
              <TabsTrigger value="specs">Technical Specifications</TabsTrigger>
              <TabsTrigger value="features">Features & Benefits</TabsTrigger>
              <TabsTrigger value="standards">Standards & Compliance</TabsTrigger>
              <TabsTrigger value="sizes">Sizes & Dimensions</TabsTrigger>
              <TabsTrigger value="chart">Performance Chart</TabsTrigger>
              <TabsTrigger value="description">Full Description</TabsTrigger>
              <TabsTrigger value="downloads">Downloads</TabsTrigger>
            </TabsList>

            <TabsContent value="specs" className="glass-panel p-8 rounded-2xl">
              <ProductSpecsTable rows={productData.specTable} />
            </TabsContent>

            <TabsContent value="features" className="glass-panel p-8 rounded-2xl">
              <FeaturesBenefits features={productData.features} benefits={productData.benefits} />
            </TabsContent>

            <TabsContent value="standards" className="glass-panel p-8 rounded-2xl">
              <StandardsCompliance standards={productData.standards} certificates={productData.certificates} />
            </TabsContent>

            <TabsContent value="sizes" className="glass-panel p-8 rounded-2xl">
              <SizesTable sizes={productData.sizes} />
            </TabsContent>

            <TabsContent value="chart" className="glass-panel p-8 rounded-2xl">
              <PerformanceChart chartData={productData.chart} />
            </TabsContent>

            <TabsContent value="description" className="glass-panel p-8 rounded-2xl">
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: productData.descriptionHtml }}
              />
            </TabsContent>

            <TabsContent value="downloads" className="glass-panel p-8 rounded-2xl">
              <DownloadsPanel catalogUrl={productData.catalogUrl} attachments={productData.attachments} />
            </TabsContent>
          </Tabs>
        </div>

        {/* Detailed Sections - Accordion (Mobile) */}
        <div className="lg:hidden glass-panel p-6 rounded-2xl">
          <Accordion type="single" collapsible defaultValue="specs">
            <AccordionItem value="specs">
              <AccordionTrigger className="text-lg font-semibold">Technical Specifications</AccordionTrigger>
              <AccordionContent>
                <ProductSpecsTable rows={productData.specTable} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="features">
              <AccordionTrigger className="text-lg font-semibold">Features & Benefits</AccordionTrigger>
              <AccordionContent>
                <FeaturesBenefits features={productData.features} benefits={productData.benefits} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="standards">
              <AccordionTrigger className="text-lg font-semibold">Standards & Compliance</AccordionTrigger>
              <AccordionContent>
                <StandardsCompliance standards={productData.standards} certificates={productData.certificates} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sizes">
              <AccordionTrigger className="text-lg font-semibold">Sizes & Dimensions</AccordionTrigger>
              <AccordionContent>
                <SizesTable sizes={productData.sizes} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="chart">
              <AccordionTrigger className="text-lg font-semibold">Performance Chart</AccordionTrigger>
              <AccordionContent>
                <PerformanceChart chartData={productData.chart} />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="description">
              <AccordionTrigger className="text-lg font-semibold">Full Description</AccordionTrigger>
              <AccordionContent>
                <div
                  className="prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: productData.descriptionHtml }}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="downloads">
              <AccordionTrigger className="text-lg font-semibold">Downloads</AccordionTrigger>
              <AccordionContent>
                <DownloadsPanel catalogUrl={productData.catalogUrl} attachments={productData.attachments} />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Mobile Sticky Bottom Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 glass-panel p-4 border-t border-border z-50 safe-area-bottom">
          <div className="flex gap-3">
            <Button size="lg" className="flex-1 bg-gradient-gold" asChild>
              <Link to="/contact">Request Quote</Link>
            </Button>
            {productData.catalogUrl && (
              <Button size="lg" variant="outline" asChild>
                <a href={productData.catalogUrl} download>
                  Download
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: productData.title,
            description: productData.shortDesc,
            brand: {
              '@type': 'Brand',
              name: 'METRAB',
            },
            image: productData.gallery[0].src,
            additionalProperty: [
              { '@type': 'PropertyValue', name: 'DN', value: productData.keySpecs.dn },
              { '@type': 'PropertyValue', name: 'Class', value: productData.keySpecs.class },
              ...productData.keySpecs.standards.map((std) => ({
                '@type': 'PropertyValue',
                name: 'Standard',
                value: std,
              })),
            ],
            offers: {
              '@type': 'Offer',
              availability: 'https://schema.org/InStock',
            },
          }),
        }}
      />
    </div>
  );
};

export default ProductDetailNew;
