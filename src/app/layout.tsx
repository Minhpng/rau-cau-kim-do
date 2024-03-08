import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Head from "next/head"

const montserrat = Montserrat({
	weight: ["900", "400", "500"],
	subsets: ["vietnamese"],
})

export const metadata: Metadata = {
	title: "Rau câu gia truyền Kim Đô",
	description: "Rau câu gia truyền Kim Đô",
	icons: {
		icon: [
			{
				rel: "icon",
				type: "image/x-icon",
				url: "/images/favicon.ico",
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<Head>
				<link rel="icon" href="images/favicon.ico" sizes="any" />
			</Head>
			<body className={montserrat.className}>{children}</body>
		</html>
	)
}
