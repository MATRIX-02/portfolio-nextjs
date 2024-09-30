"use client";

import React from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import ProfileSection from "@/components/MainPage/ProfileSection";
import AboutSection from "@/components/MainPage/AboutSection";
import WorksSection from "@/components/MainPage/WorksSection";

export default function Home() {
	const { theme } = useTheme();

	return (
		<main className="container relative flex flex-col items-center justify-between h-full px-5 md:px-0">
			<Particles
				className="fixed inset-0 -z-10"
				quantity={100}
				ease={80}
				color={theme === "dark" ? "#A3E635" : "#ffffff"}
				refresh
			/>
			<img
				src="/logo-transparent.png"
				alt="Mayank's - Full Stack Developer"
				className="absolute inset-0 left-0 z-10 object-cover w-10 sm:-top-20"
			/>
			<div className="container relative flex flex-col h-full gap-5 px-0">
				<div className="relative z-20 flex flex-col w-full h-full lg:flex-row lg:-mt-24">
					<ProfileSection />
					<AboutSection />
					<WorksSection />
				</div>
			</div>
		</main>
	);
}
