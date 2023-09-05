import React, { useEffect, useState } from 'react';
import "./projects.scss";
import { useParams } from 'react-router-dom';
import { ProjectState } from '../../assets/app-state/project-state';

export default function Projects() {
  const { project_name } = useParams();
  const [projectData, setProjectData] = useState(ProjectState);
  const [loader, setLoadingStatus] = useState(true);
  useEffect(() => {
    async function getProjectData() {
      const response = await fetch("http://localhost:9200/record/" + 'inges-residence');
      if (!response.ok) {
        console.error(response);
      }
      const data = await response.json();
      setLoadingStatus(false);
      setProjectData(data);
    }
    getProjectData();
    
  }, []);
  return (
    <div className='projects'>
      {loader ? 
        <>
          <h1>LOADING</h1>
        </>
              : 
        <>
          <div className="projects__hero" style={{backgroundImage: "url(" + projectData.photos.hero_img + ")"}}></div>
          <div className="projects__title">
            <h1>{projectData.name}</h1>
            <h4>{projectData.location}</h4>
            <ul>
              Awards
              <li>Award Names</li>
            </ul>
            <hr />
            <p>{projectData.description}</p>
          </div>
          <div className="projects__details">
            <img src={projectData.photos.primary_img} alt="" />
            <ul className="content">
              <li>Category: {projectData.category}</li>
              <li>Site Area: {projectData.site_area}</li>
              <li>Build Area: {projectData.built_area}</li>
            </ul>
          </div>
          <div className="projects__carousel">
            <h3>Image Gallery</h3>
          </div>
        </>}
    </div>
  )
}
