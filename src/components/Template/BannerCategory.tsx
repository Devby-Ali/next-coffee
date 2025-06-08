import React from 'react';

const BannerCategory = (): React.JSX.Element => {
  return (
    <section className="category-banner mt-8 mb-10 md:my-18">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-white">
          <a
            href="#"
            className="category-banner__item1 flex flex-col justify-center pr-7 md:pr-12 rounded-2xl h-35.5 md:h-62"
          >
            <span className="font-semibold text-2xl/6 md:text-4xl/6 mb-4 md:mb-7">
              انواع قهوه
            </span>
            <span className="font-medium md:text-xl/6">ترکیبی و تک خاستگاه</span>
          </a>
          <a
            href="#"
            className="category-banner__item2 flex flex-col justify-center pr-7 md:pr-12 rounded-2xl h-35.5 md:h-62"
          >
            <span className="font-semibold text-2xl/6 md:text-4xl/6 mb-4 md:mb-7">
              پودر های فوری
            </span>
            <span className="font-medium md:text-xl/6">نسکافه ، هات چاکلت ، ماسالا</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BannerCategory;
