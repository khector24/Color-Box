import './ColorBox.css';
import { useState } from "react";

function getRandomColor(colorsIndexArray) {
    // Find the index of a random color in the array (Colors array)
    const randomIndex = Math.floor(Math.random() * colorsIndexArray.length);
    return colorsIndexArray[randomIndex];
}

export default function ColorBox({ colors }) {
    // Set initial state to the default color
    const [currentColor, setCurrentColor] = useState(() => getRandomColor(colors));

    // State to track if the box has been clicked
    const [isClicked, setIsClicked] = useState(false);

    // Function to change to a random color
    const toggleColor = () => {
        const randomColor = getRandomColor(colors);
        setCurrentColor(randomColor);

        // Mark the box as clicked
        setIsClicked(true);

        // Reset isClicked after animation ends
        setTimeout(() => {
            setIsClicked(false);
        }, 1000);
    };

    return (
        <div style={{ backgroundColor: currentColor }}
            className="box"
            onClick={toggleColor}>
            {isClicked && <p className="word-fade">POP!</p>}
        </div>
    );
}