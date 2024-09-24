"use client";

import { cn } from "@/lib/utils";
import AnimatedCursor from "react-animated-cursor";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";

export default function ProjectLayout({ children }) {
	const { theme } = useTheme();
	return (
		<main
			className={cn(
				"h-full bg-background antialiased mx-auto p-12 sm:pt-24 px-6 "
			)}
		>
			{children}
			<Particles
				className="absolute inset-0 -z-10"
				quantity={100}
				ease={80}
				color={theme === "dark" ? "#127c12" : "#ffffff"}
				refresh
			/>
		</main>
	);
}
