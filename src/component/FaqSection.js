import React from 'react'

//styled components
import {About} from '../styles';
import styled from 'styled-components';

const FaqSection = () => {
    return (
            <Faq>
                <h2>Any Questions <span>FAQ</span></h2>
                <div className="question">
                    <h4>How Did I Start</h4>
                    <div className="answer">
                        <p>When COVID start I researched Lambda School to find something fitting for me </p>
                        <p>Fran and I need a fresh start</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
                <div className="question">
                    <h4>Why did you get into tech?</h4>
                    <div className="answer">
                        <p>I honestly did not have much intrest but everything in the workld is moving that way and now i lovce it </p>
                    </div>
                    <div className="faq-line"></div>
                </div>
                <div className="question">
                    <h4>How old are you</h4>
                    <div className="answer">
                        <p>485632</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
                <div className="question">
                    <h4>Can I have Snurch?</h4>
                    <div className="answer">
                        <p>NO</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
            </Faq>
       
    )
}

const Faq = styled(About)`
display:block;
span{
    display:block;
}
h2{
    padding-bottom:2rem;
    font-weight:lighter;
}
.faq-line{
    background: #cccccc;
    height:0.2rem;
    margin: 2rem 0rem;
    width:100%;
}
.question{
    padding:3rem 0rem;
    cursor: pointer;
}
.answer{
    padding: 2rem 0rem;
}
p{
    padding: 1rem 0rem;
}
`


export default FaqSection
