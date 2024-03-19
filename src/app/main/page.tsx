import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import localFont from "next/font/local"

import { Lalezar, Montserrat, Island_Moments, Pacifico } from "next/font/google"
import { ArrowRight, MapPin, Phone } from "lucide-react"

const islandMoment = Island_Moments({
	weight: ["400"],
	subsets: ["vietnamese"],
})
const pacifico = Pacifico({
	weight: ["400"],
	subsets: ["vietnamese"],
})

const hlNheNhang = localFont({
	src: "../HL_Nhenhang.ttf",
	display: "swap",
})

function Page() {
	return (
		<>
			<section className="section hero overflow-hidden">
				<header className="relative z-50">
					<div className="section">
						<div className="container flex flex-col sm:flex-row items-center justify-between gap-2">
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
							<div className="flex flex-col gap-2 items-center md:items-start justify-start">
								<a
									href="tel:0964536819"
									className={cn(
										buttonVariants({ size: "lg" }),
										"text-gray-800 font-medium text-xl bg-yellow-300 hover:bg-yellow-400 px-2"
									)}
								>
									<Phone strokeWidth={2.5} size={20} className="mr-2" />
									Hotline: 096.453.6819
								</a>
								<a
									href="https://maps.app.goo.gl/T48XhzmcWpThHoV86"
									className="text-white text-xl sm:text-2xl font-medium flex gap-2 justify-start items-start hover:opacity-90"
									target="_blank"
								>
									<Image
										src="/images/flat-color-icons_home.svg"
										alt=""
										objectFit="contain"
										width={30}
										height={30}
										className="relative -top-[3px]"
									/>
									<div className="flex flex-col items-center justify-start md:items-start">
										<span>1446 Phạm Thế Hiển, P5, Q8</span>
										<span className="text-base text-white/65">
											Xem đường đi
											<ArrowRight size={10} className="inline-block ml-1" />
										</span>
									</div>
								</a>
							</div>
						</div>
					</div>
				</header>
				<div className="container pt-10">
					<div className="grid lg:grid-cols-[600px_1fr] gap-4 w-full">
						<div className="flex flex-col gap-2 items-center md:items-start justify-center flex-grow pb-10 relative">
							<h3
								className={cn(
									"sub-brand text-white text-6xl sm:text-8xl text-center md:text-left",
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
							<p className="text-3xl text-white font-bold mb-8">
								Nhấc điện thoại, Gọi món ngay!!!
							</p>
							<a
								href="#menu"
								className={cn(
									buttonVariants({
										size: "lg",
										className:
											"bg-yellow-300 hover:bg-yellow-400 text-gray-800 text-2xl px-8 py-8 rounded-2xl",
									}),
									"cursor-pointer"
								)}
							>
								Xem menu
							</a>
						</div>
						<div className="w-full relative h-[300px] sm:h-[700px] md:h-[800px] lg:h-[600px]">
							<Image
								src="/images/hero-image-3.png"
								alt="kim do rau cau"
								className="ml-0 lg:ml-24 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl"
								width={1200}
								height={500}
							/>
						</div>
					</div>
				</div>
			</section>
			<main>
				<section className="section bg-[#566332]">
					<div id="menu" className="container p-0">
						<h1 className="menu-heading pb-10 text-center text-6xl text-white font-black pt-10">
							MENU
						</h1>
						<div className="w-full">
							<Image
								src="/images/menu-1.png"
								alt="rau cau kim do menu"
								className="w-full"
								width={1000}
								height={2000}
							/>
						</div>
						<div className="pt-20 text-xl sm:text-2xl max-w-[900px] mx-auto text-center font-medium text-white px-2">
							<p>
								Đừng quên giữ lại{" "}
								<span className="relative inline-block w-[150px] h-[32px]">
									<span
										className={cn(
											hlNheNhang.className,
											"text-[#E73961] font-bold text-2xl voucher absolute left-0 right-0 top-[13px]"
										)}
									>
										K-VOUCHER
									</span>
									<span
										className={cn(
											hlNheNhang.className,
											"text-[#E73961] font-bold text-2xl voucher-pink absolute left-0 right-0 top-[13px]"
										)}
									>
										K-VOUCHER
									</span>
								</span>
								, để được giảm giá KHỦNG lần sau nhé!!!
							</p>
							<p>
								(Mỗi hóa đơn khi thanh toán sẽ nhận được 1{" "}
								<span className="relative inline-block w-[150px] h-[32px]">
									<span
										className={cn(
											hlNheNhang.className,
											"text-[#E73961] font-bold text-2xl voucher absolute left-0 right-0 top-[13px] inline-block"
										)}
									>
										K-VOUCHER
									</span>
									<span
										className={cn(
											hlNheNhang.className,
											"text-[#E73961] font-bold text-2xl voucher-pink absolute left-0 right-0 top-[13px] inline-block"
										)}
									>
										K-VOUCHER
									</span>
								</span>
								)
							</p>
							<p className={cn(pacifico.className, "text-xl mt-10")}>
								***Cảm ơn quý khách đã lựa chọn Kim Đô***
							</p>
							<div className="flex items-center justify-center mt-4">
								<Image
									src={"/images/thank-you.png"}
									alt="rau cau kim do cam on"
									width={80}
									height={120}
								/>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}

export default Page
