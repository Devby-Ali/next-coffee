import localFont from 'next/font/local'


export const dana = localFont({
  src: [
    {
      path: '../../../public/fonts/Dana/DanaFaNum-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Dana/DanaFaNum-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Dana/DanaFaNum-DemiBold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-dana',
  display: 'swap',
})


export const morabba = localFont({
  src: [
    {
      path: '../../../public/fonts/Morabba/Morabba-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Morabba/Morabba-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Morabba/Morabba-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-morabba',
  display: 'swap',
})