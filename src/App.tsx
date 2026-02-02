import { useState, useMemo } from 'react';
import { Search, X, LayoutTemplate, Zap, ShieldCheck } from 'lucide-react';
import { EcosystemSection } from './components/EcosystemSection';
import { ModernCard } from './components/ModernCard';
import { organizations } from './data/organizations';

function App() {
    // Default Design Mode: 'classic' (White Background)
    const [designMode, setDesignMode] = useState<'modern' | 'classic'>(() => {
        return (localStorage.getItem('portal-design') as 'modern' | 'classic') || 'classic';
    });

    const [searchQuery, setSearchQuery] = useState('');

    const toggleDesignMode = () => {
        const next = designMode === 'modern' ? 'classic' : 'modern';
        setDesignMode(next);
        localStorage.setItem('portal-design', next);
    };

    const isModern = designMode === 'modern';

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

    // Grouping for Classic views
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
        <div className={`min-h-screen transition-all duration-500 font-sans ${isModern ? 'modern-mode bg-[#020617] text-white' : 'bg-white text-[#020617]'}`}>

            {/* Conditional Header Styling */}
            <header className={`sticky top-0 z-50 border-b transition-all duration-500 ${isModern ? 'border-white/5 bg-black/60 backdrop-blur-2xl' : 'border-slate-200 bg-white/90 backdrop-blur-md'}`}>
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <div className={`absolute -inset-1 bg-blended-gradient rounded-xl blur ${isModern ? 'opacity-25' : 'opacity-10'} group-hover:opacity-100 transition duration-1000`}></div>
                            <div className={`relative flex h-10 w-10 items-center justify-center rounded-xl font-black text-lg border ${isModern ? 'bg-black border-white/10 text-white' : 'bg-slate-100 border-slate-200 text-slate-900'}`}>
                                <span>UZ</span>
                            </div>
                        </div>
                        <div className={`hidden sm:block ${isModern ? 'text-white' : 'text-slate-900'}`}>
                            <h1 className="text-sm font-black tracking-tight">STRATEGIC <span className="text-blended-gradient">NAVIGATOR</span></h1>
                            <p className="text-[9px] text-muted-foreground uppercase tracking-[0.3em] font-medium leading-none mt-1">
                                Digital Uzbekistan + IT Park
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleDesignMode}
                            className={`group flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wider transition-all ${isModern
                                    ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
                                    : 'border-slate-200 bg-slate-50 text-slate-900 hover:bg-slate-100'
                                }`}
                        >
                            <LayoutTemplate className={`h-4 w-4 transition-transform group-hover:rotate-12 ${isModern ? 'text-primary' : 'text-blue-600'}`} />
                            <span>{isModern ? 'Classic View' : 'Modern Dashboard'}</span>
                        </button>

                        <div className={`flex h-8 w-8 items-center justify-center rounded-full border ${isModern ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                            <Zap className={`h-4 w-4 ${isModern ? 'text-itpark' : 'text-green-600'}`} />
                        </div>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-7xl px-4 md:px-8 py-10 md:py-20">
                {isModern ? (
                    /* --- MODERN DASHBOARD VIEW (Dark) --- */
                    <div className="space-y-16">
                        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                            <div className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-black tracking-[0.2em] uppercase">
                                    <ShieldCheck className="h-3.5 w-3.5 text-itpark" />
                                    <span className="text-blended-gradient">Global Asset Directory</span>
                                </div>
                                <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.8]">
                                    THE <span className="text-blended-gradient">UNIVERSE</span>
                                </h2>
                            </div>

                            <div className="relative w-full max-w-md group">
                                <div className="absolute -inset-0.5 bg-blended-gradient rounded-2xl blur opacity-10 group-focus-within:opacity-30 transition duration-500"></div>
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                <input
                                    type="text"
                                    placeholder="Search ecosystem..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-black border border-white/10 rounded-2xl focus:outline-none focus:border-white/20 transition-all text-sm text-white font-medium placeholder:text-muted-foreground/50"
                                />
                                {searchQuery && (
                                    <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white">
                                        <X className="h-5 w-5" />
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredOrgs.map((org) => (
                                <ModernCard key={org.name} {...org} />
                            ))}
                        </div>
                    </div>
                ) : (
                    /* --- CLASSIC VIEW (White Default) --- */
                    <div className="space-y-40">
                        <section className="relative overflow-hidden rounded-3xl p-12 md:p-24 bg-slate-50 border border-slate-100">
                            <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-blue-500/5 blur-[100px]"></div>
                            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-green-500/5 blur-[100px]"></div>

                            <div className="relative z-10 space-y-8 text-center max-w-4xl mx-auto">
                                <div className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-400">Digital Ecosystem Navigator</div>
                                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-slate-900">
                                    Uzbekistan <span className="text-blended-gradient italic">ICT Infrastructure Hub</span>
                                </h2>
                                <p className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                                    Centralized gateway to national digital services, government platforms, and the innovation ecosystem.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4 pt-4">
                                    <button className="px-8 py-4 bg-slate-900 text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/10">
                                        Government Services
                                    </button>
                                    <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-black uppercase tracking-widest text-xs rounded-xl hover:bg-slate-50 transition-all">
                                        Innovation Hub
                                    </button>
                                </div>
                            </div>
                        </section>

                        <div id="digital-uzbekistan">
                            <EcosystemSection
                                title="Digital Uzbekistan"
                                description="Strategic national infrastructure and digital government services."
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
                                description="Innovation, Venture, and Talent acceleration engine."
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

            <footer className={`border-t py-16 transition-all duration-500 ${isModern ? 'border-white/5 bg-black' : 'border-slate-200 bg-slate-50'}`}>
                <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blended-gradient text-white font-black text-xs">UZ</div>
                            <span className={`text-sm font-black tracking-widest uppercase ${isModern ? 'text-white' : 'text-slate-900'}`}>ICT Navigator 2.0</span>
                        </div>
                        <p className="text-xs text-muted-foreground/60 max-w-sm leading-relaxed uppercase tracking-tighter">
                            The definitive Strategic Asset Gateway for the Republic of Uzbekistan. High-fidelity ecosystem monitoring.
                        </p>
                    </div>

                    <div className="flex flex-col md:items-end gap-6 w-full md:w-auto">
                        <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                            <a href="#" className="hover:text-primary transition-colors">Security</a>
                            <a href="#" className="hover:text-primary transition-colors">Protocol</a>
                            <a href="#" className="hover:text-primary transition-colors">Contact</a>
                        </div>
                        <p className={`text-[10px] font-bold uppercase tracking-widest ${isModern ? 'text-muted-foreground/40' : 'text-slate-400'}`}>
                            &copy; 2026 Strategic Assessment Mission. All systems operational.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
