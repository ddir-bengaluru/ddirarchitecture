import React, { useEffect, useState } from 'react';
import "./projects.scss";
import { useNavigate, useParams } from 'react-router-dom';
import { ProjectState } from '../../assets/app-state/project-state';
import { strTransform } from '../../Utils/Utils';

export default function Projects() {
  const { project_name } = useParams();
  const navigate = useNavigate();
  const [projectData, setProjectData] = useState(ProjectState);
  const [loader, setLoadingStatus] = useState(true);
  useEffect(() => {
    async function getProjectData() {
      const response = await fetch("http://localhost:9200/record/" + project_name);
      if (!response.ok) {
        console.error(response);
      }
      if(response.status == 404) {
        navigate('/404-not-found');
        return
      }
      const data = await response.json();
      if(!data.length) {
        navigate('/404-not-found');
        return
      }
      setLoadingStatus(false);
      setProjectData(data);
    }
    getProjectData();
  }, []);
  function Carousel() {
    return projectData.photos.secondary_images.map((img: any) => {
      return (
        <img key={img._id} src={img} />
      )
    })
  }
  return (
    <div className='projects'>
      {loader ?
        <>
          <h1>LOADING</h1>
        </>
        :
        <>
          <div className="projects__hero" style={{ backgroundImage: "url(" + projectData.photos.hero_img + ")" }}></div>
          <div className="projects__title">
            <h1 className={projectData.awards ? 'has-award' : ''}>{strTransform(projectData.name)}</h1>
            <h4>{strTransform(projectData.location)}</h4>
            <ul>
              <li>Category: {projectData.category}</li>
              <li>Site Area: {projectData.site_area}</li>
              <li>Build Area: {projectData.built_area}</li>
            </ul>
          </div>
          <div className="projects__content">
            <hr />
            <p>{projectData.description}</p>
            <h2>Image Gallery</h2>
            <div className="projects__carousel">
                {Carousel()}
            </div>
          </div>
        </>}
    </div>
  )
}
