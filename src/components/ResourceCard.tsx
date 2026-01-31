import React from 'react';
import './ResourceCard.css';

interface ResourceCardProps {
    title: string;
    description: string;
    url: string;
    logoUrl?: string;
    category: string;
    isRecommended?: boolean;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ title, description, url, logoUrl, category, isRecommended }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className={`resource-card ${isRecommended ? 'recommended' : ''}`}>
            {isRecommended && <div className="recommend-badge">Recommended for You</div>}
            <div className="card-header">
                <span className="card-category">{category}</span>
                {logoUrl ? (
                    <img src={logoUrl} alt={`${title} logo`} className="card-logo" />
                ) : (
                    <div className="card-logo-placeholder">ITP</div>
                )}
            </div>
            <div className="card-body">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className="card-footer">
                <span className="visit-text">Visit Source</span>
                <svg className="arrow-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </div>
        </a>
    );
};

export default ResourceCard;
