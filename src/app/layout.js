
import { Aside } from '@/components/Aside';
import './globals.css';
export const metadata = {
  title: "Code connect",
  description: "Uma ree social para devs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Aside />
        {children}
      </body>
    </html>
  );
}