import React, { useEffect, useState } from 'react';
import "./newsdetails.scss"
import { useNavigate, useParams } from 'react-router-dom';
import { NewsInitialState } from '../../assets/app-state/news-state';
import { endpoint } from '../../Utils/Utils';

export default function NewsDetails() {
  const { news_id } = useParams();
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState(NewsInitialState);
  const [loader, setLoadingStatus] = useState(true);
  useEffect(() => {
    async function fetchNews() {
      const response = await fetch(endpoint + 'news/' + news_id);
      if (!response.ok) {
        navigate('/404-not-found');
        return
      }
      const data = await response.json();
      if (!data?._id) {
        navigate('/404-not-found');
        return
      }
      setNewsData(data);
      setLoadingStatus(false);
    }

    fetchNews();
  }, [])
  return (
    <div className='news-details'>
      {loader ?
        <h1>Loading...</h1> :
        <>
          <h1>{newsData?.title}</h1>
          <span> 🗓️ {new Date(parseInt(newsData?.timestamp?.$timestamp)).toDateString()}</span>
          <p>{newsData?.description}</p>
        </>
      }
    </div>
  )
}
