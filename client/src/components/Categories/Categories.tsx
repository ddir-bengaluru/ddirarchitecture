import React, { useEffect, useState } from 'react';
import "./categories.scss";
import { Link, useParams } from 'react-router-dom';
import { endpoint, strTransform } from '../../Utils/Utils';
import NotFound from '../NotFound/NotFound';
import imagePlaceholder from '../../assets/images/img-placeholder.png';

export default function Categories() {
    const { category_name } = useParams();
    const { search_key } = useParams();
    const [projects, setProjects] = useState([]);
    const [nullData, setNullData] = useState(false);
    useEffect(() => {
        if (category_name) {
            fetch(endpoint + "category/" + category_name)
                .then((res) => res.json())
                .then((res) => {
                    setProjects(res);
                    if (!res.length) {
                        setNullData(true);
                    } else {
                        setNullData(false);
                    }
                })
                .catch((err) => {
                    console.log("error", err);
                });
        } else if (search_key) {
            fetch(endpoint + "search/" + search_key)
                .then((res) => res.json())
                .then((res) => {
                    setProjects(res);
                    if (!res.length) {
                        setNullData(true);
                    } else {
                        setNullData(false);
                    }
                })
                .catch((err) => {
                    console.log("error", err);
                });
        }
    }, [search_key, category_name]);
    function MapCategoryWiseData() {
        // eslint-disable-next-line
        return projects.map((data: any, index: number) => {
            if (data?.location) {
                return <Link className="card card--horizontal" to={'/' + data?.name} key={index}>
                    <img src={data?.photos?.hero_img ? data?.photos?.hero_img : imagePlaceholder} alt={data?.name} />
                    <h2>{strTransform(data?.name)}</h2>
                    <p>{data?.description}</p>
                </Link>
            }
            if (data?.timestamp) {
                return <Link className="card card--horizontal" to={'/news/' + data?.name} key={index}>
                    <img src={data?.photos?.hero_img ? data?.photos?.hero_img : imagePlaceholder} alt={data?.name} />
                    <h2>{strTransform(data?.title)}</h2>
                    <p>{data?.description}</p>
                </Link>
            }
            if (data?.photos) {
                return <Link className="card card--horizontal" to={'/art/' + data?.name} key={index}>
                    <img src={data?.photos[0] ? data?.photos[0] : imagePlaceholder} alt={data?.name} />
                    <h2>{strTransform(data?.name)}</h2>
                    <p>{data?.description}</p>
                </Link>
            }
        })
    }
    return (
        <div className='categories'>
            {search_key ? <h1>Showing Category - {strTransform(search_key!)}</h1> : <h1>You Searched - {strTransform(search_key!)}</h1>}
            {
                !nullData ?
                    MapCategoryWiseData() :
                    <NotFound statuscode={500} />
            }
        </div>
    )
}
