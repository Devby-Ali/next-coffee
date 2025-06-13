import React from 'react';
import Icon from '../Icon';
import Image from 'next/image';
import { blogProps } from '@/types/components.types';

const BlogCart = (props: blogProps): React.JSX.Element => {
  return (
    <div className="group flex gap-x-2.5 sm:block p-2.5 md:pb-2 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl">
      <div className="relative w-32.5 h-32.5 shrink-0 sm:w-auto sm:h-auto sm:mb-4 rounded-2xl rounded-bl-4xl overflow-hidden">
        <Image
          height={378}
          width={569}
          src={props.img}
          className="h-full sm:h-auto object-cover"
          alt="Blog 1"
        />
        <div className="absolute inset-0 w-full h-full hidden md:flex-center invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-gradient-to-r from-orange-200/80 to-orange-300/80 transition-all delay-75">
          <Icon name="logo-type" className="w-34.5 h-13.5 text-amber-900" />
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row items-start justify-between">
        <a
          href="#"
          className="font-semibold md:font-normal ml-1.5 sm:ml-0 mt-2.5 sm:mt-0 text-sm/7 md:text-lg line-clamp-2 max-w-[193px] text-zinc-700 dark:text-white"
        >
          {props.title}
        </a>
        <div className="hidden sm:flex gap-5">
          <span className="hidden lg:block w-px h-[61px] bg-gray-100 dark:bg-white/10"></span>
          <div className="flex sm:flex-col ml-3 lg:ml-4.5 -mt-1 text-teal-600 dark:text-emerald-500 text-sm text-left">
            <span className="font-semibold md:text-xl lg:text-2xl">{props.date.day}</span>
            <span>{props.date.month}</span>
            <span>{props.date.year}</span>
          </div>
        </div>
        <div className="flex justify-between items-end w-full sm:hidden border-t border-t-gray-100 dark:border-t-white/10 pt-4.5 pb-1.5">
          <span className="text-teal-600 dark:text-emerald-500 text-xs">21 مرداد 1402</span>
          <a
            href="#"
            className="flex items-center gap-x-1 ml-1.5 font-semibold text-xs h-5 rounded-md pr-2.5 pl-2 bg-orange-200/20 text-orange-300"
          >
            مطالعه
            <Icon name="arrow-left" className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;
