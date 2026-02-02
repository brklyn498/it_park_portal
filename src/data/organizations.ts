export interface Organization {
    name: string;
    domain: string;
    url: string;
    description: string;
    category: "Governance" | "Infrastructure" | "Innovation" | "Postal & Logistics" | "Research & Space" | "Insurance";
    details?: string;
}

export const organizations: Organization[] = [
    {
        name: "Digital Government Projects Management Center",
        domain: "egov.uz",
        url: "https://egov.uz",
        description: "Strategic project management office for national 'Electronic Government' and Open Data.",
        category: "Governance",
        details: "Responsible for architecture, implementation, and interoperability of the national e-government system."
    },
    {
        name: "Single Integrator UZINFOCOM",
        domain: "uzinfocom.uz",
        url: "https://uzinfocom.uz",
        description: "Technological powerhouse for state information systems, .UZ domain, and MyID.",
        category: "Governance",
        details: "Develops biometric digital identity systems and manages national internet naming space."
    },
    {
        name: "O'zkomnazorat",
        domain: "gis.uz",
        url: "https://gis.uz",
        description: "Regulatory enforcement body for telecommunications, security, and postal services.",
        category: "Governance",
        details: "The regulatory 'watchdog' ensuring compliance with digital laws and infrastructure standards."
    },
    {
        name: "Digital Government System Data Center",
        domain: "egov.uz/data-center",
        url: "https://egov.uz/activity/digital-government-system-data-center-44",
        description: "Secure state facility for server infrastructure and data sovereignty.",
        category: "Infrastructure",
        details: "Provides cloud services and secure storage for government agencies."
    },
    {
        name: "Center for Digital Economics Research (DERC)",
        domain: "derc.uz",
        url: "https://derc.uz",
        description: "Ministry think-tank for global digital trends and economic impact assessment.",
        category: "Governance",
        details: "Analyzes digital economy impact and monitors Uzbekistan's global digital rankings."
    },
    {
        name: "Directorate for Capital Construction (CCSE)",
        domain: "ccse.uz",
        url: "https://ccse.uz",
        description: "Infrastructure management arm for Ministry buildings and physical assets.",
        category: "Infrastructure",
        details: "Manages the physical buildings, campuses, and facilities where digital work happens."
    },
    {
        name: "Uzbektelecom JSC",
        domain: "uztelecom.uz",
        url: "https://uztelecom.uz",
        description: "National telecommunications operator and primary internet traffic gateway.",
        category: "Infrastructure",
        details: "The national backbone operator providing connectivity across all regions of Uzbekistan."
    },
    {
        name: "Republican Telecommunication Network Control Center (RTMC)",
        domain: "rtmc.uz",
        url: "https://rtmc.uz",
        description: "Real-time network monitoring and UzIMEI mobile device registration.",
        category: "Infrastructure",
        details: "Coordinates traffic control and manages the national mobile device registration system."
    },
    {
        name: "Center for Electromagnetic Compatibility (CEMC)",
        domain: "cemc.uz",
        url: "https://cemc.uz",
        description: "Authority for radio frequency spectrum management and interference control.",
        category: "Infrastructure",
        details: "Ensures interference-free operation of wireless technologies and 5G rollout."
    },
    {
        name: "Center for Radio Communication, Broadcasting and Television (CRRT)",
        domain: "crrt.uz",
        url: "https://crrt.uz",
        description: "Infrastructure operator for national digital TV and radio broadcasting.",
        category: "Infrastructure",
        details: "Operates the network of TV towers and relay stations for nationwide broadcasting."
    },
    {
        name: "Uzbekistan Pochtasi JSC",
        domain: "pochta.uz",
        url: "https://pochta.uz",
        description: "National postal operator transforming into e-commerce logistics partner.",
        category: "Postal & Logistics",
        details: "Wide physical branch network providing logistics, e-commerce, and banking services."
    },
    {
        name: "UNICON.UZ",
        domain: "unicon.uz",
        url: "https://unicon.uz",
        description: "Scientific and standardization body for ICT technical regulations and R&D.",
        category: "Infrastructure",
        details: "Develops state standards and certifies telecommunications equipment."
    },
    {
        name: "ALSKOM Insurance Company",
        domain: "alskom.uz",
        url: "https://alskom.uz",
        description: "Specialized insurer for ICT risks, infrastructure, and cyber liability.",
        category: "Insurance",
        details: "Provides financial safety nets for digital infrastructure and IT workforce."
    },
    {
        name: "IT Park Uzbekistan",
        domain: "it-park.uz",
        url: "https://it-park.uz",
        description: "Special economic zone fostering IT growth, BPO exports, and innovation.",
        category: "Innovation",
        details: "The locomotive of IT sector development with zero-risk programs for investors."
    },
    {
        name: "Talent Hub (IT Bilim)",
        domain: "it-park.uz/talent",
        url: "https://it-park.uz/en/itpark/news/navigating-talent-hiring-in-uzbekistan-how-it-park-uzbekistan-makes-the-process-work",
        description: "Workforce development for training and placing IT specialists.",
        category: "Innovation",
        details: "Bridges the gap between academia and industry through certification and placement."
    },
    {
        name: "Startup Base",
        domain: "startupbase.uz",
        url: "https://startupbase.uz",
        description: "National registry connecting startups with venture capital and grants.",
        category: "Innovation",
        details: "The 'Crunchbase' of Uzbekistan, providing transparency for the venture market."
    },
    {
        name: "Artificial Intelligence Research Institute (AIRI)",
        domain: "airi.uz",
        url: "https://airi.uz",
        description: "State institute for AI research and development of indigenous algorithms.",
        category: "Research & Space",
        details: "Develops local AI models and supports the national AI strategy."
    },
    {
        name: "Digital Education Development Center",
        domain: "edu.digital.uz",
        url: "https://edu.digital.uz",
        description: "Agency for IT Centers network and population digital upskilling.",
        category: "Innovation",
        details: "Oversees nationwide IT training centers and digital literacy programs."
    },
    {
        name: "Uzbekspace Agency",
        domain: "uzspace.uz",
        url: "https://uzspace.uz",
        description: "Space agency utilizing Earth Remote Sensing for economic monitoring.",
        category: "Research & Space",
        details: "Formulates space policy and processes satellite data for governance."
    }
];
