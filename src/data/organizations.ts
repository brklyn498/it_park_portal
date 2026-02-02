export interface Organization {
    name: string;
    domain: string;
    url: string;
    description: string;
    category: "Governance" | "Infrastructure" | "Innovation" | "Postal & Logistics" | "Research & Space" | "Insurance" | "Education" | "Venture" | "Event";
    details?: string;
}

export const organizations: Organization[] = [
    // --- Digital Uzbekistan Track (Governance & Infrastructure) ---
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
        description: "The primary technical operator of state information systems and critical digital infrastructure.",
        category: "Infrastructure",
        details: "Manages the .UZ domain registry, state data centers, and the My.gov.uz portal back-end."
    },
    {
        name: "O'zkomnazorat",
        domain: "gis.uz",
        url: "https://gis.uz",
        description: "State Inspectorate for Control in the Field of Informatization and Telecommunications.",
        category: "Governance",
        details: "The regulatory body ensuring compliance with ICT standards, data protection, and licensing."
    },
    {
        name: "Digital Government System Data Center",
        domain: "datacenter.uz",
        url: "https://egov.uz",
        description: "Tier III certified national data center infrastructure for hosting state systems.",
        category: "Infrastructure",
        details: "Provides secure, high-availability hosting for critical government databases and platforms."
    },
    {
        name: "Center for Digital Economics Research (DERC)",
        domain: "derc.uz",
        url: "http://digital.uz",
        description: "Analytical center focusing on the development and metrics of the digital economy in Uzbekistan.",
        category: "Governance",
        details: "Provides data-driven insights for policy creation and strategic ICT roadmap development."
    },
    {
        name: "Directorate for Capital Construction (CCSE)",
        domain: "ccse.uz",
        url: "http://digital.uz",
        description: "Managing the physical infrastructure and construction of IT hubs across the republic.",
        category: "Infrastructure",
        details: "Ensures the build-out of physical IT parks and regional technology clusters."
    },
    {
        name: "Uzbektelecom JSC",
        domain: "uztelecom.uz",
        url: "https://uztelecom.uz",
        description: "The national telecommunications operator providing the backbone for internet connectivity.",
        category: "Infrastructure",
        details: "Operates 90%+ of the international internet gateway and national fiber-optic network."
    },
    {
        name: "Republican Telecommunication Network Control Center (RTMC)",
        domain: "rtmc.uz",
        url: "https://rtmc.uz",
        description: "The operational heart of national network integrity and technical monitoring.",
        category: "Infrastructure",
        details: "Monitors real-time performance of the national telecommunications backbone."
    },
    {
        name: "Center for Electromagnetic Compatibility (CEMC)",
        domain: "cemc.uz",
        url: "https://cemc.uz",
        description: "Regulatory body managing the radio-frequency spectrum and electromagnetic safety.",
        category: "Governance",
        details: "Assigns frequencies for mobile operators, broadcasters, and specialized tech sectors."
    },
    {
        name: "Center for Radio Communication, Broadcasting and Television (CRRT)",
        domain: "crrt.uz",
        url: "https://crrt.uz",
        description: "The technical operator of the national broadcasting and radio-relay infrastructure.",
        category: "Infrastructure",
        details: "Ensures 100% digital TV coverage and manages radio towers across the republic."
    },
    {
        name: "Uzbekistan Pochtasi JSC",
        domain: "uzpost.uz",
        url: "https://uzpost.uz",
        description: "National postal service transitioning into a modern logistics and e-commerce backbone.",
        category: "Postal & Logistics",
        details: "Integrating with e-government services to provide last-mile physical delivery of digital state outputs."
    },
    {
        name: "UNICON.UZ",
        domain: "unicon.uz",
        url: "https://unicon.uz",
        description: "Center for Scientific, Technical and Marketing Research in Information Technologies.",
        category: "Governance",
        details: "The primary standards development body for ICT in Uzbekistan, managing technical regulations."
    },
    {
        name: "ALSKOM Insurance Company",
        domain: "alskom.uz",
        url: "https://alskom.uz",
        description: "Specialized insurance provider for the ICT sector, offering tech-specific risk mitigation.",
        category: "Insurance",
        details: "A key financial affiliate supporting the IT Park ecosystem with specialized insurance products."
    },
    {
        name: "Uzbekspace Agency",
        domain: "uzspace.uz",
        url: "https://uzspace.uz",
        description: "State agency for space research and technology, focusing on satellite data for digital services.",
        category: "Research & Space",
        details: "Utilizes remote sensing and satellite communication to support agriculture and environmental monitoring."
    },

    // --- IT Park Track (Innovation & Talent) ---
    {
        name: "IT Park Uzbekistan",
        domain: "it-park.uz",
        url: "https://it-park.uz",
        description: "The primary engine of the IT industry, providing tax incentives, infrastructure, and incubation.",
        category: "Innovation",
        details: "Manages 2,000+ resident companies and the 0% corporate tax regime for tech exporters."
    },
    {
        name: "Resident Management System (RMS)",
        domain: "my.it-park.uz",
        url: "https://my.it-park.uz",
        description: "The administrative portal for IT Park residents to manage compliance and reports.",
        category: "Innovation",
        details: "Transactional gateway for submitting monthly reports and managing tax exemptions via E-IMZO."
    },
    {
        name: "IT Park Outsourcing Portal",
        domain: "outsource.gov.uz",
        url: "https://outsource.gov.uz",
        description: "The international-facing gateway for Foreign Direct Investment and BPO services.",
        category: "Innovation",
        details: "Sovereign-backed platform promoting Uzbekistan as a premier global outsourcing destination."
    },
    {
        name: "IT Bilim (Talent Hub)",
        domain: "it-bilim.uz",
        url: "https://it-bilim.uz",
        description: "Support center for IT education and talent development, bridging academia and industry.",
        category: "Innovation",
        details: "Manages educational loans and subsidy programs for IT training across the republic."
    },
    {
        name: "IT Park Capital",
        domain: "itparkcapital.uz",
        url: "https://itparkcapital.uz",
        description: "Investment arm of the ecosystem, providing financing for startups and IT education.",
        category: "Venture",
        details: "Previously IT-Bilim financial operator, now focused on ISA and ecosystem liquidity."
    },
    {
        name: "StartupBase",
        domain: "startupbase.uz",
        url: "https://startupbase.uz",
        description: "The definitive venture database and transparency engine for the Uzbek startup ecosystem.",
        category: "Venture",
        details: "The 'Crunchbase of Uzbekistan', listing deals, funding rounds, and verified investors."
    },
    {
        name: "One Million Uzbek Coders",
        domain: "uzbekcoders.uz",
        url: "https://uzbekcoders.uz",
        description: "Mass digital literacy initiative providing free entry-level IT education across the nation.",
        category: "Education",
        details: "National project launched in partnership with Dubai Future Foundation and Coursera."
    },
    {
        name: "IT Park University (ITPU)",
        domain: "itpu.uz",
        url: "https://itpu.uz",
        description: "A hybrid-model university founded in collaboration with EPAM for industry-ready talent.",
        category: "Education",
        details: "The first IT-centric university in Uzbekistan with a curriculum reverse-engineered from market needs."
    },
    {
        name: "IT Education Association",
        domain: "ite-association.uz",
        url: "https://ite-association.uz",
        description: "Self-regulatory organization unifying private IT academies and educational centers.",
        category: "Education",
        details: "Standardizes certification and ensures quality control across the private IT education sector."
    },
    {
        name: "Artificial Intelligence Research Institute (AIRI)",
        domain: "airi.uz",
        url: "http://it-park.uz",
        description: "Specialized hub for AI development, focusing on national language processing and ethics.",
        category: "Innovation",
        details: "The leading research entity for integrating AI into state services and private business."
    },
    {
        name: "Digital Education Development Center",
        domain: "rtm.uz",
        url: "https://rtm.uz",
        description: "Strategic center for digitizing the national K-12 and university education systems.",
        category: "Innovation",
        details: "Implements LMS and digital curriculum standards for national educational institutions."
    },
    {
        name: "ICT Week Uzbekistan",
        domain: "ictweek.uz",
        url: "https://ictweek.uz",
        description: "The premier annual technology event for networking, strategy, and regional cooperation.",
        category: "Event",
        details: "A week-long series of summits, exhibitions, and forums involving global tech leaders."
    },
    {
        name: "Uzbekistan 360",
        domain: "uzbekistan360.uz",
        url: "https://uzbekistan360.uz",
        description: "Virtual discovery platform offering ultra-high resolution tours of the IT infrastructure.",
        category: "Innovation",
        details: "Provides virtual due diligence capabilities for global investors and digital nomads."
    }
];
