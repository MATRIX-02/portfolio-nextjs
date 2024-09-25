"use client";

import { cn } from "@/lib/utils";
import AnimatedCursor from "react-animated-cursor";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";

export default function ResumeLayout({ children }) {
	const { theme } = useTheme();
	return (
		<main className={cn("h-full antialiased mx-auto  px-6 ")}>
			{children}
			<Particles
				className="fixed inset-0 -z-10"
				quantity={100}
				ease={80}
				color={theme === "dark" ? "#127c12" : "#ffffff"}
				refresh
			/>
		</main>
	);
}
