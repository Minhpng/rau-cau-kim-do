"use client"
import { useEffect, useState } from "react"
import { Dialog, DialogClose, DialogContent } from "./ui/dialog"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

const popupSlides = {
	name: "Freeship 0 dong",
	imageUrl: "/images/popup-freeship.png",
}

function WelcomePopup() {
	const [isOpen, setIsOpen] = useState(true)
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	if (!isClient) return null
	return (
		<Dialog
			open={isOpen}
			onOpenChange={(open) => setIsOpen(open)}
			defaultOpen
			modal
		>
			<DialogContent
				className="p-0 bg-transparent border-0 max-w-[700px]"
				onOpenAutoFocus={(e) => e.preventDefault()}
			>
				<div className="w-full max-w-[700px] p-3">
					<Image
						className="rounded-3xl overflow-hidden"
						src={popupSlides.imageUrl}
						alt={popupSlides.name}
						width={1080}
						height={1080}
					/>
				</div>
				<DialogClose className="text-xl">
					<a
						href="#menu"
						className={cn(
							buttonVariants({
								size: "lg",
								className:
									"bg-yellow-300 hover:bg-yellow-400 text-gray-800 text-xl font-bold h-14",
							})
						)}
					>
						Xem MENU - Đặt món ngay
					</a>
				</DialogClose>
			</DialogContent>
		</Dialog>
	)
}

export default WelcomePopup
