import './globals.css';

export const metadata = {
  title: 'Aurelian - Sovereign Bharat Portal',
  description: 'Permanence Guaranteed. Sovereign Asset Management for the Modern Bharat.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;700&family=Hanken+Grotesk:wght@300;400;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
      <body className="bg-obsidian-deep text-platinum-white antialiased selection:bg-champagne-accent selection:text-obsidian-deep">
        {children}
      </body>
    </html>
  );
}
