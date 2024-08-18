/**
 * A React component that displays a loading message while data is being loaded.
 *
 * @param {object} props - The component props.
 * @param {function} props.loadData - A function that loads the data to be displayed.
 * @returns {JSX.Element} - A React element that displays a loading message.
 */
// src/components/LoadableWidget.js
import React from 'react';

function LoadableWidget({ loadData }) {
    React.useEffect(() => {
        loadData();
    }, [loadData]);

    return <div>Loading data...</div>;
}

export default LoadableWidget;
