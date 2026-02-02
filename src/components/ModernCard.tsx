import { Info, ExternalLink, ArrowRight } from 'lucide-react';

interface ModernCardProps {
    name: string;
    description: string;
    url: string;
    details?: string;
    category: string;
}

export function ModernCard({ name, description, url, details, category }: ModernCardProps) {
    return (
        <div className="glass glass-hover p-5 rounded-xl group flex flex-col h-full relative overflow-hidden">
            {/* Decorative accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 transition-all group-hover:bg-primary/10 group-hover:scale-110" />

            <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start gap-3">
                    <div className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary border border-primary/20">
                        {category}
                    </div>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="h-4 w-4" />
                    </a>
                </div>

                <div className="space-y-2">
                    <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                        {name}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                        {description}
                    </p>
                </div>

                {details && (
                    <div className="pt-3 border-t border-border/30 flex gap-2">
                        <Info className="h-3 w-3 text-primary/60 flex-shrink-0 mt-0.5" />
                        <p className="text-[10px] text-muted-foreground/80 italic leading-snug">
                            {details}
                        </p>
                    </div>
                )}
            </div>

            <div className="mt-5 flex items-center justify-between text-[11px] font-medium text-primary">
                <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 group/link">
                    Access Platform
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </a>
                <span className="text-muted-foreground/40 text-[9px] uppercase tracking-widest">{new URL(url).hostname}</span>
            </div>
        </div>
    );
}
