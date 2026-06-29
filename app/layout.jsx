import './globals.css';

export const metadata = {
  title: 'Pephaus Compounds',
  description: 'Research compounds. For research use only. Not for human consumption.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
