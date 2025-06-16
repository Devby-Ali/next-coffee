import React from 'react';
import Icon from '../Icon';

interface LoadMoreProps {
  currentPage: number;
  totalPages: number;
  onLoadMore: () => void;
  isLoading: boolean;
}

const LoadMore: React.FC<LoadMoreProps> = ({ currentPage, totalPages, onLoadMore, isLoading }) => {
  if (currentPage >= totalPages) return null;

  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={onLoadMore}
        disabled={isLoading}
        className="flex items-center gap-x-1 pr-6 pl-4 py-2 bg-teal-600 hover:bg-teal-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white rounded-xl transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
      >
        <span className='text-sm md:text-base'>مشاهده بیشتر</span>
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <Icon name="chevron-down-mini" className="w-7 md:w-8 h-7 md:h-8" />
        )}
      </button>
    </div>
  );
};

export default LoadMore;
