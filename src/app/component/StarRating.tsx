import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
  maxStars?: number;
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ maxStars = 5, rating }) => {
  return (
    <div className="flex">
      {[...Array(maxStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={starValue}
            className={`transition-all duration-200 mx-1 ${
              starValue <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            size={18}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
