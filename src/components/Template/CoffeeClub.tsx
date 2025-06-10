import Image from 'next/image';
import React from 'react';
import Icon from '../Icon';

function CoffeeClub() {
  return (
    <section className="coffee-club mb-8 md:mb-20">
      <div className="container">
        <div className="flex items-center flex-wrap lg:flex-nowrap lg:gap-x-4 xl:gap-x-24 2xl:gap-x-48 gap-y-9 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-8 lg:py-0 px-3 lg:px-5 xl:px-11 lg:h-36 rounded-2xl">
          <div className="flex items-center md:shrink-0 gap-x-3 lg:gap-x-4 xl:gap-x-6">
            <Image
              height={98}
              width={110}
              src="/images/club/diamond.png"
              className="w-[87px] lg:w-25 xl:w-27.5"
              alt="Coffee Club"
            />
            <div>
              <h4 className="font-morabba font-bold text-2xl md:text-5xl mb-2">کافی کلاب</h4>
              <p className="font-morabba font-light text-lg md:text-2xl">
                میدونستی میتونی با امتیاز هات قهوه بگیری ؟
              </p>
            </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex gap-x-2 lg:gap-x-3 xl:gap-x-5">
              <div className="w-18 h-18 md:w-24.5 md:h-24.5 text-center text-emerald-600 bg-white py-1.5 md:pt-5 md:pb-1 rounded-2xl">
                <Icon
                  name="discovery"
                  className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto"
                />
                <span className="text-xs md:text-sm">چرخ و بخت</span>
              </div>
              <div className="w-18 h-18 md:w-24.5 md:h-24.5 text-center text-emerald-600 bg-white py-1.5 md:pt-5 md:pb-1 rounded-2xl">
                <Icon
                  name="activity"
                  className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto"
                />
                <span className="text-xs md:text-sm">ماموریت ها</span>
              </div>
              <div className="w-18 h-18 md:w-24.5 md:h-24.5 text-center text-emerald-600 bg-white py-1.5 md:pt-5 md:pb-1 rounded-2xl">
                <Icon
                  name="ticket-star"
                  className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-1.5 mx-auto"
                />
                <span className="text-xs md:text-sm">جایزه ها</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="md:mb-1 font-semibold text-2xl md:text-3xl">542</span>
              <span className="text-xs md:text-sm">امتیـــــــاز شما</span>
              <a
                href="#"
                className="flex items-center justify-center mt-1 md:mt-2 w-22.5 h-6.5 md:w-27.5 md:h-8 bg-gradient-to-r from-orange-200 to-orange-300 font-medium text-xs md:text-sm rounded-full"
              >
                <Icon name="chevron-left-mini" className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoffeeClub;
