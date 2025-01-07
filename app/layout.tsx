import "./globals.css";

type Metadata = {
  title: string;
  description: string;
  robots: string;
};

export const metadata: Metadata = {
  title: "Algosist",
  description: "Learning Through Practice",
  robots: "index, follow",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Dongle&display=swap"
          rel="stylesheet"
        />
        
        {/* Favicon */}
        <link rel="icon" href="/app-icon.ico" />
        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
            type="text/javascript"
            src="https://cdn.jsdelivr.net/pyodide/v0.21.3/full/pyodide.js"
            async
          ></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
