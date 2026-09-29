import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";

export const metadata = {
  title: "ByteSpace | Get Access to Hundreds of Courses",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with ByteSpace's wide range of courses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
