// src/components/SalesWidget.js
import React from 'react';
import LoadableWidget from './LoadableWidget';
import ChartWidget from './ChartWidget';

function SalesWidget() {
    const loadData = () => {
        console.log("Loading sales data");
        // Simulate data loading
    };

    const renderChart = () => {
        console.log("Rendering sales chart");
        // Simulate chart rendering
    };

    return (
        <div>
            <h3>Sales Widget</h3>
            <LoadableWidget loadData={loadData} />
            <ChartWidget renderChart={renderChart} />
        </div>
    );
}

export default SalesWidget;
