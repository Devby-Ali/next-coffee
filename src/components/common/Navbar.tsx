import Image from 'next/image';
import Link from 'next/link';
import Icon from '../Icon';
import ThemeToggle from '../ui/ThemeToggle';
import MobileNav from './MobileNav';

function Navbar() {
  return (
    <>
      <header>
        <div className="fixed top-6 right-0 left-0 z-50 hidden md:flex items-center justify-between w-[98%] lg:w-[90%] h-20 px-5 lg:px-10 py-5 mx-auto bg-black/50 rounded-3xl backdrop-blur-[6px]">
          {/* <!-- Logo & Menu --> */}
          <nav className="flex h-14 items-center gap-x-6 lg:gap-x-9">
            {/* <!-- Logo --> */}
            <div className="shrink-0 w-12.5">
              <Image width={59} height={56} src="/images/app-logo.png" alt="Golden Coffe" />
            </div>

            {/* <!-- Menu --> */}
            <ul className="flex gap-x-5 lg:gap-x-9 text-lg text-gray-300 tracking-tightest *:leading-[56px]">
              <li className="font-dana menu__item--active">
                <Link href="/">صفحه اصلی</Link>
              </li>

              {/* <!-- Has sub --> */}
              <li className="relative group">
                <a href="" className="group-hover:text-orange-300 transition-colors">
                  فروشگاه
                </a>

                {/* <!-- Submenu --> */}
                <div className="absolute top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible w-52 p-6 space-y-4 text-zinc-700 dark:text-white bg-white dark:bg-zinc-700 text-base border-t-[3px] border-t-orange-300 tracking-normal shadow-normal rounded-2xl transition-all delay-75 *:inline-block *:transition-colors *:hover:text-orange-300">
                  <a href="">قهوه ی ویژه</a>
                  <a href="">قهوه در سطح جهانی</a>
                  <a href="">قهوه ی درجه یک</a>
                  <a href="">ترکیبات تجاری</a>
                  <a href="">ک‍‍پسول قهوه</a>
                  <a href="">قهوه ی زینو برزیلی</a>
                </div>
              </li>
              <li>
                <a href="">دیکشنری</a>
              </li>
              <li>
                <a href="">بلاگ</a>
              </li>
              <li>
                <a href="">درباره ی ما</a>
              </li>
              <li>
                <a href="">تماس با ما</a>
              </li>
            </ul>
          </nav>

          {/* <!-- Cart & Theme Toggle & Login Link --> */}
          <div className="flex gap-x-4 lg:gap-x-5 xl:gap-x-10 text-xl text-orange-200">
            {/* <!-- Cart Icon & Theme Switch Btn --> */}
            <div className="flex items-center gap-x-4 lg:gap-x-5">
              {/* <!-- Cart --> */}
              <div className="relative group">
                {/* <!-- Cart Icon Hover --> */}
                <div className="py-3 cursor-pointer">
                  <Icon name="shopping-cart" className="w-8 h-8" />
                </div>

                {/* <!-- Cart Box --> */}
                <div className="absolute top-full left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-[400px] p-5 bg-white dark:bg-zinc-700 border-t-[3px] border-t-orange-300 shadow-normal rounded-2xl transition-all delay-75">
                  {/* <!-- Cart Header --> */}
                  <div className="flex items-center justify-between font-dana font-medium text-xs tracking-tighter">
                    <span className="text-gray-300">1 مورد</span>
                    <a href="#" className="flex items-center text-orange-300">
                      مشاهده ی سبد خرید
                      <Icon name="chevron-left-mini" className="w-5 h-5" />
                    </a>
                  </div>

                  {/* <!-- Cart Body --> */}
                  <div className="pb-1 border-b border-b-gray-300 dark:border-b-white/10 divide-y divide-gray-100 dark:divide-white/10 *:py-5">
                    <div className="flex gap-x-2.5">
                      <Image
                        width={300}
                        height={300}
                        src="/images/products/p1.png"
                        className="w-30 h-30"
                        alt="product 1"
                      />
                      <div className="flex flex-col justify-between">
                        <h4 className="font-dana font-medium text-zinc-700 dark:text-white text-base line-clamp-2">
                          قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                        </h4>
                        <div>
                          <span className="text-teal-600 dark:text-emerald-500 text-xs tracking-tighter">
                            14.500 تومان تخفیف
                          </span>
                          <div className="text-zinc-700 dark:text-white font-dana font-semibold">
                            175,000
                            <span className="font-dana text-sm">تومان</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-x-2.5">
                      <Image
                        width={300}
                        height={300}
                        src="/images/products/p2.png"
                        className="w-30 h-30"
                        alt="product 2"
                      />
                      <div className="flex flex-col justify-between">
                        <h4 className="font-dana font-medium text-zinc-700 dark:text-white text-base line-clamp-2">
                          قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                        </h4>
                        <div>
                          <span className="text-teal-600 dark:text-emerald-500 text-xs tracking-tighter">
                            14.500 تومان تخفیف
                          </span>
                          <div className="text-zinc-700 dark:text-white font-dana font-semibold">
                            175,000
                            <span className="font-dana text-sm">تومان</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Cart Footer --> */}
                  <div className="flex justify-between mt-5">
                    <div>
                      <span className="font-dana font-medium text-gray-300 text-xs tracking-tighter">
                        مبلغ قابل پرداخت
                      </span>
                      <div className="text-zinc-700 dark:text-white font-dana font-semibold">
                        350,000
                        <span className="font-dana text-sm">تومان</span>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="flex-center w-[144px] h-14 text-white bg-teal-600 dark:bg-emerald-500 hover:bg-teal-700 dark:hover:bg-emerald-600 transition-colors rounded-xl tracking-tightest"
                    >
                      ثبت سفارش
                    </a>
                  </div>
                </div>
              </div>

              {/* <!-- Theme Switch Btn --> */}
              {/* <div className="toggle-theme cursor-pointer">
              <Icon name="moon" className="inline-block dark:hidden w-8 h-8" />
              <Icon name="sun" className="hidden dark:inline-block w-8 h-8" />
            </div> */}
              <ThemeToggle isSidebar={false} />
            </div>
            {/* <!-- Devide Border --> */}

            <span className="w-px h-14 bg-white/20"></span>

            {/* <!-- Login Link --> */}
            <a href="" className="flex items-center gap-x-2.5 tracking-tightest">
              <Icon name="arrow-left-end-on-rectangle" className="w-8 h-8" />
              <span className="hidden xl:inline-block text-lg">ورود | ثبت‌نام</span>
            </a>
          </div>
        </div>
      </header>
      <MobileNav />
    </>
  );
}

//
export default Navbar;
