// Import necessary modules and components
import React, { useEffect, useState } from 'react';
import NotFound from '../NotFound/NotFound';
import { endpoint } from '../../Utils/Utils';
import imagePlaceholder from '../../assets/images/img-placeholder.png';

import "./teams.scss";  
import { useNavigate } from 'react-router-dom';

export default function Team() {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isEmpty, setEmpty] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function getTeamPhotos() {
            try {
                const response = await fetch(endpoint + 'team');
                if (!response.ok) {
                    navigate('/404-not-found');
                    return;
                }
                const data = await response.json();
                if (!data || data.length === 0) {
                    setEmpty(true);
                } else {
                    setPhotos(data);
                }
                setLoading(false);
            } catch {
                navigate('/404-not-found');
            }
        }

        getTeamPhotos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [photos?.length]);

    return (
        <div className="team">
            <h1>Team</h1>
            {isLoading ? (
                <div className="team_image">
                <img src={imagePlaceholder} alt="Team DDIR" />
            </div>
            ) : (
                <>
                    {isEmpty ? (
                        <NotFound statuscode={404} />
                    ) : (
                        <div className="team__wrapper">
                            {photos.map((item, index) => (
                                <img key={index} src={item} alt="" />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
