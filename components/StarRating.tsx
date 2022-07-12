import { FaStar } from "react-icons/fa";

interface StarRatingProps {
    totalStars?: number;
    selectedStars?: number;

    onRateColor: (rating: number) => void;
}

const StarRating = ({ totalStars = 5, selectedStars = 0, onRateColor }: StarRatingProps) => {
    return (
        <div>
            {[...Array(totalStars)].map((n, i) => (
                <FaStar key={i} color={selectedStars > i ? "red" : "grey"} onClick={() => onRateColor(i + 1)} />
            ))}
            <p>{selectedStars} of {totalStars} stars</p>
        </div>
    );
};

export default StarRating;