import { FaTrash } from "react-icons/fa";

import StarRating from "./StarRating";

interface ColorProps {
    colors?: {
        id: string;
        title: string;
        color: string;
        rating: number;
    }[];
    
    onRemoveColor: (id: string) => void;
    onRateColor: (id: string, rating: number) => void;
}

const ColorList = ({colors = [], onRemoveColor, onRateColor}: ColorProps) => {
    if (!colors) {
        return <div>No Colors listed. (Add a Color)</div>;
    }

    return (
        <div>
            {colors.map(color => {
                return (
                    <section key={color.id}>
                        <h1>{color.title}</h1>
                        <button onClick={() => onRemoveColor(color.id)}><FaTrash /></button>
                        <div style={{ height: 50, backgroundColor: color.color }} />
                        <StarRating selectedStars={color.rating} onRateColor={rating => onRateColor(color.id, rating)} />
                    </section>
                );
            })}
        </div>
    );
};

export default ColorList;