import "./globals.css";
import { Roboto } from '@next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });

export const metadata = {
  title: "EduVerse - The Ultimate Learning Management System",
  description: "EduVerse is a comprehensive Learning Management System designed to enhance education with features like live streaming classes, course management, and seamless course purchasing. Connect, learn, and grow with EduVerse's innovative platform tailored for educators and students alike.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
