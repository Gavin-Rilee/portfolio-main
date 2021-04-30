import React from 'react'

//Icons import
import hours from '../img/hours.png';
import linkedIn from '../img/linkedIn.png';
import money from '../img/money.png';
import school from '../img/school.png';
import tech from '../img/tech.png';

const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>Great results <span>Gaurenteed!</span></h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={hours} alt="24 hours icon"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Always working around the clock</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={money} alt="money icon"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Making things cheap so you dont have to worry </p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={school} alt='school icon'/>
                            <h3>School</h3>
                        </div>
                        <p>Still in school learning the best and most efficient ways to solve tasks</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={linkedIn} alt='linkedin logo'/>
                            <h3>Social</h3>
                        </div>
                        <p>My linked in portfolio to get to know me better</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={tech} alt='computer with gradient'/>
            </div>
        </div>
    )
}

export default ServicesSection
