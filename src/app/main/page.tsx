import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

import { Lalezar, Montserrat, Island_Moments } from "next/font/google"

const lalezar = Lalezar({ weight: "400", subsets: ["vietnamese"] })
const montserrat = Montserrat({
	weight: ["900", "400"],
	subsets: ["vietnamese"],
})
const islandMoment = Island_Moments({
	weight: ["400"],
	subsets: ["vietnamese"],
})

function Page() {
	return (
		<>
			<section className="section hero overflow-hidden">
				<header>
					<div className="section">
						<div className="container flex flex-row items-center justify-between gap-2">
							<div className="logo w-20 relative h-16">
								<Image
									src="./images/logo-kimdo.svg"
									className="w-full h-auto"
									alt="logo kim do"
									fill
								/>
							</div>
							{/* <nav className="flex-grow flex flex-row justify-between items-center">
								<ul className="flex flex-row gap-8 text-white w-full items-center justify-center">
									<li>
										<a href="/" className="cursor-pointer hover:text-white/80">
											Home
										</a>
									</li>
									<li>
										<a href="/" className="cursor-pointer hover:text-white/80">
											Menu
										</a>
									</li>
									<li>
										<a href="/" className="cursor-pointer hover:text-white/80">
											About us
										</a>
									</li>
								</ul>
							</nav> */}
							<a
								href="tel:0964536819"
								className={cn(
									buttonVariants(),
									"text-gray-800 font-medium text-lg bg-yellow-300 hover:bg-yellow-400"
								)}
							>
								Hotline: 096.453.6819
							</a>
						</div>
					</div>
				</header>
				<div className="container pt-10">
					<div className="grid lg:grid-cols-[600px_1fr] gap-4 w-full">
						<div className="flex flex-col gap-2 items-center md:items-start justify-center flex-grow pb-10">
							<h3
								className={cn(
									"text-white text-6xl sm:text-8xl text-center md:text-left",
									islandMoment.className
								)}
							>
								Rau câu gia truyền
							</h3>
							<div className="pb-10 w-full relative">
								<Image
									src="/images/brand-text-kimdo.svg"
									alt="brand kim do"
									className="w-full h-full max-w-200"
									width={450}
									height={100}
								/>
							</div>
							<h1
								className={cn(
									lalezar.className,
									"hero-heading text-white text-6xl text-center md:text-left"
								)}
							>
								Tưng bừng khai trương
							</h1>
							<div className="max-w-[500px] w-full h-60 relative">
								<Image
									src="/images/discount-20.svg"
									alt="brand kim do"
									className="w-full h-full"
									fill
								/>
							</div>
							<h4
								className={cn(
									lalezar.className,
									"hero-heading text-white text-4xl text-center md:text-left"
								)}
							>
								Áp dụng từ <span className="inline-block"> 08/03 - 18/03</span>
							</h4>
						</div>
						<div className="w-full relative h-[700px] md:h-96">
							<Image
								src="/images/hero-image.png"
								alt="kim do rau cau"
								className="-ml-96 md:-ml-36 max-w-none -mt-40 absolute top-0 left-0"
								width={1200}
								height={500}
								objectFit="contain"
							/>
						</div>
					</div>
				</div>
			</section>
			<main>
				<section className="section bg-[#566332]">
					<div className="container">
						<h1 className="menu-heading pb-10 text-center text-6xl text-white font-black pt-10">
							MENU
						</h1>
						<div className="w-full">
							<Image
								src="/images/menu-1.webp"
								alt="rau cau kim do menu"
								className="w-full"
								width={1000}
								height={2000}
								objectFit="cover"
							/>
						</div>
						<div className="pt-20">
							<Image
								src="/images/thank-you.svg"
								alt="rau cau kim do menu"
								className="w-full"
								objectFit="cover"
								width={1000}
								height={500}
							/>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default Page
