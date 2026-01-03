import React from 'react';
import ClinicalDataDetails from '../components/ClinicalData/ClinicalDataDetails.tsx';
import { Helmet } from 'react-helmet-async';

const ClinicalData: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Clinical Data Intelligence | UCT Paediatrics</title>
                <meta name="description" content="Advanced Analytics & Machine Learning for Paediatric Healthcare. Transforming complex health data into actionable intelligence." />
            </Helmet>
            <div className="pt-20">
                <ClinicalDataDetails />
            </div>
        </>
    );
};

export default ClinicalData;
