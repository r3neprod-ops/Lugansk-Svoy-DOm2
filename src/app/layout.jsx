import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: 'СвойДом Луганск — ипотечный брокер',
  description: 'Подбор ЖК и оформление ипотеки под ключ в Луганске.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
