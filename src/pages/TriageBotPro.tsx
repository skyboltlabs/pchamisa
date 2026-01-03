import React from 'react';
import TriageBotProDetails from '../components/TriageBotPro/TriageBotProDetails.tsx';
import { Helmet } from 'react-helmet-async';

const TriageBotPro: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>TriageBotPro | AI Clinical Triage Assistant</title>
                <meta name="description" content="AI-Powered Clinical Triage Assistant for Healthcare Triage Teams. Streamlines patient intake and risk assessment with scalable AI." />
            </Helmet>
            <div className="pt-20">
                <TriageBotProDetails />
            </div>
        </>
    );
};

export default TriageBotPro;
