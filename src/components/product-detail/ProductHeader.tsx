import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Download, Share2, Printer } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProductHeaderProps {
  title: string;
  shortDesc: string;
  meta: {
    dn: string;
    class: string;
    standards: string[];
  };
  catalogUrl?: string;
}

export const ProductHeader = ({ title, shortDesc, meta, catalogUrl }: ProductHeaderProps) => {
  const { toast } = useToast();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: shortDesc,
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({ title: 'Link copied to clipboard' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-3 leading-tight">{title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">{shortDesc}</p>
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary" className="text-sm py-1 px-3">
          {meta.dn}
        </Badge>
        <Badge variant="secondary" className="text-sm py-1 px-3">
          Class {meta.class}
        </Badge>
        {meta.standards.map((std) => (
          <Badge key={std} className="text-sm py-1 px-3 bg-accent/20 text-accent-foreground">
            {std}
          </Badge>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button size="lg" className="flex-1 magnetic-btn bg-gradient-gold" asChild>
          <Link to="/contact">
            <FileText className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
            Request Quote
          </Link>
        </Button>
        {catalogUrl && (
          <Button size="lg" variant="outline" className="flex-1" asChild>
            <a href={catalogUrl} download>
              <Download className="w-5 h-5 ltr:mr-2 rtl:ml-2" />
              Download Catalog
            </a>
          </Button>
        )}
      </div>

      {/* Secondary Actions */}
      <div className="flex gap-2">
        <Button variant="ghost" size="sm" onClick={handleShare}>
          <Share2 className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
          Share
        </Button>
        <Button variant="ghost" size="sm" onClick={handlePrint}>
          <Printer className="w-4 h-4 ltr:mr-2 rtl:ml-2" />
          Print
        </Button>
      </div>
    </div>
  );
};
