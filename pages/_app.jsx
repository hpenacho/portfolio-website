import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

const playfair = Playfair_Display({
  subsets: ['latin'],
  // Define weights if needed, or leave out if using variable fonts
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* This forces the font variables into the :root so EVERY file can see them */}
      <style jsx global>{`
        :root {
          --font-playfair: ${playfair.style.fontFamily};
          --font-jakarta: ${jakarta.style.fontFamily};
        }
      `}</style>
      
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}