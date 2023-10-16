import "./globals.css";

export const metadata = {
  title: "yeobo",
  description: "Syncthon Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-white h-screen w-screen">{children}</div>
      </body>
    </html>
  );
}
