import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { endpoint, strTransform } from '../../Utils/Utils';
import NotFound from '../NotFound/NotFound';
import { ArtInitialState, ArtState } from '../../assets/app-state/art-state';
import "./art.scss";

export default function Art() {
    const [artData, setArtData] = useState<ArtState>(ArtInitialState);
    const [isLoading, setLoading] = useState(true);
    const [isEmpty, setEmpty] = useState(false);
    const { art_name } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        async function getArtData() {
            const response = await fetch(endpoint + 'art/' + art_name);
            if (!response.ok) {
                navigate('/404-not-found');
                return
            }
            const data = await response.json();
            if (!data || !data?.photos?.length) {
                setEmpty(true);
            }
            setLoading(false);
            setArtData(data);
        }
        getArtData();
    });
    function MapArtData() {
        return artData.photos.map((item: any, index: number) => {
            return <img key={index} src={item} alt={art_name} />
        })
    }
    return (
        <div className="art">
            {isLoading ?
                <h1>Loading...</h1> :
                <>
                    <h1>Art Gallery of <span className='text-orange'>{strTransform(art_name!)}</span></h1>
                    {isEmpty ?
                        <NotFound statuscode={500} /> :
                        <div className="art__wrapper">
                            {MapArtData()}
                        </div>
                    }
                </>
            }
        </div>
    )
}
