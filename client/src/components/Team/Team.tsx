// Import necessary modules and components
import React, { useEffect, useState } from 'react';
import NotFound from '../NotFound/NotFound';
import { endpoint } from '../../Utils/Utils';
import imagePlaceholder from '../../assets/images/img-placeholder.png';

import "./teams.scss";  

export default function Team() {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isEmpty, setEmpty] = useState(false);

    

    useEffect(() => {
        async function getTeamPhotos() {
            const response = await fetch(endpoint + 'team');
            if (!response.ok) {
                // Handle error, e.g., redirect to a 404 page
                console.error("Error fetching team photos");
                return;
            }
            const data = await response.json();
            if (!data || data.length === 0) {
                setEmpty(true);
            } else {
                setPhotos(data);
            }
            setLoading(false);
        }
        getTeamPhotos();
    }, []);

    return (
        <div className="team" style={{marginBottom: '20px'}}>
            <h1>Team</h1>
            {isLoading ? (
                <div className="team_image">
                <img src={imagePlaceholder} alt="Team Image" />
            </div>
            // <NotFound statuscode={404} />
            ) : (
                <>
                    <h2>Team Gallery</h2>
                    {isEmpty ? (
                        <NotFound statuscode={404} />
                    ) : (
                        <div className="team__wrapper">
                            {photos.map((item, index) => (
                                <img key={index} src={item} alt={`Image ${index + 1}`} />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
