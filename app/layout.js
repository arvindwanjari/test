import "../Assets/css/smrija-brand.css";
import "./globals.css";

export const metadata = {
  title: "SMRIJA / स्मृजा — Launching soon",
  description: "SMRIJA / स्मृजा — वीण आठवणींची. Launching soon.",
  icons: { icon: "/Assets/icons/favicon.png" },
};

export const viewport = { themeColor: "#F2E9DC" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
