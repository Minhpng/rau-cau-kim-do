import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
	weight: ["900", "400", "500"],
	subsets: ["vietnamese"],
})

export const metadata: Metadata = {
	title: "Rau câu gia truyền Kim Đô",
	description: "Rau câu gia truyền Kim Đô",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={montserrat.className}>{children}</body>
		</html>
	)
}
