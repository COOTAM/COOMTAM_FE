import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

import Header from './_components/Header';
import Footer from './_components/Footer';

const galmuri = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Galmuri11.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/Galmuri11-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-galmuri',
});

export const metadata: Metadata = {
  title: {
    template: '%s | COTAM', // 페이지 타이틀 템플릿
    default: 'COTAM', // 페이지 타이틀이 없을 때 사용될 기본값
  },
  description: '열정적으로, 때로는 여유롭게 코탐에서 함께 성장해요.',
  keywords: [
    '코탐',
    '스터디',
    '코딩 스터디',
    '모각코',
    '개발자 네트워킹',
    '개발 스터디',
    'cotam',
    '건대 스터디',
    '강남 스터디',
  ],

  metadataBase: new URL('https://cotam.vercel.app'),
  alternates: {
    canonical: 'https://cotam.vercel.app/',
  },

  // Open Graph
  openGraph: {
    title: 'COTAM : 다양한 연차의 개발자,디자이너가 함께하고 있는 IT 자기계발 스터디 모임',
    description: '열정적으로, 때로는 여유롭게 코탐에서 함께 성장해요.',
    url: 'https://cotam.vercel.app/',
    siteName: 'Cotam',
    locale: 'ko_KR',
    type: 'website',
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'COTAM : 다양한 연차의 개발자,디자이너가 함께하고 있는 IT 자기계발 스터디 모임',
    description: '열정적으로, 때로는 여유롭게 코탐에서 함께 성장해요.',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={galmuri.variable}>
        <div className="relative bg-cotam-blue-100 flex-col-center">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
