import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

//Images
import projectOne from '../img/projectOne.png';
import projectTwo from '../img/projectTwo.png';
import projectThree from '../img/projectThree.png';

const Projects = () => {
    return (
        <Project>
           <Products>
               <h2>Project One</h2>
               <div class="line"></div>
               <Link>
               <img src={projectOne} alt="a project number one "/>
               </Link>
               <h2>Project Two</h2>
               <div class="line"></div>
               <Link>
               <img src={projectTwo} alt="a project number two "/>
               </Link>
               <h2>Project Three</h2>
               <div class="line"></div>
               <Link>
               <img src={projectThree} alt="a project number three "/>
               </Link>
           </Products> 
        </Project>
    )
}

const Project = styled.div`
min-height: 100vh;
overflow: hidden;
padding: 5rem 10rem;
h2{
    padding: 1rem;

}
`;
const Products = styled.div`
padding-bottom: 10rem;
.line{
    height:0.5rem;
    background:#cccccc;
    margin-bottom: 3rem;
}
img{
    width:100%;
    height:70vh;
    object-fit:cover;
}
`

export default Projects
