import React, { useEffect, useState } from 'react';
import "./categories.scss";
import { Link, useParams } from 'react-router-dom';
import { endpoint, strTransform } from '../../Utils/Utils';
import nullState from "../../assets/images/null-state.png";

export default function Categories() {
    const { category_name } = useParams();
    const [projects, setProjects] = useState([]);
    const [nullData, setNullData] = useState(false);
    useEffect(() => {
        fetch(endpoint + "category/" + category_name)
        .then((res) => res.json())
        .then((res) => {
            setProjects(res);
            if(!res.length) {
                setNullData(true);
            } else {
                setNullData(false);
            }
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
            {
                !nullData ?
                MapCategoryWiseData() :
                <img src={nullState} alt="Not Found" width={350} />
            }
        </div>
    )
}
