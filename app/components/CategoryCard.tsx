import React from 'react';

interface CategoryCardProps {
  category: string;
  onClick: (category: string) => void;
  isSelected?: boolean; // New prop to track selected state
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick, isSelected = false }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`w-48 h-48 flex flex-col items-center justify-center rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-110 cursor-pointer ${
          isSelected 
            ? 'bg-blue-600 text-white' // Selected style
            : 'bg-black text-white'    // Default style
        }`}
        onClick={() => onClick(category)}
      >
        <div className="w-4/5 border-t-4 border-white mb-4"></div>
        <h3 className="text-2xl font-bold text-center">{category}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;