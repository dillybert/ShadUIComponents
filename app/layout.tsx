import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { Toaster as ShadcnToaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { ThemeButton } from "@/components/theme-button";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="select-none">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <header className="border-grid px-4 py-3 sticky top-0 z-50 flex items-center justify-between w-full border-b bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <h3 className="text-2xl font-semibold tracking-tight">Example app</h3>
            <ThemeButton />
          </header>
          <main className="p-5">{children}</main>
          <SonnerToaster />
          <ShadcnToaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
