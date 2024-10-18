import "@/app/_styles/globals.css";
import Header from "./_components/Header";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / StayZen",
    default: "StayZen",
  },
  description:
    "Discover the perfect escape with StayZen, your go-to hotel application for finding and booking serene accommodations. Explore a curated selection of hotels, enjoy exclusive deals, and experience unparalleled relaxation. Whether you’re planning a weekend getaway or a long vacation, StayZen ensures a stress-free booking experience tailored to your needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${josefin.className} antialiased min-h-screen text-gray-800 bg-[#F9F9F9] flex flex-col`}
      >
        <header className="bg-[#c2ecd3] z-30">
          <Header />
        </header>
        <div className="flex-1 px-8 py-12 bg-[#141C24]">
          <main className="max-w-7xl mx-auto text-gray-800 ">{children}</main>
        </div>
      </body>
    </html>
  );
}
