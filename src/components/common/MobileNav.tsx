'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../Icon';
import ThemeToggle from '../ui/ThemeToggle';

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [submenu, setSubmenu] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isCartOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-40 transition-all duration-300 ${
          isMenuOpen || isCartOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => {
          setIsMenuOpen(false);
          setIsCartOpen(false);
        }}
      />

      {/* Mobile Menu Button */}

      <div className="md:hidden fixed top-0 h-16 right-0 left-0 z-30 flex items-center justify-between px-4 py-3 bg-white dark:bg-zinc-700 shadow-sm">
        <div className="cursor-pointer" onClick={() => setIsMenuOpen(true)}>
          <Icon name="bars-3" className="w-6 h-6 text-zinc-700 dark:text-white" />
        </div>

        <Icon name="logo-type" className="w-24 h-10 text-orange-300" />

        <div onClick={() => setIsCartOpen(true)} className="flex items-center gap-4 cursor-pointer">
          <div className="relative">
            <Icon name="shopping-cart" className="w-6 h-6 text-zinc-700 dark:text-white" />
            <span className="absolute -top-2 -right-2 flex-center w-4 h-4 text-xs text-white bg-orange-300 rounded-full">
              1
            </span>
          </div>
        </div>
      </div>

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 pt-3 px-4 bg-white dark:bg-zinc-700 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-b-gray-100 dark:border-b-white/10">
          <div className="flex gap-x-4">
            <Icon name="logo" className="w-[41px] h-10 text-orange-300" />
            <Icon name="logo-type" className="w-25 h-10 text-orange-300" />
          </div>
          <div
            className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            <Icon
              name="x-mark-mini"
              className="w-5 h-5 text-zinc-600 dark:text-white cursor-pointer"
            />
          </div>
        </div>

        {/* Sidebar Content */}

        <ul className="*:px-2.5 space-y-6 text-zinc-600 dark:text-white">
          <li>
            <a href="#" className="flex items-center gap-x-2 sidebar__menu--active">
              <Icon name="home" className="w-5 h-5" />
              صفحه اصلی
            </a>
          </li>
          <li>
            <div
              className={`flex items-center justify-between cursor-pointer ${
                submenu && 'text-orange-300'
              }`}
            >
              <a href="#" className="flex items-center gap-x-2">
                <Icon name="shopping-bag" className="w-5 h-5" />
                فروشگاه
              </a>
              <span onClick={() => setSubmenu(!submenu)} className="submenu-open-btn">
                <Icon name="chevron-down-mini" className={`w-4 h-4 ${submenu && 'rotate-180'}`} />
              </span>
            </div>
            <div className={`${submenu ? 'submenu submenu--open' : 'submenu'}`}>
              <a href="#" className="submenu__item">
                قهوه ویژه
              </a>
              <a href="#" className="submenu__item">
                ویژه در سطح جهانی
              </a>
              <a href="#" className="submenu__item">
                قهوه درجه یک
              </a>
              <a href="#" className="submenu__item">
                ترکیبات تجاری
              </a>
              <a href="#" className="submenu__item">
                کپسول قهوه
              </a>
              <a href="#" className="submenu__item">
                قهوه زینو برزیلی
              </a>
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

          <div className="toggle-theme inline-block">
            <div className="flex items-center gap-x-2">
              <ThemeToggle isSidebar={true} />
              <span className="flex items-center gap-x-2 dark:hidden">تم تیره</span>
              <span className="hidden dark:flex items-center gap-x-2">تم روشن</span>
            </div>
          </div>

          <div
            onClick={() => {
              setIsMenuOpen(false);
              setIsCartOpen(true);
            }}
            className="inline-flex items-center gap-x-2 cursor-pointer"
          >
            <Icon name="shopping-cart" className="w-5 h-5" />
            سبد خرید
          </div>
        </div>
      </div>

      {/* Side Cart */}
      <div
        className={`fixed top-0 left-0 h-full flex flex-col w-64 pt-5 px-4 bg-white dark:bg-zinc-700 z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* <!-- Cart Header --> */}
        <div className="flex items-center justify-between pb-5 mb-5 border-b border-b-gray-300 dark:border-b-white/10">
          <div onClick={() => setIsCartOpen(false)} className="cursor-pointer">
            <Icon name="x-mark-mini" className="w-5 h-5 text-zinc-600 dark:text-white" />
          </div>
          <span className="text-zinc-700 dark:text-white h-full font-dana font-medium">
            سبد خرید
          </span>
        </div>

        {/* <!-- Cart Body --> */}
        <div className="*:pb-5 *:mb-5">
          <div className="flex gap-x-1 border-b border-b-gray-100 dark:border-b-white/10">
            <img src="images/products/p1.png" className="w-[90px] h-[90px]" alt="product 1" />
            <div className="flex flex-col justify-between gap-y-1.5">
              <h4 className="font-dana font-medium text-zinc-700 dark:text-white text-sm line-clamp-2">
                قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
              </h4>
              <div>
                <span className="text-teal-600 dark:text-emerald-500 font-dana font-medium text-xs tracking-tighter">
                  14.500 تومان تخفیف
                </span>
                <div className="text-zinc-700 dark:text-white font-dana font-semibold">
                  175,000
                  <span className="font-normal text-xs px-1">تومان</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-1 border-b border-b-gray-100 dark:border-b-white/10">
            <img src="images/products/p2.png" className="w-[90px] h-[90px]" alt="product 2" />
            <div className="flex flex-col justify-between gap-y-1.5">
              <h4 className="font-dana font-medium text-zinc-700 dark:text-white text-sm line-clamp-2">
                قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
              </h4>
              <div>
                <span className="text-teal-600 dark:text-emerald-500 font-dana font-medium text-xs tracking-tighter">
                  14.500 تومان تخفیف
                </span>
                <div className="text-zinc-700 dark:text-white font-dana font-semibold">
                  175,000
                  <span className="font-normal text-xs px-1">تومان</span>
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
            <span className="font-dana font-medium text-gray-300 text-xs tracking-tighter">
              مبلغ قابل پرداخت
            </span>
            <div className="text-zinc-700 dark:text-white font-dana font-semibold">
              350,000
              <span className="font-normal text-xs px-1">تومان</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
