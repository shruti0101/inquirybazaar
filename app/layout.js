import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Layoutwrapper from "@/components/Layout/Layoutwrapper";
import ToastProvider from "@/components/ToastProvider";
import Stickyfooter from "@/components/Stickyfooter";
import InquiryChat from "@/components/InquiryChat";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Hybrid B2B Marketplace in India | Inquiry Bazaar",
  description:
    "Inquiry Bazaar is the Smartest B2B Marketplace, combining marketplace and performance marketing to deliver high-intent business inquiries and real growth.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  verification: {
    google: "6bbu4UfJBXU6bw_utiN0GWbpnttBceKaSZe77oyWJME",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      {/* Contentsquare */}
      <Script
        src="https://t.contentsquare.net/uxa/eed592bfb5b81.js"
        strategy="afterInteractive"
      />

      <body className="h-full font-sans">
        <ToastProvider />

        <Layoutwrapper>
          <Stickyfooter />
          {children}
        </Layoutwrapper>

        <InquiryChat />

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wpdsdgoo5y");
          `}
        </Script>
      </body>
    </html>
  );
}