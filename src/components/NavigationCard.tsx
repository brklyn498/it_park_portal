import { ArrowRight } from 'lucide-react';

interface NavigationCardProps {
    link: {
        name: string;
        url: string;
        description: string;
        details?: string;
    };
    variant?: 'default' | 'primary';
    colorTheme?: 'blue' | 'green';
}

export function NavigationCard({ link, variant = 'default', colorTheme = 'blue' }: NavigationCardProps) {
    const isPrimary = variant === 'primary';
    const isGreen = colorTheme === 'green';

    // Color classes based on theme
    const themeAccent = isGreen ? 'from-green-500/15 to-green-500/5' : 'from-blue-500/15 to-blue-500/5';
    const themeBorder = isGreen ? 'border-green-500/40' : 'border-blue-500/40';
    const themeHover = isGreen ? 'hover:border-green-500/60 hover:shadow-lg hover:shadow-green-500/15' : 'hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/15';
    const themeText = isGreen ? 'text-green-600' : 'text-blue-600';
    const themeIcon = isGreen ? 'text-green-500' : 'text-blue-500';
    const themeBg = isGreen ? 'bg-green-500/10' : 'bg-blue-500/10';

    return (
        <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full"
        >
            <div
                className={`relative overflow-hidden rounded-lg border transition-all duration-300 h-full flex flex-col ${isPrimary
                        ? `${themeBorder} bg-gradient-to-br ${themeAccent} p-6 md:p-8 ${themeHover}`
                        : 'border-border/50 bg-card/40 p-4 md:p-6 hover:border-primary/40 hover:bg-card/60 hover:shadow-lg hover:shadow-primary/10'
                    }`}
            >
                <div className="space-y-3 flex-1">
                    <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1 flex-1">
                            <h4
                                className={`font-semibold transition-colors ${isPrimary
                                        ? `text-lg md:text-xl ${themeText}`
                                        : 'text-sm md:text-base text-foreground group-hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </h4>
                            <p className="text-xs md:text-sm text-muted-foreground">
                                {link.description}
                            </p>
                            {link.details && (
                                <p className="text-[10px] md:text-xs text-muted-foreground/70 mt-2 italic">
                                    {link.details}
                                </p>
                            )}
                        </div>
                        <ArrowRight className={`h-4 w-4 md:h-5 md:w-5 flex-shrink-0 transition-all opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 ${isPrimary ? themeIcon : 'text-muted-foreground'}`} />
                    </div>

                    {isPrimary && (
                        <div className={`pt-3 text-xs text-muted-foreground border-t ${isGreen ? 'border-green-500/20' : 'border-blue-500/20'}`}>
                            <span className={`inline-block ${themeBg} px-2 py-1 rounded ${themeText} font-medium tracking-wide text-[10px] uppercase`}>
                                Primary Gateway
                            </span>
                        </div>
                    )}
                </div>

                {/* Animated gradient overlay */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                        background: isPrimary
                            ? isGreen
                                ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, transparent 100%)'
                                : 'linear-gradient(135deg, rgba(0, 102, 204, 0.1) 0%, transparent 100%)'
                            : 'linear-gradient(135deg, rgba(0, 102, 204, 0.05) 0%, transparent 100%)',
                        pointerEvents: 'none',
                    }}
                />
            </div>
        </a>
    );
}
