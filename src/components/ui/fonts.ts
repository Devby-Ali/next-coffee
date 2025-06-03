import localFont from 'next/font/local';

export const dana = localFont({
  src: [
    {
      path: '../../fonts/Dana/DanaFaNum-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/Dana/DanaFaNum-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/Dana/DanaFaNum-DemiBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-dana',
  display: 'swap',
});

export const morabba = localFont({
  src: [
    {
      path: '../../fonts/Morabba/Morabba-Light.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/Morabba/Morabba-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../fonts/Morabba/Morabba-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-morabba',
  display: 'swap',
});
