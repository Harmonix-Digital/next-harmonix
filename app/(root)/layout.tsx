import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { ToastContainer, toast } from 'react-toastify';






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <ToastContainer />
      <Header />
      <main className="flex-1 wrapper">
        {children}
      </main>
      <Footer />
    </div>
  );
}