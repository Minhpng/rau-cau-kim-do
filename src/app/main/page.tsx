import { cn } from "@/lib/utils"
import Image from "next/image"
import localFont from "next/font/local"

import { Pacifico } from "next/font/google"
import HeroSection from "./HeroSection"
import Markdown from "react-markdown"
import { ABOUT_KIMDO } from "./about-kimdo"

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
			<HeroSection />
			<main>
				<section className="section bg-[#566332] overflow-clip">
					<div id="menu" className="container p-0">
						<h1 className="menu-heading pb-10 text-center text-6xl text-white font-black pt-10">
							MENU
						</h1>
						<div className="w-full mb-20">
							<Image
								src="/images/menu-1.png"
								alt="rau cau kim do menu"
								className="w-full"
								width={1000}
								height={2000}
							/>
						</div>
						<div className="relative isolate">
							<div className="shape w-[230px] top-[70%] -right-[150px]">
								<Image
									src="/images/shape-1.svg"
									alt="rau cau kimdo"
									width={1000}
									height={2000}
								/>
							</div>
							<div className="shape w-[300px] top-0 -right-[100px]">
								<Image
									src="/images/shape-2.svg"
									alt="rau cau kimdo"
									width={1000}
									height={2000}
								/>
							</div>
							<h1 className="text-5xl md:text-6xl text-white font-medium text-center mb-20">
								Sự ra đời của{" "}
								<span className="relative w-[170px] h-[60px] inline-block">
									<span
										className={cn(
											hlNheNhang.className,
											"text-[#E73961] font-bold text-6xl voucher absolute left-0 right-0 top-[18px]"
										)}
									>
										Kim Ðö
									</span>
									<span
										className={cn(
											hlNheNhang.className,
											"text-[#E73961] font-bold text-6xl voucher-pink absolute left-0 right-0 top-[18px]"
										)}
									>
										Kim Ðö
									</span>
								</span>
							</h1>
							<div className="prose prose-xl prose-p:text-white mx-auto p-3 lg:p-0">
								<Markdown>{ABOUT_KIMDO}</Markdown>
							</div>
						</div>
						<div className="pt-20 text-xl sm:text-2xl max-w-[900px] mx-auto text-center font-medium text-white px-2 relative isolate">
							<div className="shape w-[300px] -bottom-[100px] -left-[150px]">
								<Image
									src="/images/rau-cau-mask.png"
									alt="rau cau kimdo"
									width={1618}
									height={1524}
								/>
							</div>
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
