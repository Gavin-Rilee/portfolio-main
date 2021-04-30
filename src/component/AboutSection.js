
import React from 'react';
import photome from '../img/photome.jpg';
import styled from 'styled-components';
import {About, Description, Image, Hide} from '../styles';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>I will make</h2>
                    </Hide>
                    <Hide>
                        <h2>the world a <span>tech</span></h2>
                    </Hide>
                    <Hide>
                        <h2>savy enviorment for everyone.</h2>
                    </Hide>
                </div>
                <p>Contact me if you want to make any of your tech ideas become a reality! I love working hard to leave an everlasting impression on every client.</p>
                <button>Contact</button>
            </Description>
            <Image>
                <img src={photome} alt=" Gavin Rilee" />
            </Image>
        </About>
    )
}



export default AboutSection;
