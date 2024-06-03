import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "League Tracker",
  description: "LeagueTracker is your ultimate solution for creating and managing recreational leagues. Our platform allows you to easily set up leagues, including optional playoff brackets, track standings, enter match scores, and manage cash buy-ins for leagues and tournaments. Perfect for sports enthusiasts, hobbyists, and casual competitors looking to organize and enjoy their favorite games.",
  keywords: ["recreational leagues", "league management", "playoffs", "standings", "match scores", "cash buy-ins", "tournaments", "sports leagues", "hobby leagues", "casual competition", "tennis", "pickleball", "pick up games"],
  authors: {
    name: "Riley Mahoney"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
