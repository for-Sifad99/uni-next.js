import { Lexend_Deca } from 'next/font/google';
import "./globals.css";
import Navigation from "@/components/Navigation";

const lexendDeca = Lexend_Deca({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
});

export const metadata = {
  title: 'My App',
  description: 'Using Lexend Deca',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexendDeca.className} min-h-screen flex flex-col`}>
        <header>
          <Navigation />
        </header>
        <main className="flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
