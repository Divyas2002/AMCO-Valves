import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AMCO Valves | High-Quality Industrial Valves',
  description: 'Specializing in 1 Pc, 2 Pc, and 3 Pc Ball Valves. Screwed, Socket Weld, Butt Weld, and Flanged connections available.',
  icons: {
    icon: '/fav.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
