export function Hero() {
    return (
        <div className="relative space-y-8 text-center py-12">
            {/* Background accent grid */}
            <div className="absolute inset-0 -z-10 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, var(--primary) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
            }} />

            <div className="space-y-4">
                <div className="inline-block">
                    <span className="text-xs md:text-sm uppercase tracking-widest text-primary/70 font-semibold">
                        Digital Ecosystem Navigator
                    </span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
                    Uzbekistan <span className="text-primary italic">ICT</span> Infrastructure Hub
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Centralized gateway to national digital services, government platforms, and innovation ecosystem. Navigate Uzbekistan's comprehensive ICT infrastructure seamlessly.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                <a
                    href="#digital-uzbekistan"
                    className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-8 py-3.5 font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
                >
                    Government Services
                </a>
                <a
                    href="#it-park-uzbekistan"
                    className="inline-flex items-center justify-center rounded-lg border border-primary/50 text-primary px-8 py-3.5 font-semibold hover:bg-primary/5 hover:border-primary transition-all"
                >
                    Innovation Hub
                </a>
            </div>
        </div>
    );
}
