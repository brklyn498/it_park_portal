import { LayoutPanelLeft } from 'lucide-react';

interface HeaderProps {
    toggleTheme: () => void;
    isItPark: boolean;
}

export function Header({ toggleTheme, isItPark }: HeaderProps) {
    return (
        <header className="border-b border-border bg-card sticky top-0 z-50">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                        UZ
                    </div>
                    <div>
                        <h1 className="text-xl font-bold tracking-tight">National ICT Ecosystem</h1>
                        <p className="text-sm text-muted-foreground">{isItPark ? 'IT Park Branding' : 'Uzbekistan Digital Gateway'}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <nav className="hidden gap-8 lg:flex items-center mr-4">
                        <a href="#digital-uzbekistan" className="text-sm font-medium hover:text-primary transition-colors">
                            Digital Services
                        </a>
                        <a href="#it-park-uzbekistan" className="text-sm font-medium hover:text-primary transition-colors">
                            IT Park
                        </a>
                    </nav>

                    <button
                        onClick={toggleTheme}
                        className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 border ${isItPark
                                ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 hover:opacity-90'
                                : 'bg-background text-foreground border-border hover:bg-muted'
                            }`}
                    >
                        <LayoutPanelLeft className={`h-4 w-4 ${isItPark ? 'animate-pulse' : ''}`} />
                        <span className="hidden sm:inline">{isItPark ? 'IT Park Theme' : 'Standard Theme'}</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
