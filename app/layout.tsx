import '../styles/globals.css'
import Layout from "@/components/Layout";

export const metadata = {
  title: 'Міні-блог',
  description: 'Простий блог на Next.js + TS + Tailwind',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}