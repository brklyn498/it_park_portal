export function Header() {
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
                <nav className="hidden gap-8 md:flex">
                    <a href="#digital-uzbekistan" className="text-sm font-medium hover:text-primary transition-colors">
                        Digital Services
                    </a>
                    <a href="#it-park-uzbekistan" className="text-sm font-medium hover:text-primary transition-colors">
                        IT Park
                    </a>
                </nav>
            </div>
        </header>
    );
}
