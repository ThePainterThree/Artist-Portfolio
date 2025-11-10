import Provider from "./provider";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";

export const metadata = {
  title: "Artist Portfolio",
  description: "Artworks showcase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
