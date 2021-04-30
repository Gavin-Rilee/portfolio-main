
import React from 'react';
import photome from '../img/photome.jpg';
import styled from 'styled-components';

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

//Styled component
const About = styled.div` 
min-height:90vh;
display:flex;
align-items:center;
justify-content: space-between;
padding: 5rem 10rem;
color:white;
`
const Description = styled.div`
flex:1;
padding-right: 5rem;
h2{
    font-weight: lighter;

}
`

const Image = styled.div `
flex:1;
overflow: hidden;
img{
    width:100%;
    height:80vh;
    object-fit: cover;
}
`
const Hide = styled.div`
overflow: hidden;
`


export default AboutSection;
