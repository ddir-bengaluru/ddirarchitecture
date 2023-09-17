import React, { useEffect, useState } from 'react'
import "./art.scss";
import { endpoint, strTransform } from '../../Utils/Utils';
import { useNavigate, useParams } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

export default function Art() {
    const [artData, setArtData] = useState([]);
    const [isLoading, setLoadingStatus] = useState(true);
    const [isEmpty, setEmptyStatus] = useState(true);
    const navigate = useNavigate();
    const { art_name } = useParams();
    useEffect(() => {
        async function getArtData() {
            const response = await fetch(endpoint + 'art/' + art_name);
            if (!response.ok) {
                navigate('/404-not-found');
                return
            }
            const data = await response.json();
            setArtData(data);
            if (artData.length) {
                setEmptyStatus(false);
            }
            setLoadingStatus(false);
        }

        getArtData();
    }, []);

    function MapArtData() {
        return artData.map((item: string) => {
            return <img src={item} alt={item?.slice(0, 10)} />
        })
    }

    return (
        <div className='art'>
            {isLoading ?
                <h1>Loading</h1> :
                <>
                    <h1>Art Gallery of {strTransform(art_name!)}</h1>
                    {isEmpty ?
                        <NotFound statuscode={500} /> :
                        <div className='art__wrapper'>
                            {MapArtData()}
                        </div>}
                </>
            }
        </div>
    )
}
