import './globals.css';

export const metadata = {
  title: 'Mindset - Entenda o Conceito',
  description: 'Explore o que é mindset, seus tipos e como desenvolvê-lo para alcançar seus objetivos.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
