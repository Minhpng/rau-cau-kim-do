import { HOTLINE, HOTLINE_FORMAT, ZALO_LINK } from "@/constants/constants"
import Image from "next/image"
import React from "react"

function HotlineFloatIcon() {
	return (
		<div className="fixed bottom-6 right-6 flex flex-col items-end gap-2 z-50">
			<a href={ZALO_LINK} target="_blank">
				<div className="call-hotline animation-rotate z-50 inline-block w-[40px] md:w-[65px]">
					<Image
						title="Call Hotline"
						src="/images/zalo-icon.svg"
						alt="phone-icon"
						width="65"
						height="65"
						priority
					/>
				</div>
			</a>
			<a href={`tel:${HOTLINE}`}>
				<div className="flex items-center justify-start z-50">
					<div className="text-lg font-semibold px-4 py-2 rounded-l-full bg-[red] text-white -mr-2 md:inline hidden">
						{HOTLINE_FORMAT}
					</div>
					<div className="call-hotline animation-rotate z-50 inline-block w-[40px] md:w-[65px]">
						<Image
							title="Call Hotline"
							src="/images/hotline-icon.svg"
							alt="phone-icon"
							width="65"
							height="65"
							priority
						/>
					</div>
				</div>
			</a>
		</div>
	)
}

export default HotlineFloatIcon
