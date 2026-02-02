import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EcosystemSection } from './components/EcosystemSection';
import { organizations } from './data/organizations';

function App() {
    const [theme, setTheme] = useState<'default' | 'itpark'>('default');

    const toggleTheme = () => {
        setTheme(prev => prev === 'default' ? 'itpark' : 'default');
    };

    const isItPark = theme === 'itpark';

    // Digital Uzbekistan Track: Infrastructure, Governance, Postal, Research, Insurance
    const digitalUzOrgs = organizations.filter(org =>
        ["Governance", "Infrastructure", "Research & Space", "Postal & Logistics", "Insurance"].includes(org.category)
    ).map(org => ({
        name: org.name,
        url: org.url,
        description: org.description,
        details: org.details
    }));

    // IT Park Track: Innovation, Education, Venture, Event
    const itParkOrgs = organizations.filter(org =>
        ["Innovation", "Education", "Venture", "Event"].includes(org.category)
    ).map(org => ({
        name: org.name,
        url: org.url,
        description: org.description,
        details: org.details
    }));

    return (
        <div className={`min-h-screen bg-background text-foreground font-sans transition-all duration-300 ${isItPark ? 'itpark' : ''}`}>
            <Header toggleTheme={toggleTheme} isItPark={isItPark} />
            <main className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-20 space-y-32">
                <Hero />

                <div id="digital-uzbekistan">
                    <EcosystemSection
                        title="Digital Uzbekistan"
                        description="National digital infrastructure and core government services powering the digital state."
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
                        description="Innovation hub, talent development, and the engine of Uzbekistan's IT industry growth."
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
            </main>

            <footer className="border-t border-border bg-card/50 py-12 mt-20">
                <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3 opacity-60">
                        <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground font-bold text-xs">
                            UZ
                        </div>
                        <span className="text-sm font-semibold tracking-tight">ICT Navigator 2026</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        &copy; 2026 Strategic ICT Ecosystem Assessment. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms</a>
                        <a href="#" className="hover:text-primary transition-colors">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
