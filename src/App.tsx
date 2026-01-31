import React, { useState, useEffect } from 'react';
import ResidentPopup from './components/ResidentPopup';
import ResourceCard from './components/ResourceCard';
import './App.css';

const App: React.FC = () => {
    const [userType, setUserType] = useState<'resident' | 'visitor' | null>(null);

    useEffect(() => {
        const storedType = localStorage.getItem('user_status') as 'resident' | 'visitor' | null;
        if (storedType) setUserType(storedType);
    }, []);

    const handleUserSelect = (type: 'resident' | 'visitor') => {
        setUserType(type);
    };

    const resources = [
        {
            category: "Governance & Admin",
            title: "IT Park Official Portal",
            description: "The central hub for news, resident directories, and general organizational information.",
            url: "https://it-park.uz",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_IT_Park_Uzbekistan.svg"
        },
        {
            category: "Governance & Admin",
            title: "Resident Management (RMS)",
            description: "Transactional portal for reporting, tax exemptions, and legal compliance.",
            url: "https://my.it-park.uz",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_IT_Park_Uzbekistan.svg"
        },
        {
            category: "Export & FDI",
            title: "Digital Uzbekistan",
            description: "International-facing portal for attracting FDI and showcasing BPO opportunities.",
            url: "https://outsource.gov.uz",
            logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_IT_Park_Uzbekistan.svg"
        },
        {
            category: "Education",
            title: "One Million Uzbek Coders",
            description: "Mass digital literacy initiative offering free entry-level IT certification.",
            url: "https://uzbekcoders.uz",
            logoUrl: "https://uzbekcoders.uz/assets/img/logo_small.png"
        },
        {
            category: "Education",
            title: "IT Park University (ITPU)",
            description: "Modern higher education founded in partnership with EPAM Systems.",
            url: "https://itpu.uz",
            logoUrl: ""
        },
        {
            category: "Education",
            title: "IT Education Association",
            description: "Standardization body unifying private tech academies in Uzbekistan.",
            url: "https://ite-association.uz",
            logoUrl: ""
        },
        {
            category: "Finance",
            title: "StartupBase",
            description: "The 'Crunchbase of Uzbekistan'—a transparency engine for the venture market.",
            url: "https://startupbase.uz",
            logoUrl: ""
        },
        {
            category: "Finance",
            title: "IT Park Capital",
            description: "Financial operator providing ISA education loans and hardware financing.",
            url: "https://itparkcapital.uz",
            logoUrl: ""
        },
        {
            category: "Community",
            title: "ICT Week Uzbekistan",
            description: "The annual 'Davos of Tech' for the Central Asian region.",
            url: "https://ictweek.uz",
            logoUrl: "https://ictweek.uz/assets/img/logo.png"
        },
        {
            category: "Community",
            title: "Uzbekistan 360",
            description: "Immersive 360-degree virtual tours of the physical IT Park infrastructure.",
            url: "https://uzbekistan360.uz",
            logoUrl: ""
        }
    ];

    const getRecommendedResources = (type: 'resident' | 'visitor' | null) => {
        if (!type) return [];
        if (type === 'resident') return ['https://it-park.uz', 'https://uzbekcoders.uz', 'https://my.it-park.uz'];
        return ['https://outsource.gov.uz', 'https://startupbase.uz', 'https://uzbekistan360.uz'];
    };

    const recommendedUrls = getRecommendedResources(userType);

    return (
        <div className="app">
            <ResidentPopup onSelect={handleUserSelect} />

            <header className="hero">
                <div className="container">
                    <nav className="navbar">
                        <div className="logo-section">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_IT_Park_Uzbekistan.svg" alt="IT Park Logo" className="logo" />
                            <div className="logo-divider"></div>
                            <h1>RESOURCE PORTAL</h1>
                        </div>
                        <div className="nav-links">
                            <a href="#resources">Ecosystem</a>
                            <a href="#incentives">Incentives</a>
                            <button className="cta-btn">Join Residents</button>
                        </div>
                    </nav>

                    <div className="hero-content">
                        <span className="badge">Digital Uzbekistan 2030</span>
                        <h2>Strategic Gateway to <span className="highlight">Central Asian</span> Tech</h2>
                        <p>Your comprehensive guide to the brand architecture, digital ecosystems, and institutional affiliations of the fastest-growing tech hub in the region.</p>
                        <div className="hero-actions">
                            <a href="#resources" className="btn-main">Explore Sources</a>
                            <a href="https://it-park.uz" className="btn-outline">Corporate Info</a>
                        </div>
                    </div>
                </div>
            </header>

            <section id="resources" className="resource-section">
                <div className="container">
                    <div className="section-header">
                        <div className="header-line"></div>
                        <h2>IT Park Ecosystem Archipelago</h2>
                        <p>Every affiliated platform, categorized by user intent and functional vertical.</p>
                    </div>

                    <div className="resource-grid">
                        {resources.map((res, index) => (
                            <ResourceCard
                                key={index}
                                {...res}
                                isRecommended={recommendedUrls.includes(res.url)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section id="incentives" className="incentives-section">
                <div className="container">
                    <div className="incentives-grid">
                        <div className="incentive-info">
                            <span className="mini-badge">Flagship Initiative</span>
                            <h2>"Zero Risk" Program</h2>
                            <p>Aggressive support for BPO companies looking to scale in Uzbekistan.</p>
                            <ul>
                                <li><strong>Free Office:</strong> 12 months rent-free workspace</li>
                                <li><strong>Equipment:</strong> Free hardware for up to 50 employees</li>
                                <li><strong>HR Subsidy:</strong> Up to 15% payroll reimbursement</li>
                                <li><strong>Recruitment:</strong> $500 subsidy per hire</li>
                            </ul>
                        </div>

                        <div className="tax-table-container">
                            <h3>Tax Regime Comparison</h3>
                            <table className="tax-table">
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Standard</th>
                                        <th>IT Park</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Corporate Profit</td>
                                        <td>15%</td>
                                        <td className="itp-val">0%</td>
                                    </tr>
                                    <tr>
                                        <td>Social Tax</td>
                                        <td>12%</td>
                                        <td className="itp-val">0%</td>
                                    </tr>
                                    <tr>
                                        <td>VAT (Services)</td>
                                        <td>12%</td>
                                        <td className="itp-val">0%</td>
                                    </tr>
                                    <tr>
                                        <td>Income Tax</td>
                                        <td>12%</td>
                                        <td className="itp-val">7.5%</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="table-note">* Structural exemptions designed for rapid reinvestment.</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-brand">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_IT_Park_Uzbekistan.svg" alt="IT Park Logo" />
                            <p>4, Tepamasjid Street, Tashkent, Uzbekistan</p>
                        </div>
                        <div className="footer-links">
                            <div className="link-col">
                                <h4>Regional Hubs</h4>
                                <p>Samarkand: +998 99 043 99 61</p>
                                <p>Fergana: +998 99 058 11 99</p>
                                <p>Bukhara: +998 97 300 00 51</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2026 IT Park Uzbekistan Portal. Created for Strategic Stakeholders.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;
