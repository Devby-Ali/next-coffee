import Image from 'next/image';
import React from 'react';
import Icon from '../Icon';

function ContactUs() {
  return (
    <section className="contact-us mb-16 md:mb-28">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-y-8 lg:gap-x-5">
          <Image
            height={412}
            width={400}
            src="/images/contact.png"
            className="shrink-0 w-[296px]"
            alt="contact"
          />
          <div className="text-zinc-700 dark:text-white">
            <h3 className="font-morabba font-medium text-2xl md:text-5xl mb-0.5 md:mb-1.5">
              یکی از بهترین قهوه ها !
            </h3>
            <span className="font-morabba font-light text-lg md:text-3xl/[48px]">
              کیفیت قهوه را از ما بخواهید ...
            </span>
            <div className="flex gap-x-2.5 my-5 md:my-6">
              <span className="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
              <span className="inline-block w-1 h-1 bg-zinc-700 dark:bg-gray-400 rounded-full"></span>
            </div>
            <p className="text-lg md:text-2xl">
              فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری پیدا کنند و دسرهای
              خوشمزه ما را که کاملاً با قهوه داغ همراه شده است، امتحان کنند. فضای داخلی شیک و
              کارکنان خوش برخورد ما روز شما را می سازد!
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-x-2 h-12.5 md:h-15 px-6 mt-5 md:mt-6 border md:border-2 border-orange-300 rounded-full text-base md:text-xl tracking-tightest text-orange-300"
            >
              <Icon name="phone" className="w-5 md:w-8 h-5 md:h-8" />
              ثبت سفارش تلفنی
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
