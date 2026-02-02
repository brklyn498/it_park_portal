interface EcosystemHeaderProps {
    title: string;
    description: string;
    logoSrc?: string;
    logoAlt?: string;
    colorTheme: 'blue' | 'green';
}

export function EcosystemHeader({
    title,
    description,
    logoSrc,
    logoAlt,
    colorTheme,
}: EcosystemHeaderProps) {
    const isBluTheme = colorTheme === 'blue';
    const bgAccentLight = isBluTheme ? 'bg-blue-500/5' : 'bg-green-500/5';
    const borderColor = isBluTheme ? 'border-blue-500/20' : 'border-green-500/20';
    const hoverBorder = isBluTheme ? 'hover:border-blue-500/40' : 'hover:border-green-500/40';

    return (
        <div
            className={`flex flex-col md:flex-row md:items-center gap-6 p-8 rounded-xl border ${borderColor} ${bgAccentLight} transition-all duration-300 ${hoverBorder}`}
        >
            {logoSrc && (
                <div className="bg-white p-3 rounded-lg shadow-sm w-fit border border-border/50">
                    <img
                        src={logoSrc}
                        alt={logoAlt || title}
                        className="h-12 md:h-16 w-auto object-contain"
                    />
                </div>
            )}
            <div className="flex-1 space-y-2">
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground">{title}</h3>
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
