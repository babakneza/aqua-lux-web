import { FileText, Download } from 'lucide-react';

interface DownloadsPanelProps {
  catalogUrl?: string;
  attachments?: string[];
}

export const DownloadsPanel = ({ catalogUrl, attachments = [] }: DownloadsPanelProps) => {
  const allFiles = catalogUrl ? [{ url: catalogUrl, label: 'Product Catalog' }, ...attachments.map((url, idx) => ({ url, label: `Document ${idx + 1}` }))] : attachments.map((url, idx) => ({ url, label: `Document ${idx + 1}` }));

  if (allFiles.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
        <p>No downloadable files available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {allFiles.map((file, idx) => (
        <a
          key={idx}
          href={file.url}
          download
          className="glass-panel p-5 rounded-xl hover:bg-accent/10 transition-colors flex items-center gap-4 group"
        >
          <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
            <FileText className="w-6 h-6 text-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold truncate">{file.label}</div>
            <div className="text-sm text-muted-foreground">PDF Document</div>
          </div>
          <Download className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
        </a>
      ))}
    </div>
  );
};
