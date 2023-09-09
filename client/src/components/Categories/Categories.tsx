import React, { useEffect, useState } from 'react';
import "./categories.scss";
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { strTransform } from '../../Utils/Utils';

export default function Categories() {
    const { category_name } = useParams();
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:9200/record/category/" + category_name)
        .then((res) => res.json())
        .then((res) => {
            if(!res.length) {
                navigate('/404-not-found');
                return
            }
            setProjects(res);
        })
        .catch((err) => {
            console.log("error", err);
        });
    }, []);
    function MapCategoryWiseData() {
        if(projects) {
            return projects.map((data:any, index: number) => {
                return (
                    <Link className="card card--horizontal" to={'/' + data.name} key={index}>
                        <img src={data.photos.hero_img} alt={data.name} />
                        <h2>{strTransform(data.name)}</h2>
                        <p>{data.description}</p>
                    </Link>
                );
            })
        }
    }
    return (
        <div className='categories'>
            <h1>Showing Category - {strTransform(category_name!)}</h1>
            {MapCategoryWiseData()}
        </div>
    )
}
