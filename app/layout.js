import { Poppins } from "next/font/google";
import "./globals.css";
import Layoutwrapper from "@/components/Layout/Layoutwrapper";
import { Toaster  } from "react-hot-toast";
import Stickyfooter from "@/components/Stickyfooter";
import Head from "next/head";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-poppins",
});

export const metadata = {
  title: "Hybrid B2B Marketplace in India | Inquiry Bazaar",
  
  
  description: "Inquiry Bazaar is the Smartest B2B Marketplace, combining marketplace and performance marketing to deliver high-intent business inquiries and real growth.",

icons:{


  icon: "/favicon.ico",
  shortcut: "/favicon.ico",
  apple: "/favicon.ico",
}




};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >


    <Head>

      <meta name="google-site-verification" content="6bbu4UfJBXU6bw_utiN0GWbpnttBceKaSZe77oyWJME" />    
    </Head>

      <body className="h-full font-sans">
      <Toaster position="top-center top-20" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />


        <Layoutwrapper>
<Stickyfooter></Stickyfooter>

          {children}
        </Layoutwrapper>  
      </body>
    </html>
  );
}