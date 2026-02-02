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
        <div className="glass-card p-6 rounded-2xl group flex flex-col h-full relative overflow-hidden">
            {/* Blended identity accent line top */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-blended-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start gap-3">
                    <div className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/5 text-primary border border-white/10 group-hover:border-primary/30 transition-colors">
                        {category}
                    </div>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all duration-300"
                    >
                        <ExternalLink className="h-4 w-4" />
                    </a>
                </div>

                <div className="space-y-2">
                    <h4 className="text-base font-bold text-foreground group-hover:text-blended-gradient transition-all duration-300 flex items-center gap-2">
                        {name}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                        {description}
                    </p>
                </div>

                {details && (
                    <div className="pt-4 mt-auto border-t border-white/5 flex gap-2">
                        <Info className="h-3 w-3 text-itpark/60 flex-shrink-0 mt-0.5" />
                        <p className="text-[10px] text-muted-foreground/80 italic leading-snug">
                            {details}
                        </p>
                    </div>
                )}
            </div>

            <div className="mt-6 flex items-center justify-between text-[11px] font-bold tracking-tight">
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-blended-gradient hover:text-white transition-all duration-300 group/link"
                >
                    Access HUB
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </a>
                <span className="text-muted-foreground/30 text-[9px] uppercase tracking-[0.2em] font-black">{new URL(url).hostname}</span>
            </div>
        </div>
    );
}
