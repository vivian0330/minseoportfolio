import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '강민서 - 보안 포트폴리오',
  description: '코드로 문제를 해결하는 것을 즐기는 보안 학도 이수아의 포트폴리오입니다.',
  keywords: ['보안', '사이버보안', 'CTF', '퍼징', '시스템해킹', '포트폴리오'],
  authors: [{ name: '강민서' }],
  openGraph: {
    title: '강민서 - 보안 포트폴리오',
    description: '코드로 문제를 해결하는 것을 즐기는 보안 학도',
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}