"use client";

import React from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/magicui/particles";

export default function Project() {
	const { theme } = useTheme();

	return (
		<main className="container relative flex flex-col items-center justify-between h-auto px-0">
			<div className="relative flex flex-col items-center w-full h-full mx-auto">
				<div className="group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40">
					<div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#000000]/50 via-[#ffffff]/50 to-[#000000]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"></div>
					<span className="inline animate-gradient bg-gradient-to-r text-left dark:from-[#ffffff] dark:via-[#8a8a8a] dark:to-[#ffffff] from-[#9c9c9c] via-[#000000] to-[#9c9c9c] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent text-2xl font-bold px-8">
						Works
					</span>
				</div>
			</div>
		</main>
	);
}
