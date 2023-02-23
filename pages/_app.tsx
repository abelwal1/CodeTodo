import "../styles/globals.css";
import type { AppProps } from "next/app";

// pages/_app.js
//Another way of adding Google fonts
// import { Roboto } from '@next/font/google'

// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
// })

// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <style jsx global>{`
//         :root {
//           --roboto-font: ${roboto.style.fontFamily};
//         }
//       `}</style>
//       <Component {...pageProps} />
//     </>
//   );
// }

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} 
  // className={roboto.className}
   />;
}
