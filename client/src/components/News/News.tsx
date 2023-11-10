import React, { useEffect, useState } from 'react';
import "./news.scss";
import { endpoint } from '../../Utils/Utils';
import { Link, useNavigate } from 'react-router-dom';
import { NewsState } from '../../assets/app-state/news-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function News() {
    const [news, setNews] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setLoadingStatus] = useState(true);
    useEffect(() => {
        async function fetchNews() {
            const response = await fetch(endpoint + 'news');
            if (!response.ok) {
                navigate('/404-not-found');
                return
            }
            const data = await response.json();
            if (!data.length) {
                navigate('/404-not-found');
                return
            }
            setNews(data);
            setLoadingStatus(false);
        }

        fetchNews();
    }, [news?.length])

    function MapNews() {
        return news.map((element: NewsState, index: number) => {
            return <Link className="news__card" key={index} to={'/news/' + element?._id}>
                <h2>{element?.title}</h2>
                <p>{element?.description}</p>
                <span>{new Date(parseInt(element?.timestamp?.$timestamp)).toDateString()}</span>
                <i className='news__card__icon'>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </i>
            </Link>
        })
    }
    return (
        <div className='news'>
            {isLoading ?
                <h1> Loading... </h1> :
                <>
                    <div className="news__wrapper">
                        <h1 className='news__title'>News 📰</h1>
                        {MapNews()}
                    </div>
                </>
            }
        </div>
    )
}
