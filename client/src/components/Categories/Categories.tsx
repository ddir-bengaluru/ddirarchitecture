import React, { useEffect, useState } from 'react';
import "./categories.scss";
import { Link, useParams } from 'react-router-dom';
import { strTransform } from '../../Utils/Utils';
import loading from "react-useanimations/lib/loading";
import UseAnimation from "react-useanimations";


export default function Categories() {
    const { category_name } = useParams();
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9200/record/category/" + category_name)
            .then((res) => res.json())
            .then((res) => {
                setProjects(res);
            })
            .catch((err) => {
                console.log("error", err);
            });
    }, []);
    function MapCategoryWiseData() {
        if (projects) {
            return projects.map((data: any, index: number) => {
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
                projects.length ?
                    MapCategoryWiseData() :
                    // <img src="assets/images/Loading.png" alt="" width={350} />
                    <div>
                        <UseAnimation animation={loading} strokeColor='#c86508' autoPlay={true} loop={true} />
                    </div>
            }
        </div>


    )

}

