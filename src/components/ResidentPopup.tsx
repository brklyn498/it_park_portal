import React, { useState, useEffect } from 'react';
import './ResidentPopup.css';

interface ResidentPopupProps {
    onSelect: (type: 'resident' | 'visitor') => void;
}

const ResidentPopup: React.FC<ResidentPopupProps> = ({ onSelect }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem('it_park_portal_visited');
        if (!hasVisited) {
            // Delay slightly for premium feel
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = (response: 'resident' | 'visitor') => {
        localStorage.setItem('it_park_portal_visited', 'true');
        localStorage.setItem('user_status', response);
        onSelect(response);
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <div className="popup-brand">
                    <span className="brand-dot"></span>
                    <p>IT PARK UZBEKISTAN</p>
                </div>
                <h2>Welcome to the Ecosystem</h2>
                <p className="popup-question">To provide you with the most relevant tools and resources, please tell us:</p>
                <p className="popup-sub-question">Are you currently a resident of Uzbekistan?</p>
                <div className="popup-actions">
                    <button onClick={() => handleClose('resident')} className="btn-primary">Yes, I am a Resident</button>
                    <button onClick={() => handleClose('visitor')} className="btn-secondary">No, I'm an International Guest</button>
                </div>
                <p className="popup-footer">We'll highlight the services that matter most to you.</p>
            </div>
        </div>
    );
};

export default ResidentPopup;
