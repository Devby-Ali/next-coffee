import React from 'react';
import Icon from '../Icon';

interface SectionHeaderProps {
  title: string;
  subTitle?: string;
  swiper?: boolean;
  btnTitle?: string;
}

const SectionHeader = (props: SectionHeaderProps): React.JSX.Element => {
  return (
    <div className="flex items-end justify-between mb-5 md:mb-12">
      <div>
        <h3 className="section-title">{props.title}</h3>
        {props.subTitle && <span className="section-subtitle">{props.subTitle}</span>}
      </div>

      {props.swiper ? (
        <div className="flex gap-x-3 md:gap-x-[18px]">
          <div className="swiper-button-prev-custom">
            <Icon name="chevron-left-mini" className="w-5 h-5 md:w-6.5 md:h-6.5 rotate-180" />
          </div>

          <div className="swiper-button-next-custom">
            <Icon name="chevron-left-mini" className="w-5 h-5 md:w-6.5 md:h-6.5" />
          </div>
        </div>
      ) : (
        <a href="#" className="section-link">
          <span className="hidden md:inline-block">{props.btnTitle}</span>
          <span className="inline-block md:hidden">مشاهده همه</span>
          <Icon name="chevron-left-mini" className="w-5 h-5" />
        </a>
      )}
    </div>
  );
};

export default SectionHeader;
