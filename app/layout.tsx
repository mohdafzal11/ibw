import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialIcons from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "India Blockchain Week Conference",
  description: "Stay tuned for the IBW2025 Conference – Accelerating India's Digital Renaissance. Join us at the Sheraton Grand, Bangalore on December 2-3, 2025. Hosted by Hashed Emergent. Tickets coming soon!",
  keywords: "IBW'24 Conference, IBW'24, India Blockchain Week, Blockchain Event India, India, Blockchain Industry, Developers, Blockchain, Crypto event India, IBW, Web3 Event, Web3 India, Hashed Emergent, Hashed EM, Hashed, IBW 2023, IBW2025 Conference, IBW2025, India Blockchain Week, Blockchain Event India, India, Blockchain Industry, Developers, Blockchain, Crypto event India, IBW, Web3 Event, Web3 India, Hashed Emergent, Hashed EM, Hashed, IBW2025, Sheraton Grand, Multichain Conference",
  openGraph: {
    siteName: "India Blockchain Week Conference",
    url: "https://indiablockchainweek.com/",
    title: "India Blockchain Week 2025 (Dec 1-7) | IBW Conference (Dec 2-3) | Sheraton Grand, Bangalore",
    description: "Stay tuned for the IBW2025 Conference – Accelerating India's Digital Renaissance. Join us at the Sheraton Grand, Bangalore on December 2-3, 2025. Hosted by Hashed Emergent. Tickets coming soon!",
    images: [
      {
        url: "/assets/images/2025/banner_less.png",
        width: 2114,
        height: 1106,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "India Blockchain Week 2025 (Dec 1-7) | IBW Conference (Dec 2-3) | Sheraton Grand, Bangalore",
    description: "Stay tuned for the IBW2025 Conference – Accelerating India's Digital Renaissance. Join us at the Sheraton Grand, Bangalore on December 2-3, 2025. Hosted by Hashed Emergent. Tickets coming soon!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/images/2025/favicon/favicon.ico" />
        <link rel="icon" type="image/png" href="/assets/images/2025/favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/assets/images/2025/favicon/favicon-16x16.png" sizes="16x16" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <meta name="facebook-domain-verification" content="qwgke2pxi5pbp81rylm708mum92g9l" />
        <link rel="stylesheet" href="/assets/stylesheets/2025/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/stylesheets/2025/slick.css" />
        <link rel="stylesheet" href="/assets/stylesheets/2025/style.css" />
      </head>
      <body className="theme">
        <Header />
        {children}
        <Footer />
        <SocialIcons />
        
        <Script src="/2025/js/jquery.slim.min.js" strategy="beforeInteractive" />
        <Script src="/2025/js/popper.min.js" strategy="afterInteractive" />
        <Script src="/2025/js/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/2025/js/slick.js" strategy="afterInteractive" />
        <Script src="/2025/js/custom.js" strategy="afterInteractive" />
        <Script src="/2025/js/common_script.js" strategy="afterInteractive" />
        <Script id="slick-init" strategy="afterInteractive">
          {`
            $(document).ready(function () {
              $('.more-social').click(function () {
                $('.social-show').toggle();
                $(this).toggleClass('active');
              });
              
              $('.speakersSliderSlick').slick({
                slidesToShow: 5.9,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1,
                speed: 7000,
                dots: false,
                prevArrow: false,
                nextArrow: false,
                responsive: [
                  {
                    breakpoint: 1300,
                    settings: {
                      slidesToShow: 4.9,
                    }
                  },
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3.9,
                    }
                  },
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 2.9,
                    }
                  },
                  {
                    breakpoint: 567,
                    settings: {
                      slidesToShow: 1.9,
                    }
                  }
                ]
              });
              
              $('.pastSpeakersSliderSlick').slick({
                slidesToShow: 5.9,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1,
                speed: 7000,
                dots: false,
                prevArrow: false,
                nextArrow: false,
                responsive: [
                  {
                    breakpoint: 1300,
                    settings: {
                      slidesToShow: 4.9,
                    }
                  },
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 3.9,
                    }
                  },
                  {
                    breakpoint: 767,
                    settings: {
                      slidesToShow: 2.9,
                    }
                  },
                  {
                    breakpoint: 567,
                    settings: {
                      slidesToShow: 1.9,
                    }
                  }
                ]
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
