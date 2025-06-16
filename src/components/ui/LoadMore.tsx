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
        className="flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 text-white rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>در حال بارگذاری...</span>
          </>
        ) : (
          <>
            <Icon name="plus" className="w-5 h-5" />
            <span>مشاهده بیشتر</span>
          </>
        )}
      </button>
    </div>
  );
};

export default LoadMore;
