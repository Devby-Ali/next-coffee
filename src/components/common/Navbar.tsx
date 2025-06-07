import Image from 'next/image';
import Link from 'next/link';
import Icon from '../Icon';

function Navbar() {
  return (
    <header>
      <div className="fixed top-9 right-0 left-0 z-50 hidden md:flex items-center justify-between w-[98%] lg:w-[90%] h-24 px-5 lg:px-10 py-5 mx-auto bg-black/50 rounded-3xl backdrop-blur-[6px]">
        {/* <!-- Logo & Menu --> */}
        <nav className="flex h-14 items-center gap-x-6 lg:gap-x-9">
          {/* <!-- Logo --> */}
          <div className="shrink-0">
            <Image width={59} height={56} src="/images/app-logo.png" alt="Golden Coffe" />
          </div>

          {/* <!-- Menu --> */}
          <ul className="flex gap-x-5 lg:gap-x-9 text-xl text-gray-300 tracking-tightest *:leading-[56px]">
            <li className="font-dana text-orange-200">
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
                <div className="flex items-center justify-between font-dana text-xs tracking-tighter">
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
                      width={15}
                      height={15}
                      src="/images/products/p1.png"
                      className="w-30 h-30"
                      alt="product 1"
                    />
                    <div className="flex flex-col justify-between">
                      <h4 className="font-dana text-zinc-700 dark:text-white text-base line-clamp-2">
                        قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                      </h4>
                      <div>
                        <span className="text-teal-600 dark:text-emerald-500 text-xs tracking-tighter">
                          14.500 تومان تخفیف
                        </span>
                        <div className="text-zinc-700 dark:text-white font-dana font-bold">
                          175,000
                          <span className="font-dana text-sm">تومان</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-x-2.5">
                    <Image
                      width={15}
                      height={15}
                      src="/images/products/p2.png"
                      className="w-30 h-30"
                      alt="product 2"
                    />
                    <div className="flex flex-col justify-between">
                      <h4 className="font-dana text-zinc-700 dark:text-white text-base line-clamp-2">
                        قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                      </h4>
                      <div>
                        <span className="text-teal-600 dark:text-emerald-500 text-xs tracking-tighter">
                          14.500 تومان تخفیف
                        </span>
                        <div className="text-zinc-700 dark:text-white font-dana font-bold">
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
                    <span className="font-dana text-gray-300 text-xs tracking-tighter">
                      مبلغ قابل پرداخت
                    </span>
                    <div className="text-zinc-700 dark:text-white font-dana font-bold">
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
            <div className="toggle-theme cursor-pointer">
              <Icon name="moon" className="inline-block dark:hidden w-8 h-8" />
              <Icon name="sun" className="hidden dark:inline-block w-8 h-8" />
            </div>
          </div>
          {/* <!-- Devide Border --> */}

          <span className="w-px h-14 bg-white/20"></span>

          {/* <!-- Login Link --> */}
          <a href="" className="flex items-center gap-x-2.5 tracking-tightest">
            <Icon name="arrow-left-end-on-rectangle" className="w-8 h-8" />
            <span className="hidden xl:inline-block">ورود | ثبت‌نام</span>
          </a>
        </div>
      </div>

      <div className="flex md:hidden items-center justify-between h-16 px-4 bg-white dark:bg-zinc-700">
        {/* <!-- Nav Icon --> */}
        <div className="nav-icon">
          <Icon name="bars-3" className="w-6 h-6 text-zinc-700 dark:text-white" />
        </div>

        {/* <!-- Nav --> */}
        <div className="nav fixed top-0 bottom-0 -right-64 w-64 min-h-screen pt-3 px-4 bg-white dark:bg-zinc-700 z-20 overflow-y-auto transition-all">
          {/* <!-- Nav Header --> */}
          <div className="flex items-center justify-between pb-5 mb-6 border-b border-b-gray-100 dark:border-b-white/10">
            <div className="flex gap-x-3.5">
              <Icon name="logo" className="w-[41px] h-10 text-orange-300" />
              <Icon name="logo-type" className="w-[100px] h-10 text-orange-300" />
            </div>
            <div className="nav-close-btn">
              <Icon name="x-mark-mini" className="w-5 h-5 text-zinc-600 dark:text-white" />
            </div>
          </div>

          {/* <!-- Nav Menu --> */}
          <div className="flex items-center h-10 bg-orange-200/20 text-orange-300 mb-4 pr-2.5 rounded-md">
            <a href="#" className="flex items-center gap-x-2">
              <Icon name="home" className="w-5 h-5" />
              صفحه اصلی
            </a>
          </div>

          <ul className="*:pr-2.5 space-y-6 text-zinc-600 dark:text-white">
            <li>
              <div className="flex items-center justify-between">
                <a href="#" className="flex items-center gap-x-2">
                  <Icon name="shopping-bag" className="w-5 h-5" />
                  فروشگاه
                </a>
                <span className="submenu-open-btn">
                  <Icon name="chevron-down-mini" className="w-4 h-4" />
                </span>
              </div>
              <div className="submenu">
                <a href="#">قهوه ویژه</a>
                <a href="#" className="submenu__item--active">
                  ویژه در سطح جهانی
                </a>
                <a href="#">قهوه درجه یک</a>
                <a href="#">ترکیبات تجاری</a>
                <a href="#">کپسول قهوه</a>
                <a href="#">قهوه زینو برزیلی</a>
              </div>
            </li>

            <li>
              <a href="#" className="flex items-center gap-x-2">
                <Icon name="chat-bubble-left-ellipsis" className="w-5 h-5" />
                دیکشنری
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center gap-x-2">
                <Icon name="briefcase" className="w-5 h-5" />
                درباره ما
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center gap-x-2">
                <Icon name="document-text" className="w-5 h-5" />
                بلاگ
              </a>
            </li>

            <li>
              <a href="#" className="flex items-center gap-x-2">
                <Icon name="phone-arrow-up-right" className="w-5 h-5" />
                تماس با ما
              </a>
            </li>
          </ul>

          {/* <!-- Nav Footer --> */}
          <div className="flex flex-col items-start gap-y-6 text-orange-300 py-8 px-2.5 mt-8 border-t border-t-gray-100 dark:border-t-white/10">
            <a href="#" className="inline-flex items-center gap-x-2">
              <Icon name="arrow-left-end-on-rectangle" className="w-5 h-5" />
              ورود | ثبت‌نام
            </a>

            <div className="toggle-theme inline-block cursor-pointer">
              <div className="flex items-center gap-x-2 dark:hidden">
                <Icon name="moon" className="w-5 h-5" />
                <span>تم تیره</span>
              </div>

              <div className="hidden dark:flex items-center gap-x-2">
                <Icon name="sun" className="w-5 h-5" />
                <span>تم روشن</span>
              </div>
            </div>

            <a href="#" className="inline-flex items-center gap-x-2">
              <Icon name="shopping-cart" className="w-5 h-5" />
              سبد خرید
            </a>
          </div>
        </div>

        {/* <!-- Logo Type --> */}
        <div>
          <Icon name="logo-type" className="w-[100px] h-10 text-orange-300" />
        </div>

        {/* <!-- Cart Icon --> */}
        <div className="cart-icon">
          <Icon name="shopping-cart" className="w-6 h-6 text-zinc-700 dark:text-white" />
        </div>

        {/* <!-- Cart --> */}
        <div className="cart fixed top-0 bottom-0 -left-64 flex flex-col w-64 min-h-screen pt-5 px-4 bg-white dark:bg-zinc-700 z-20 overflow-y-auto transition-all">
          {/* <!-- Cart Header --> */}
          <div className="flex items-center justify-between pb-5 mb-5 border-b border-b-gray-300 dark:border-b-white/10">
            <div className="cart-close-btn">
              <Icon name="x-mark-mini" className="w-5 h-5 text-zinc-600 dark:text-white" />
            </div>
            <span className="text-zinc-700 dark:text-white font-dana">سبد خرید</span>
          </div>

          {/* <!-- Cart Body --> */}
          <div className="*:pb-5 *:mb-5">
            <div className="flex gap-x-1 border-b border-b-gray-100 dark:border-b-white/10">
              <Image
                src="/images/products/p1.png"
                width={20}
                height={20}
                className="w-[90px] h-[90px]"
                alt="product 1"
              />
              <div className="flex flex-col justify-between gap-y-1.5">
                <h4 className="font-dana text-zinc-700 dark:text-white text-sm line-clamp-2">
                  قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                </h4>
                <div>
                  <span className="text-teal-600 dark:text-emerald-500 font-dana text-xs tracking-tighter">
                    14.500 تومان تخفیف
                  </span>
                  <div className="text-zinc-700 dark:text-white font-dana font-bold">
                    175,000
                    <span className="font-dana text-xs">تومان</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-x-1 border-b border-b-gray-100 dark:border-b-white/10">
              <Image
                src="/images/products/p2.png"
                width={20}
                height={20}
                className="w-[90px] h-[90px]"
                alt="product 2"
              />
              <div className="flex flex-col justify-between gap-y-1.5">
                <h4 className="font-dana text-zinc-700 dark:text-white text-sm line-clamp-2">
                  قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                </h4>
                <div>
                  <span className="text-teal-600 dark:text-emerald-500 font-dana text-xs tracking-tighter">
                    14.500 تومان تخفیف
                  </span>
                  <div className="text-zinc-700 dark:text-white font-dana font-bold">
                    175,000
                    <span className="font-dana text-xs">تومان</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Cart Footer --> */}
          <div className="flex items-end gap-x-4 mt-auto mb-8">
            <a
              href="#"
              className="flex-center w-28 h-11 text-white bg-teal-600 dark:bg-emerald-500 rounded-xl"
            >
              ثبت سفارش
            </a>
            <div>
              <span className="font-dana text-gray-300 text-xs tracking-tighter">
                مبلغ قابل پرداخت
              </span>
              <div className="text-zinc-700 dark:text-white font-dana font-bold">
                350,000
                <span className="font-dana text-xs">تومان</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
