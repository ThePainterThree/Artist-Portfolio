import "./globals.css"
import { Provider } from "@/components/ui/provider"
import Header from "@/components/ui/header";

export const metadata = {
  title: "Artist Portfolio",
  description: "Artworks showcase",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
         <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
