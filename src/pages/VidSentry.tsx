import React from 'react';
import VidSentryDetails from '../components/VidSentry/VidSentryDetails';
import { Helmet } from 'react-helmet-async';

const VidSentry: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>VidSentry | AI Content Moderation</title>
                <meta name="description" content="Context-Aware AI for Trust, Safety, and Cultural Intelligence. Protecting digital communities without erasing cultural identity." />
            </Helmet>
            <div className="pt-20"> {/* Add padding for fixed header */}
                <VidSentryDetails />
            </div>
        </>
    );
};

export default VidSentry;
