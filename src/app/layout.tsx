import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://heyylollypop.vercel.app/'),
  title: 'HeyyLollypop - VTuber Brasileira | Streams, Jogos e Diversão Sem Fim!',
  description: 'Bem-vindo ao universo da HeyyLollypop, a VTuber brasileira favorita! Entre para acompanhar streams de jogos, risadas, doces e muita diversão em uma comunidade vibrante.',
  openGraph: {
    title: 'HeyyLollypop - VTuber Brasileira | Jogos, Doces e Alegria!',
    description: 'A VTuber HeyyLollypop traz streams ao vivo com jogos, muita doçura e uma comunidade acolhedora! Explore o melhor do entretenimento gamer brasileiro.',
    url: 'https://heyylollypop.vercel.app/',
    images: [
      {
        url: '/lollypop-icone.jpg',
        width: 1200,
        height: 630,
        alt: 'Logo da VTuber HeyyLollypop em estilo vibrante e colorido',
      },
      {
        url: '/lollypop-icone.jpg',
        width: 1920,
        height: 1080,
        alt: 'Banner oficial de HeyyLollypop com tema doce e elementos de jogos',
      }
    ],
    siteName: 'HeyyLollypop Official',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@heyylollypop',
    creator: '@klee11z',
  },
  keywords: [
    'HeyyLollypop', 'VTuber brasileira', 'streamer VTuber', 'VTuber ao vivo', 'HeyyLollypop streams', 
    'VTuber gamer', 'jogos ao vivo', 'streamer Brasil', 'HeyyLollypop comunidade', 'live games', 
    'entretenimento VTuber', 'HeyyLollypop YouTube', 'HeyyLollypop Twitch', 'HeyyLollypop oficial', 
    'comunidade gamer', 'HeyyLollypop Instagram', 'HeyyLollypop Twitter', 'stream interativa', 
    'VTuber divertida', 'HeyyLollypop fandom', 'streamer de jogos', 'games e diversão', 
    'VTuber colorida', 'lives VTuber', 'entretenimento ao vivo', 'VTuber humor', 'streamer brasileira famosa',
    'VTuber Brasil', 'HeyyLollypop entretenimento', 'streamer doce', 'gameplay ao vivo', 'HeyyLollypop lives'
  ],
  robots: 'index, follow',
  canonical: 'https://heyylollypop.vercel.app/',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
