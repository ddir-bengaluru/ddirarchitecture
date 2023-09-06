import React, { useEffect, useState } from 'react';
import "./projects.scss";
import { useParams } from 'react-router-dom';
import { ProjectState } from '../../assets/app-state/project-state';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Projects() {
  const { project_name } = useParams();
  const [projectData, setProjectData] = useState(ProjectState);
  const [loader, setLoadingStatus] = useState(true);
  useEffect(() => {
    async function getProjectData() {
      const response = await fetch("http://localhost:9200/record/" + project_name);
      if (!response.ok) {
        console.error(response);
      }
      const data = await response.json();
      setLoadingStatus(false);
      setProjectData(data);
    }
    getProjectData();
    
  }, []);
  function mapData() {
    return projectData.awards.map((d: any) => {
        return (
          <li key={d._id}>{d}</li>
        )
    })
  }
  function Carousel() {
    return projectData.photos.secondary_images.map((img:any) => {
      return (
        <img key={img._id} src={img} />
      )
    })
  }
  function strTransform(str: string) {
    const words = str.split('-');
    const formattedName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return formattedName;
  }
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
            <h1>{strTransform(projectData.name)}</h1>
            <h4>{strTransform(projectData.location)}</h4>
            <ul className='awards'>
              <h3> <FontAwesomeIcon className='awards__icon' icon={faAward}/> Awards Received</h3>
              {mapData()}
            </ul>
          </div>
          <div className="projects__details">
            <hr />
            <p>{projectData.description}</p>
            <div className="content">
              <img src={projectData.photos.primary_img} alt="" />
              <ul>
                <li>Category: {projectData.category}</li>
                <li>Site Area: {projectData.site_area}</li>
                <li>Build Area: {projectData.built_area}</li>
              </ul>
          </div>
            </div>
          <div className="projects__carousel">
            <h2>Image Gallery</h2>
            <div className="cards">
              {Carousel()}
            </div>
          </div>
        </>}
    </div>
  )
}
