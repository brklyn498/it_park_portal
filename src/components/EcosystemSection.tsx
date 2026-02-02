import { NavigationCard } from './NavigationCard';
import { EcosystemHeader } from './EcosystemHeader';

interface Link {
    name: string;
    url: string;
    description: string;
    details?: string;
}

interface EcosystemSectionProps {
    title: string;
    description: string;
    primaryLink?: Link;
    links: Link[];
    colorTheme?: 'blue' | 'green';
    logo?: {
        src: string;
        alt: string;
    };
}

export function EcosystemSection({
    title,
    description,
    primaryLink,
    links,
    colorTheme = 'blue',
    logo,
}: EcosystemSectionProps) {
    return (
        <section id={title.toLowerCase().replace(/\s+/g, '-')} className="space-y-8">
            <EcosystemHeader
                title={title}
                description={description}
                logoSrc={logo?.src}
                logoAlt={logo?.alt}
                colorTheme={colorTheme}
            />

            <div className="space-y-6">
                {primaryLink && (
                    <div className="max-w-2xl">
                        <NavigationCard variant="primary" link={primaryLink} colorTheme={colorTheme} />
                    </div>
                )}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                    {links.map((link) => (
                        <NavigationCard key={link.name} link={link} colorTheme={colorTheme} />
                    ))}
                </div>
            </div>
        </section>
    );
}
