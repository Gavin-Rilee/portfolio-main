import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ProjectState } from "../ProjectState";

const ProjectDetails = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [works, setWorks] = useState(ProjectState);
  const [project, setProject] = useState(null);

  //useEffect
  useEffect(() => {
    const currentProject = works.filter(
      (stateProject) => stateProject.url === url
    );
    setProject(currentProject[0]);
  }, [works, url]);

  return (
    <>
      {project && (
        <Details>
          <Headline>
            <h2>{project.title}</h2>
            <img src={project.mainImage} alt="project" />
          </Headline>
          <ProjDescrip>
            {project.explanations.map((explanation) => (
              <ProjDescription
                title={explanation.title}
                description={explanation.description}
                key={explanation.title}
              />
            ))}
          </ProjDescrip>
          <ImageDisplay>
            <img src={project.secondaryImage} alt="project" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  color: white;
`;
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const ProjDescrip = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const StyledDescrip = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d977;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

// ProjDescription component
const ProjDescription = ({ title, description }) => {
  return (
    <StyledDescrip>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledDescrip>
  );
};

export default ProjectDetails;
