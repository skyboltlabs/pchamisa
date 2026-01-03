import React from 'react';
import AethermuseDetails from '../components/Aethermuse/AethermuseDetails';
import { Helmet } from 'react-helmet-async';

const Aethermuse: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Aethermuse | Virtual Museum of AI Art</title>
                <meta name="description" content="A Living Museum for the Age of Artificial Creativity. Exhibiting, curating, and preserving AI-generated art as a first-class cultural medium." />
            </Helmet>
            <div className="pt-20">
                <AethermuseDetails />
            </div>
        </>
    );
};

export default Aethermuse;
