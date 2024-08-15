import ColorBox from "./ColorBox";
import './ColorBoxGrid.css';

export default function ColorBoxGrid({ colors }) {
    return (
        <div className="grid">
            {Array.from({ length: 25 }).map((_, index) =>
                <ColorBox key={index} colors={colors} />
            )}
        </div>
    );
}