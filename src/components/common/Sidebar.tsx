'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '../Icon';
import ThemeToggle from '../ui/ThemeToggle';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenu, setSubmenu] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Button */}

      <div className="md:hidden fixed top-0 right-0 left-0 z-40 flex items-center justify-between px-4 py-3 bg-white dark:bg-zinc-700 shadow-sm">
        <div className='cursor-pointer' onClick={() => setIsOpen(true)}>
          <Icon name="bars-3" className="w-6 h-6 text-zinc-700 dark:text-white" />
        </div>
        <Icon name="logo-type" className="w-24 h-10 text-orange-300" />
        <div className="flex items-center gap-4">
          <div className="relative">
            <Icon name="shopping-cart" className="w-6 h-6 text-zinc-700 dark:text-white" />
            <span className="absolute -top-2 -right-2 flex-center w-4 h-4 text-xs text-white bg-orange-300 rounded-full">
              1
            </span>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 pt-3 px-4 bg-white dark:bg-zinc-700 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
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
            onClick={() => setIsOpen(false)}
          >
            <Icon name="x-mark-mini" className="w-5 h-5 text-zinc-600 dark:text-white cursor-pointer" />
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="flex items-center h-10 bg-orange-200/20 text-orange-300 mb-4 pr-2.5 rounded-md">
          <a href="#" className="flex items-center gap-x-2">
            <Icon name="home" className="w-5 h-5" />
            صفحه اصلی
          </a>
        </div>

        <ul className="*:px-2.5 space-y-6 text-zinc-600 dark:text-white">
          <li>
            <div className={`flex items-center justify-between ${submenu && 'text-orange-300'}`}>
              <a
                href="#"
                onClick={() => setSubmenu(!submenu)}
                className="flex items-center gap-x-2"
              >
                <Icon name="shopping-bag" className="w-5 h-5" />
                فروشگاه
              </a>
              <span className="submenu-open-btn">
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
    </>
  );
}
