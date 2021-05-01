// Import images
import projectOne from './img/projectOne.png';
import projectTwo from './img/projectTwo.png';
import projectThree from './img/projectThree.png';
import secondaryOne from './img/secondaryOne.png';
import secondaryTwo from './img/secondaryTwo.png';
import secondaryThree from './img/secondaryThree.png';

export const ProjectState = () => {
    return[
        {
            title: 'Project one',
            mainImage: projectOne,
            secondaryImage: secondaryOne,
            url: '/projects/one',
            explanation: [
                {
                    title: 'Project One',
                    description: "This is project one"
                }
                
            ]

        },
        {
            title: 'Project Two',
            mainImage: projectTwo,
            secondaryImage: secondaryTwo,
            url: '/projects/two',
            explanation: [
                {
                    title: 'Project Two',
                    description: "This is project two"
                }
                
            ]
            
        },
        {
            title: 'Project Three',
            mainImage: projectThree,
            secondaryImage: secondaryThree,
            url: '/projects/three',
            explanation: [
                {
                    title: 'Project Three',
                    description: "This is project three"
                }
                
            ]
            
        }
    ]
}