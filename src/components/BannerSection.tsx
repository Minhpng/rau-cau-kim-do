import { cn } from "@/lib/utils"
import Image from "next/image"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

import { Autoplay, Pagination } from "swiper/modules"

const bannerList = [
	{ name: "rau cau kim do freeship", imageUrl: "/images/banner-freeship.png" },
	{
		name: "rau cau kim do mua 2 tang 1",
		imageUrl: "/images/banner-gio-vang.png",
	},
]

function BannerSection({}) {
	return (
		// bg-gradient-to-tr from-[#882100] to-[#FF8B02]
		<section className="py-2">
			<div className="w-full max-w-[900px] mx-auto">
				<div className="flex gap-3 items-center justify-center">
					<Swiper
						spaceBetween={10}
						slidesPerView={2}
						breakpoints={{
							768: { slidesPerView: 2 },
							0: { slidesPerView: 1 },
						}}
						pagination={{
							clickable: true,
						}}
						autoplay={{ delay: 5000 }}
						onSlideChange={() => console.log("slide change")}
						onSwiper={(swiper) => console.log(swiper)}
						modules={[Autoplay, Pagination]}
					>
						{bannerList.map((item, id) => (
							<SwiperSlide key={id}>
								<div
									className={cn(
										"overflow-hidden w-full max-w-[400px] md:max-w-[700px] rounded-2xl mx-auto"
									)}
								>
									<Image
										src={item.imageUrl}
										alt={item.name}
										width={800}
										height={300}
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default BannerSection
