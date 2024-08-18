/**
 * A React component that renders a chart based on a provided `renderChart` function.
 *
 * @param {Object} props - The component props.
 * @param {function} props.renderChart - A function that renders the chart.
 * @returns {JSX.Element} - The rendered chart widget.
 */
// src/components/ChartWidget.js
import React from 'react';

function ChartWidget({ renderChart }) {
    React.useEffect(() => {
        renderChart();
    }, [renderChart]);

    return <div>Rendering chart...</div>;
}

export default ChartWidget;
