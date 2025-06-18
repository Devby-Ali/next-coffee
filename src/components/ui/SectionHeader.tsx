import React from 'react';
import Icon from '../Icon';
import Link from 'next/link';
import { SectionHeaderProps } from '@/types/components.types';


const SectionHeader = (props: SectionHeaderProps): React.JSX.Element => {
  return (
    <div className="flex items-end justify-between mb-5 md:mb-12">
      <div>
        <h3 className="section-title">{props.title}</h3>
        {props.subTitle && <span className="section-subtitle">{props.subTitle}</span>}
      </div>

      {props.btnTitle && props.btnHref && (
        <Link href={`${props.btnHref}`} className="section-link">
          <span className="hidden md:inline-block">{props.btnTitle}</span>
          <span className="inline-block md:hidden">مشاهده همه</span>
          <Icon name="chevron-left-mini" className="w-5 h-5" />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
