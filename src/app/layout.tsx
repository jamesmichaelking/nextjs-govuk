import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GOVUK",
  description: "Proof of concept app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="govuk-template">
      <body className="govuk-template__body">{children}</body>
    </html>
  );
}
