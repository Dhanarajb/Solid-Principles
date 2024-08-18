/**
 * A React component that renders an interactive widget with a button.
 * When the button is clicked, it calls the `handleUserInteraction` function passed as a prop.
 *
 * @param {object} props - The component props.
 * @param {function} props.handleUserInteraction - A function to be called when the user interacts with the widget.
 * @returns {JSX.Element} - The rendered interactive widget.
 */
// src/components/InteractiveWidget.js
import React from 'react';

function InteractiveWidget({ handleUserInteraction }) {
    return (
        <div>
            <button onClick={handleUserInteraction}>
                Interact
            </button>
        </div>
    );
}

export default InteractiveWidget;
