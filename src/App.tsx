import { useState, useMemo } from 'react';
import { Search, X, LayoutTemplate, Zap } from 'lucide-react';
import { Hero } from './components/Hero';
import { EcosystemSection } from './components/EcosystemSection';
import { ModernCard } from './components/ModernCard';
import { organizations } from './data/organizations';

function App() {
    // Design Mode State: 'modern' | 'classic'
    const [designMode, setDesignMode] = useState<'modern' | 'classic'>(() => {
        return (localStorage.getItem('portal-design') as 'modern' | 'classic') || 'modern';
    });

    const [subTheme, setSubTheme] = useState<'default' | 'itpark'>('default');
    const [searchQuery, setSearchQuery] = useState('');

    const toggleDesignMode = () => {
        const next = designMode === 'modern' ? 'classic' : 'modern';
        setDesignMode(next);
        localStorage.setItem('portal-design', next);
    };

    const toggleSubTheme = () => {
        setSubTheme(prev => prev === 'default' ? 'itpark' : 'default');
    };

    const isModern = designMode === 'modern';
    const isItPark = subTheme === 'itpark';

    // Filtering for Modern Dashboard
    const filteredOrgs = useMemo(() => {
        if (!searchQuery) return organizations;
        const q = searchQuery.toLowerCase();
        return organizations.filter(org =>
            org.name.toLowerCase().includes(q) ||
            org.description.toLowerCase().includes(q) ||
            org.category.toLowerCase().includes(q)
        );
    }, [searchQuery]);

    // Grouping for Classic/Common views
    const digitalUzOrgs = organizations.filter(org =>
        ["Governance", "Infrastructure", "Research & Space", "Postal & Logistics", "Insurance"].includes(org.category)
    ).map(org => ({
        name: org.name,
        url: org.url,
        description: org.description,
        details: org.details
    }));

    const itParkOrgs = organizations.filter(org =>
        ["Innovation", "Education", "Venture", "Event"].includes(org.category)
    ).map(org => ({
        name: org.name,
        url: org.url,
        description: org.description,
        details: org.details
    }));

    return (
        <div className={`min-h-screen bg-background text-foreground transition-all duration-500 font-sans ${!isModern ? 'classic' : ''} ${isItPark ? 'itpark' : ''}`}>

            {/* Common Header with Design Toggle */}
            <header className="border-b border-border bg-card/80 backdrop-blur-lg sticky top-0 z-50">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-base shadow-lg shadow-primary/20">
                            UZ
                        </div>
                        <div className="hidden sm:block">
                            <h1 className="text-sm font-bold tracking-tight">ICT NAVIGATOR</h1>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-widest leading-none">Strategic Asset Gateway</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4">
                        <button
                            onClick={toggleDesignMode}
                            className="group flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background hover:bg-muted transition-all text-xs font-semibold"
                        >
                            <LayoutTemplate className="h-3.5 w-3.5 text-primary" />
                            <span>{isModern ? 'Alternative Design' : 'Back to Modern'}</span>
                        </button>

                        {!isModern && (
                            <button
                                onClick={toggleSubTheme}
                                className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300 border ${isItPark
                                        ? 'bg-primary text-primary-foreground border-primary'
                                        : 'bg-background text-foreground border-border hover:bg-muted'
                                    }`}
                            >
                                <Zap className="h-3.5 w-3.5" />
                                <span className="hidden xs:inline">{isItPark ? 'IT Park Mode' : 'Standard'}</span>
                            </button>
                        )}
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-4 md:px-8 py-8 md:py-16">
                {isModern ? (
                    /* --- MODERN NEXT-GEN DASHBOARD --- */
                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="space-y-2">
                                <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold tracking-widest uppercase">
                                    <Zap className="h-3 w-3" />
                                    Next-Gen Interface
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                                    Digital <span className="text-primary underline decoration-primary/30 underline-offset-8">Universe</span>
                                </h2>
                                <p className="text-muted-foreground max-w-xl text-sm md:text-base">
                                    Omnichannel explorer for Uzbekistan's technology ecosystem, governance layers, and digital infrastructure assets.
                                </p>
                            </div>

                            {/* Search Bar */}
                            <div className="relative w-full max-w-md group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Find organization, tech, or agency..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                                />
                                {searchQuery && (
                                    <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                                        <X className="h-4 w-4" />
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Modern Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                            {filteredOrgs.map((org) => (
                                <ModernCard key={org.name} {...org} />
                            ))}
                            {filteredOrgs.length === 0 && (
                                <div className="col-span-full py-20 text-center glass rounded-2xl">
                                    <Search className="h-10 w-10 text-muted-foreground mx-auto mb-4 opacity-20" />
                                    <p className="text-muted-foreground">No matches found for "{searchQuery}"</p>
                                </div>
                            )}
                        </div>
                    </div>
                ) : (
                    /* --- CLASSIC DESIGN (Alternative) --- */
                    <div className="space-y-32">
                        <Hero />
                        <div id="digital-uzbekistan">
                            <EcosystemSection
                                title="Digital Uzbekistan"
                                description="National digital infrastructure and core government services."
                                colorTheme="blue"
                                logo={{
                                    src: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_IT_Park_Uzbekistan.svg',
                                    alt: 'Digital.uz Logo',
                                }}
                                primaryLink={{
                                    name: 'digital.uz',
                                    url: 'https://digital.uz',
                                    description: 'Primary gateway to national digital ecosystem',
                                }}
                                links={digitalUzOrgs}
                            />
                        </div>

                        <div id="it-park-uzbekistan">
                            <EcosystemSection
                                title="IT Park Uzbekistan"
                                description="Innovation hub and talent development engine."
                                colorTheme="green"
                                logo={{
                                    src: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_IT_Park_Uzbekistan.svg',
                                    alt: 'IT Park Uzbekistan Logo',
                                }}
                                primaryLink={{
                                    name: 'it-park.uz',
                                    url: 'https://it-park.uz',
                                    description: 'Central hub for innovation and technology',
                                }}
                                links={itParkOrgs}
                            />
                        </div>
                    </div>
                )}
            </main>

            <footer className="border-t border-border bg-card/30 backdrop-blur-md py-12 mt-20">
                <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <div className="flex items-center gap-3">
                            <div className="flex h-7 w-7 items-center justify-center rounded bg-primary/20 text-primary font-bold text-[10px]">UZ</div>
                            <span className="text-xs font-black tracking-widest uppercase">ICT Navigator 2.0</span>
                        </div>
                        <p className="text-[10px] text-muted-foreground/60 max-w-xs text-center md:text-left uppercase tracking-tighter">
                            Strategic gateway to the Central Asian technology landscape. Version 2.0 (Next-Gen).
                        </p>
                    </div>

                    <p className="text-[11px] text-muted-foreground font-medium">
                        &copy; 2026 Assessment Mission. Secure Platform.
                    </p>

                    <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors">Safety</a>
                        <a href="#" className="hover:text-primary transition-colors">Ethics</a>
                        <a href="#" className="hover:text-primary transition-colors">Access</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
