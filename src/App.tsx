import { ArrowRight } from 'lucide-react';
import { organizations } from './data/organizations';

// --- ORIGINAL ZIP COMPONENTS ---

function Header() {
    return (
        <header className="border-b border-border bg-card">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-8">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                        UZ
                    </div>
                    <div>
                        <h1 className="text-xl font-bold tracking-tight">National ICT Ecosystem</h1>
                        <p className="text-sm text-muted-foreground">Uzbekistan Digital Gateway</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

function Hero() {
    return (
        <div className="relative space-y-8 text-center py-12">
            <div className="absolute inset-0 -z-10 opacity-5 bg-grid-primary" />
            <div className="space-y-4">
                <div className="inline-block">
                    <span className="text-xs md:text-sm uppercase tracking-widest text-primary/70 font-semibold">
                        Digital Ecosystem Navigator
                    </span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
                    Uzbekistan <span className="text-primary">ICT</span> Infrastructure Hub
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Centralized gateway to national digital services, government platforms, and innovation ecosystem. Navigate Uzbekistan's comprehensive ICT infrastructure seamlessly.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                <a href="#digital-uzbekistan" className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3.5 font-semibold hover:shadow-lg transition-all">
                    Government Services
                </a>
                <a href="#it-park-uzbekistan" className="inline-flex items-center justify-center rounded-lg border border-primary/50 text-primary px-8 py-3.5 font-semibold hover:bg-primary/5 transition-all">
                    Innovation Hub
                </a>
            </div>
        </div>
    );
}

function NavigationCard({ name, url, description, variant = 'default', colorTheme = 'blue' }: any) {
    const isPrimary = variant === 'primary';
    const isGreen = colorTheme === 'green';

    const themeAccent = isGreen ? 'from-green-500/15 to-green-500/5' : 'from-blue-500/15 to-blue-500/5';
    const themeBorder = isGreen ? 'border-green-500/40' : 'border-blue-500/40';
    const themeHover = isGreen ? 'hover:border-green-500/60 hover:shadow-lg hover:shadow-green-500/15' : 'hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-500/15';
    const themeText = isGreen ? 'text-green-600' : 'text-blue-600';
    const themeIcon = isGreen ? 'text-green-500' : 'text-blue-500';
    const themeBg = isGreen ? 'bg-green-500/10' : 'bg-blue-500/10';

    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="group block h-full">
            <div className={`relative overflow-hidden rounded-lg border transition-all duration-300 h-full flex flex-col ${isPrimary
                    ? `${themeBorder} bg-gradient-to-br ${themeAccent} p-6 md:p-8 ${themeHover}`
                    : 'border-border/50 bg-card/40 p-4 md:p-6 hover:border-primary/40 hover:bg-card/60 hover:shadow-lg hover:shadow-primary/10'
                }`}>
                <div className="space-y-3 flex-1">
                    <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1 flex-1">
                            <h4 className={`font-semibold transition-colors ${isPrimary ? `text-lg md:text-xl ${themeText}` : 'text-sm md:text-base text-foreground group-hover:text-primary'}`}>
                                {name}
                            </h4>
                            <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
                                {description}
                            </p>
                        </div>
                        <ArrowRight className={`h-4 w-4 md:h-5 md:w-5 flex-shrink-0 transition-all opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 ${isPrimary ? themeIcon : 'text-muted-foreground'}`} />
                    </div>
                    {isPrimary && (
                        <div className={`pt-3 text-xs text-muted-foreground border-t ${isGreen ? 'border-green-500/20' : 'border-blue-500/20'}`}>
                            <span className={`inline-block ${themeBg} px-2 py-1 rounded ${themeText} font-medium`}>
                                Primary Gateway
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </a>
    );
}

function EcosystemSection({ title, description, primaryLink, links, colorTheme = 'blue' }: any) {
    return (
        <section id={title.toLowerCase().replace(/\s+/g, '-')} className="space-y-6">
            <div className={`flex flex-col md:flex-row md:items-center gap-6 p-6 rounded-lg border ${colorTheme === 'blue' ? 'border-blue-500/30 bg-blue-500/5' : 'border-green-500/30 bg-green-500/5'} transition-colors`}>
                <div className={`h-16 w-16 rounded-full flex items-center justify-center font-bold text-white ${colorTheme === 'blue' ? 'bg-blue-600' : 'bg-green-600'}`}>
                    {title[0]}
                </div>
                <div className="flex-1 space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground">{description}</p>
                </div>
            </div>

            <div className="space-y-4">
                {primaryLink && (
                    <NavigationCard variant="primary" name={primaryLink.name} url={primaryLink.url} description={primaryLink.description} colorTheme={colorTheme} />
                )}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2">
                    {links.map((link: any) => (
                        <NavigationCard key={link.name} {...link} colorTheme={colorTheme} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// --- MAIN APP COMPONENT ---

function App() {
    const digitalUzOrgs = organizations.filter(org =>
        ["Governance", "Infrastructure", "Research & Space", "Postal & Logistics", "Insurance"].includes(org.category)
    ).map(org => ({
        name: org.name,
        url: org.url,
        description: org.description
    }));

    const itParkOrgs = organizations.filter(org =>
        ["Innovation", "Education", "Venture", "Event"].includes(org.category)
    ).map(org => ({
        name: org.name,
        url: org.url,
        description: org.description
    }));

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20">
                <Hero />
                <div className="mt-20 grid gap-16 lg:grid-cols-2">
                    <EcosystemSection
                        title="Digital Uzbekistan"
                        description="National digital infrastructure and core government services"
                        colorTheme="blue"
                        primaryLink={{
                            name: 'digital.uz',
                            url: 'https://digital.uz',
                            description: 'Primary gateway to national digital ecosystem'
                        }}
                        links={digitalUzOrgs}
                    />

                    <EcosystemSection
                        title="IT Park Uzbekistan"
                        description="Innovation hub, talent development, and IT industry ecosystem"
                        colorTheme="green"
                        primaryLink={{
                            name: 'IT Park',
                            url: 'https://itpark.uz',
                            description: 'Central hub for innovation and technology'
                        }}
                        links={itParkOrgs}
                    />
                </div>
            </main>
            <footer className="border-t border-border py-12 mt-20">
                <div className="mx-auto max-w-7xl px-4 md:px-8 text-center text-sm text-muted-foreground text-balance">
                    &copy; 2026 Assessment Mission. All systems operational. Strategic gateway to Uzbekistan's technology landscape.
                </div>
            </footer>
        </div>
    );
}

export default App;
