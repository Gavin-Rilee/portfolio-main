import React from 'react'

//Icons import
import hours from '../img/hours.png';
import linkedIn from '../img/linkedIn.png';
import money from '../img/money.png';
import school from '../img/school.png';
import techpc from '../img/techpc.png';

// import style
import {About, Description, Image} from '../styles';
import styled from 'styled-components';

const ServicesSection = () => {
    return (
        <Services>
            <Description>
                <h2>Great results <span>Gaurenteed!</span></h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={hours} alt="24 hours icon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Always working around the clock</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money icon"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Making things cheap so you dont have to worry </p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={school} alt='school icon'/>
                            <h3>School</h3>
                        </div>
                        <p>Still in school learning the best and most efficient ways to solve tasks</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={linkedIn} alt='linkedin logo'/>
                            <h3>Social</h3>
                        </div>
                        <p>My linked in portfolio to get to know me better</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={techpc} alt='computer with gradient'/>
            </Image>
        </Services>
    )
}


const Services = styled(About)`
h2{
    padding-bottom: 5rem;
}
p{
    width:70%;
    padding:2rem 0rem 4rem 0rem;
}
`
const Cards = styled.div`
display: flex;
flex-wrap:wrap;
`

const Card = styled.div`
flex-basis: 20rem;
.icon{
    display: flex;
    align-items:center;
}
h3{
    margin-left:1rem;
    background: white;
    color:black;
    padding: 1rem;
}
`

export default ServicesSection
