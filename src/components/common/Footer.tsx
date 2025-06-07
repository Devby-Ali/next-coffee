import Image from 'next/image';
import Icon from '../Icon';

function Footer() {
  return (
    <footer className="relative bg-zinc-700 py-8 md:pb-11 md:pt-15.5">
      <Icon
        name="curve-footer"
        className="absolute top-0 right-0 left-0 mx-auto hidden md:inline-block w-25 h-5.5 text-gray-100 dark:text-zinc-800"
      />

      <div className="absolute top-0 right-0 left-0 mx-auto -translate-y-1/2 hidden md:flex-center w-7.5 h-7.5 border-2 border-orange-300 rounded-full">
        <Icon
          name="chevron-down-mini"
          className="w-5 h-5 text-zinc-700 dark:text-white rotate-180"
        />
      </div>

      <div className="text-gray-300 sm:w-[94%] lg:w-[90%] px-4 md:px-0 mx-auto">
        <div className="flex justify-between flex-wrap">
          <div>
            <div className="flex gap-x-5 mb-6 md:mb-4.5 text-gray-300">
              <Icon name="logo" className="w-[57px] h-13.5" />
              <Icon name="logo-type" className="w-34.5 h-13.5" />
            </div>
            <p className="xl:max-w-[606px] text-lg md:text-xl/[48px]">
              ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات و توزیع، الگویی
              برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه در ایران تبدیل شویم. می‌پنداریم که
              نظر مردم ایران و منطقه باید نسبت به کالای ایرانی بهبود یابد و در این راستا با اشتیاق
              می‌کوشیم.
            </p>
          </div>
          <div className="mt-10 md:mt-6.5">
            <h4 className="font-dana font-bold text-2xl text-white mb-6 md:mb-7">دسترسی سریع</h4>
            <div className="grid grid-cols-2 gap-y-2.5 md:gap-y-5 gap-x-10 md:gap-x-16">
              <a
                href="#"
                className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-orange-300 transition-colors"
              >
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                حریم خصوصی
              </a>
              <a
                href="#"
                className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-orange-300 transition-colors"
              >
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                عودت کالا
              </a>
              <a
                href="#"
                className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-orange-300 transition-colors"
              >
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                شرایط استفاده
              </a>
              <a
                href="#"
                className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-orange-300 transition-colors"
              >
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                ثبت سفارش
              </a>
              <a
                href="#"
                className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-orange-300 transition-colors"
              >
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                پرسش های متداول
              </a>
              <a
                href="#"
                className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-orange-300 transition-colors"
              >
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                فرصت های شغلی
              </a>
              <a
                href="#"
                className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-orange-300 transition-colors"
              >
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                ضمانت نامه ها
              </a>
              <a
                href="#"
                className="flex items-center gap-x-2 md:gap-x-3 md:text-xl hover:text-orange-300 transition-colors"
              >
                <span className="inline-block w-2 md:w-2.5 h-1 bg-current rounded-full"></span>
                ارتباط با ما
              </a>
            </div>
          </div>
          <div className="mt-10 md:mt-6.5">
            <h4 className="font-dana font-bold text-2xl text-white mb-6 md:mb-7">در تماس باشیم</h4>
            <div>
              <div className="md:text-xl mb-6 md:mb-10">
                <span className="flex items-center gap-x-2 md:gap-x-3 mb-4 md:mb-5">
                  <Icon name="map-pin" className="shrink-0 w-6 h-6 md:w-6 md:h-6" />
                  بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳
                </span>
                <div className="flex flex-wrap gap-x-5 gap-y-4 font-dana">
                  <a
                    href="mailto:info@Coffee.com"
                    className="flex items-center gap-x-2 md:gap-x-3 text-orange-300"
                  >
                    <Icon name="envelope" className="w-6 h-6 md:w-6 md:h-6" />
                    info@Coffee.com
                  </a>
                  <div className="flex items-center gap-x-2 md:gap-x-3">
                    <Icon name="phone" className="w-6 h-6 md:w-6 md:h-6" />
                    <span>0902 123 6628</span>
                    <span>021 - 6789012</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-x-1.5 md:gap-x-6 ltr-text font-dana md:text-xl">
                <a
                  href="#"
                  className="flex-center gap-x-2 flex-grow h-12 text-zinc-700 bg-gradient-to-r from-orange-200 to-orange-300 rounded-xl"
                >
                  @golden_coffee
                  <Icon name="telegram" className="w-6.5 h-6.5 md:w-9.5 md:h-9.5" />
                </a>
                <a
                  href="#"
                  className="flex-center gap-x-2 flex-grow h-12 border border-orange-200 text-orange-200 rounded-xl"
                >
                  @golden_coffee
                  <Icon name="instagram" className="w-6.5 h-6.5 md:w-9.5 md:h-9.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4 font-dana text-xs/[5] md:text-base border-t border-t-white/10 pt-10 md:pt-11 mt-10 md:mt-11">

          <div className="relative tracking-wide flex-center text-sm group/info select-none">
            توسعه دهنده:
            <div className="flex-center text-sky-400">
              <a
                target="_blank"
                href="https://github.com/Devby-Ali"
                className="hover:tracking-wide tracking-normal transition-all font-dana font-bold text-base ml-1 mr-1.5 cursor-pointer text-nowrap"
              >
                Devby-Ali
              </a>
              <Icon name="github-icon" className="w-5 h-5 gap-5 mb-1 md:mb-1.5 mx-auto" />
            </div>
            <div className="invisible opacity-0 group-hover/info:opacity-100 group-hover/info:visible absolute -top-[70px] lg:-top-6 flex-center w-max gap-x-4 bg-sky-700/15 backdrop-blur-[3px] p-2 rounded-full rounded-br-md lg:rounded-br-full z-50 right-40 lg:right-48 pl-5">
              <div className="w-12 xl:w-14 h-12 xl:h-14 rounded-4xl opacity-85 overflow-hidden">
                <Image src="/images/DevbyAli.jpg" height={56} width={56} alt="dev-img" />
              </div>
              <span className="text-nowrap font-morabba text-sm xs:tracking-wider md:text-base">
                علی بخشی | فرانت‌اند ری‌اکت
              </span>
            </div>
          </div>
          
          <span className="ltr-text">Copyright © 2023 Golden Coffee. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
