export const metadata = {
  title: "Trading Dashboard",
  description: "Your AI-powered trading journal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
