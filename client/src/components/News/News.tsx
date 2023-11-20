import React, { useEffect, useState } from 'react';
import "./news.scss";
import { endpoint } from '../../Utils/Utils';
import { Link, useNavigate } from 'react-router-dom';
import { NewsState } from '../../assets/app-state/news-state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import NotFound from '../NotFound/NotFound';

export default function News() {
    const [news, setNews] = useState([]);
    const navigate = useNavigate();
    const [isLoading, setLoadingStatus] = useState(true);
    const [isEmpty, setEmptyStatus] = useState(true);
    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await fetch(endpoint + 'news');
                if (!response.ok) {
                    navigate('/404-not-found');
                    return
                }
                const data = await response.json();
                if (data.length) {
                    setEmptyStatus(false);
                }
                setNews(data);
                setLoadingStatus(false);
            } catch {
                navigate('/404-not-found');
            }
        }

        fetchNews();
    }, [news?.length, navigate]);

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
                        {!isEmpty ? MapNews() : <NotFound statuscode={500} />}
                    </div>
                </>
            }
        </div>
    )
}
