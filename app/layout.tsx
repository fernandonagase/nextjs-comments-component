export const metadata = {
  title: 'Frontend Mentor | Interactive comments section',
  description: 'Interactive comments section built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
