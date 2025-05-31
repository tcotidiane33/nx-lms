import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import type { ICourseItemProperties } from './courses-item-interface';
import './courses-item.css';

export function CoursesItem({
  id,
  title,
  image,
  instructor,
  instructorImage,
  rating,
  reviews,
  price,
  category,
}: ICourseItemProperties): ReactElement {
  const renderStars = () => {
    const stars = [];
    const numericRating = parseFloat(rating as string);
    const fullStars = Math.floor(numericRating);
    const hasHalfStar = numericRating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FontAwesomeIcon key={i} icon={faStarHalfAlt} className="text-yellow-400" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-gray-300" />);
      }
    }

    return stars;
  };

  return (
    <div className="w-full sm:w-80 md:w-72 lg:w-64 xl:w-72 p-2 m-3">
      <div className="relative  bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeIn">        
        <Link
        to={`/courses/${id}`}
        state={{ title }}
        className="block"
      >
        {/* Badges */}
        <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs uppercase font-bold px-2 py-1 rounded z-10">
          {category}
        </div>
        <div className="absolute top-3 right-3 bg-indigo-600 text-white font-bold px-3 py-1 rounded z-10">
          {price}
        </div>

        {/* Image */}
        <div className="overflow-hidden h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-4 h-48 flex flex-col justify-between">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 hover:text-indigo-600 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Instructor */}
          <div className="flex items-center mb-3">
            <img
              src={instructorImage}
              alt={instructor}
              className="w-8 h-8 rounded-full border-2 border-white shadow mr-2 flex-shrink-0"
            />
            <span className="text-sm text-gray-600 truncate">{instructor}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-yellow-600 font-semibold mr-1">({rating})</span>
              <div className="flex space-x-1">
                {renderStars()}
              </div>
              <span className="text-gray-500 text-sm ml-1">({reviews})</span>
            </div>
          </div>
        </div>
      </Link>
      </div>
    </div>
  );
}