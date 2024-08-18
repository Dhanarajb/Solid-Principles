/**
 * Renders a feedback widget that allows users to interact with it.
 * The widget is implemented using the `InteractiveWidget` component, which
 * handles the user interaction and logs a message to the console.
 */
// src/components/FeedbackWidget.js
import React from 'react';
import InteractiveWidget from './InteractiveWidget';

function FeedbackWidget() {
    const handleUserInteraction = () => {
        console.log("Handling feedback interaction");
        // Simulate user interaction handling
    };

    return (
        <div>
            <h3>Feedback Widget</h3>
            <InteractiveWidget handleUserInteraction={handleUserInteraction} />
        </div>
    );
}

export default FeedbackWidget;
