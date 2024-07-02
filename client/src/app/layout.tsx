import type { Metadata } from "next"
import { Inter } from "next/font/google"


import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import { Toaster } from "@/components/ui/toaster"
import AppProvider from "@/app/AppProvider";
import { cookies } from "next/headers";
import SlideSession from "@/components/slide-session";
import accountApiRequest from "@/app/apiRequests/account";
import { AccountResType } from "@/schemaValidations/account.schema";
import { baseOpenGraph } from "@/app/shared-metadata";

const inter = Inter({ subsets: ['vietnamese'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Productic',
    default: 'Productic'
  },
  description: "Được tạo bởi Lotus Dev",
  openGraph : baseOpenGraph
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')
  // console.log('Rootlayout',cookieStore.get('sessionToken'))
  let user : AccountResType['data']| null = null;
  try {
    if (sessionToken) {
      const data = await accountApiRequest.me(sessionToken.value)
      user = data.payload.data;
    }
  } catch (error) {}

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Toaster />
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
           
            <AppProvider inititalSessionToken={sessionToken?.value} user={user}>
            <Header user={user}/>
             {children}
             <SlideSession/>
            </AppProvider>
          
          </ThemeProvider>
        </body>
    </html>
  );
}
