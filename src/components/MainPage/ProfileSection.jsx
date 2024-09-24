"use client";

import React, { useState, useEffect } from "react";
import { Linkedin, Github } from "lucide-react";
import { RainbowButton } from "../magicui/rainbow-button";
import { Button } from "../ui/button";

export default function ProfileSection() {
	const [currentTime, setCurrentTime] = useState("");
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
		const updateTime = () => {
			setCurrentTime(new Date().toLocaleTimeString());
		};
		updateTime();
		const timer = setInterval(updateTime, 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="flex flex-col h-full items-center justify-center lg:pt-12 md:px-6 w-full lg:w-[35%] gap-6 lg:pb-32 relative ">
			<div className="flex flex-col w-full gap-2">
				<div className="relative flex flex-col mt-12 md:mt-12">
					<div className="flex flex-col items-center gap-2 mb-5 md:items-start md:mb-0">
						<div className="relative flex flex-col mb-5 overflow-hidden duration-700 border-2 border-white rounded-full group/pic w-fit dark:hover:border-lime-400">
							<img
								alt="ck"
								loading="lazy"
								width="200"
								height="200"
								decoding="async"
								data-nimg="1"
								className="absolute object-cover duration-500 rounded-full opacity-0 group-hover/pic:opacity-100"
								src="/static/Profile_picture.jpg"
								style={{ color: "transparent" }}
							/>
							<img
								alt="ck"
								loading="lazy"
								width="200"
								height="200"
								decoding="async"
								data-nimg="1"
								className="object-cover duration-500 bg-white rounded-full group-hover/pic:opacity-0"
								src="/static/Profile_picture.jpg"
								style={{ color: "transparent" }}
							/>
						</div>
						<h4 className="relative flex flex-row gap-2 mb-0 text-2xl font-bold md:mb-6 md:gap-0 md:flex-col md:text-3xl">
							<span>Hello!</span>I'm Mayank
						</h4>
					</div>
					<p className="block max-w-xl text-lg text-center md:text-left">
						<span className="dark:text-black text-lime-400">Web Developer</span>{" "}
						with over 5+ years of experience in crafting dynamic and responsive
						websites.
					</p>
				</div>

				<div className="relative flex justify-center w-full gap-3 mt-5 md:justify-start ">
					<div className="flex gap-3">
						<a
							href="http://www.linkedin.com/in/mayank--dev"
							target="_blank"
							rel="noreferrer"
							aria-label="Visit my LinkedIn profile"
						>
							<Button size="icon">
								<Linkedin size={24} />
							</Button>
						</a>
						<a
							href="https://github.com/MATRIX-02"
							target="_blank"
							rel="noreferrer"
							aria-label="Visit my GitHub profile"
						>
							<Button size="icon">
								<Github size={24} />
							</Button>
						</a>
					</div>
					<a
						className="flex items-center"
						href="mailto:mayanksingh122001@gmail.com"
					>
						<RainbowButton>Let's Talk</RainbowButton>
					</a>
				</div>
			</div>

			<div className="relative flex flex-col w-full h-full">
				<div className="p-2 mt-12 lg:p-0">
					<h2 className="mb-4 text-sm font-semibold">Current Time</h2>
					{isClient && (
						<p className="mb-2 text-4xl font-semibold">{currentTime}</p>
					)}
				</div>
			</div>
		</div>
	);
}
