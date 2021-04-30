
import React from 'react';
import photome from '../img/photome.jpg';

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>I want to make the world a more tech friendly place for everyone</h2>
                    </div>
                    <div className="hide">
                        <h2>A more <span>tech friendly</span> place</h2>
                    </div>
                    <div className="hide">
                        <h2>For everyone.</h2>
                    </div>
                </div>
                <p>Contact me if you want to make any of your tech ideas become a reality! I love working hard to leave an everlasting impression on every client.</p>
                <button>Contact</button>
            </div>
            <div className="image">
                <img src={photome} alt=" Gavin Rilee" />
            </div>
        </div>
    )
}

export default AboutSection;
