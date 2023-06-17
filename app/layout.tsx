import 'normalize.css/normalize.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

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
        <html lang="en" className={rubik.className}>
            <body>{children}</body>
        </html>
    )
}
