import React from "react";
import Marquee from "../magicui/marquee";

// Icons
import {
	FaReact,
	FaGithub,
	FaFigma,
	FaHtml5,
	FaCss3Alt,
	FaPython,
} from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { DiJsBadge } from "react-icons/di";
import { FaNode } from "react-icons/fa6";
import {
	SiRedux,
	SiTypescript,
	SiExpress,
	SiMongodb,
	SiAdobexd,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandCpp } from "react-icons/tb";
import WordRotate from "../magicui/word-rotate";

const icons = [
	{
		id: 1,
		svg: <FaReact size={24} />,
	},
	{
		id: 2,
		svg: <RiNextjsLine size={24} />,
	},
	{
		id: 3,
		svg: <DiJsBadge size={24} />,
	},
	{
		id: 4,
		svg: <FaGithub size={24} />,
	},
	{
		id: 5,
		svg: <FaNode size={24} />,
	},
	{
		id: 6,
		svg: <SiRedux size={24} />,
	},
	{
		id: 7,
		svg: <SiTypescript size={24} />,
	},
	{
		id: 8,
		svg: <RiTailwindCssFill size={24} />,
	},
	{
		id: 9,
		svg: <SiExpress size={24} />,
	},
	{
		id: 10,
		svg: <SiMongodb size={24} />,
	},
	{
		id: 11,
		svg: <FaFigma size={24} />,
	},
	{
		id: 12,
		svg: <FaHtml5 size={24} />,
	},
	{
		id: 13,
		svg: <FaCss3Alt size={24} />,
	},
	{
		id: 14,
		svg: <SiAdobexd size={24} />,
	},
	{
		id: 15,
		svg: <TbBrandCpp size={24} />,
	},
	{
		id: 16,
		svg: <FaPython size={24} />,
	},
];

const firstRow = icons.slice(0, icons.length / 2);
const secondRow = icons.slice(icons.length / 2);

const IconCard = ({ svg }) => {
	return (
		<div className="relative flex items-center justify-center w-16 h-16">
			{svg}
		</div>
	);
};

export default function AboutSection() {
	return (
		<div className="flex flex-col h-full pt-12 md:px-6 w-full lg:w-[35%] relative mb-5 lg:border-l-[0.01rem] lg:border-r-[0.01rem] dark:border-neutral-200 border-neutral-700">
			<div class="relative flex flex-col gap-2 ">
				<div class="relative flex items-center gap-3 mb-3 font-semibold uppercase">
					<div class="relative flex">
						<svg
							stroke="currentColor"
							fill="none"
							stroke-width="0"
							viewBox="0 0 15 15"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M7.71144 0.796902C7.57741 0.734357 7.42257 0.734357 7.28855 0.796902L1.28855 3.5969C1.11251 3.67905 0.999993 3.85573 0.999993 4.04999V10.95C0.999993 11.1443 1.11251 11.3209 1.28855 11.4031L7.28855 14.2031C7.42257 14.2656 7.57741 14.2656 7.71144 14.2031L13.7114 11.4031C13.8875 11.3209 14 11.1443 14 10.95V4.04999C14 3.85573 13.8875 3.67905 13.7114 3.5969L7.71144 0.796902ZM7.49999 3.15674L5.98039 2.51091L7.49999 1.80176L9.01959 2.51091L7.49999 3.15674ZM7.69556 4.16018L10.2382 3.07958L12.2719 4.02865L7.49999 6.05671L2.72808 4.02865L4.76181 3.07958L7.30442 4.16018C7.42939 4.2133 7.57059 4.2133 7.69556 4.16018ZM7.99999 6.93078L13 4.80578V7.92966L11.0821 8.8119C10.7273 8.97509 10.5 9.32988 10.5 9.72039V11.7982L7.99999 12.9649V6.93078ZM11.5 11.3316L13 10.6316V9.03039L11.5 9.72039V11.3316ZM6.99999 6.93078V12.9649L4.50231 11.7993V9.72036C4.50231 9.32985 4.27499 8.97506 3.92022 8.81187L1.99999 7.92856V4.80578L6.99999 6.93078ZM1.99999 10.6316L3.50231 11.3326L3.50231 9.72036L1.99999 9.02929V10.6316Z"
								fill="currentColor"
							></path>
						</svg>
						<svg
							stroke="currentColor"
							fill="none"
							stroke-width="0"
							viewBox="0 0 15 15"
							class="absolute duration-1000 animate-ping text-lime-400"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M7.71144 0.796902C7.57741 0.734357 7.42257 0.734357 7.28855 0.796902L1.28855 3.5969C1.11251 3.67905 0.999993 3.85573 0.999993 4.04999V10.95C0.999993 11.1443 1.11251 11.3209 1.28855 11.4031L7.28855 14.2031C7.42257 14.2656 7.57741 14.2656 7.71144 14.2031L13.7114 11.4031C13.8875 11.3209 14 11.1443 14 10.95V4.04999C14 3.85573 13.8875 3.67905 13.7114 3.5969L7.71144 0.796902ZM7.49999 3.15674L5.98039 2.51091L7.49999 1.80176L9.01959 2.51091L7.49999 3.15674ZM7.69556 4.16018L10.2382 3.07958L12.2719 4.02865L7.49999 6.05671L2.72808 4.02865L4.76181 3.07958L7.30442 4.16018C7.42939 4.2133 7.57059 4.2133 7.69556 4.16018ZM7.99999 6.93078L13 4.80578V7.92966L11.0821 8.8119C10.7273 8.97509 10.5 9.32988 10.5 9.72039V11.7982L7.99999 12.9649V6.93078ZM11.5 11.3316L13 10.6316V9.03039L11.5 9.72039V11.3316ZM6.99999 6.93078V12.9649L4.50231 11.7993V9.72036C4.50231 9.32985 4.27499 8.97506 3.92022 8.81187L1.99999 7.92856V4.80578L6.99999 6.93078ZM1.99999 10.6316L3.50231 11.3326L3.50231 9.72036L1.99999 9.02929V10.6316Z"
								fill="currentColor"
							></path>
						</svg>
					</div>
					About Me
				</div>
				<p class="relative flex w-full mt-6 mb-6 text-lg md:mb-0 lg:mt-1">
					Since the beginning, I've been deeply passionate about computer
					science, starting with Java back in 2017. This early fascination led
					me to teach myself how to code, and over the years, I've honed my
					skills across various programming languages and technologies.
					<br />
					<br />
					I've had the privilege of working in a web development company, and
					now, I'm eager to build innovative projects, automate tasks, and push
					the boundaries in Web Development, Open Source, and Competitive
					Programming.
				</p>
			</div>

			<div class="flex flex-wrap gap-3 pb-8 mt-5 mb-24 text-xs border-b lg:mb-8 text-neutral-200">
				<span class="px-3 duration-300 rounded-full cursor-pointer bg-neutral-900 hover:bg-neutral-800">
					22 yo.
				</span>
				<span class="px-3 duration-300 rounded-full cursor-pointer bg-neutral-900 hover:bg-neutral-800">
					Web
				</span>
				<span class="px-3 duration-300 rounded-full cursor-pointer bg-neutral-900 hover:bg-neutral-800">
					Front-end
				</span>
				<span class="px-3 duration-300 rounded-full cursor-pointer bg-neutral-900 hover:bg-neutral-800">
					Back-end
				</span>
			</div>

			<div className="relative flex flex-col w-full pb-12">
				<div class="relative flex items-center gap-3 mb-3 font-semibold uppercase">
					<div class="relative flex">
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 640 512"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
						</svg>
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 640 512"
							class="absolute duration-1000 animate-ping text-lime-400"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
						</svg>
					</div>
					My daily tech
				</div>
				<div className="relative flex flex-col gap-2">
					<Marquee
						pauseOnHover
						className="[--duration:30s] scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
					>
						{firstRow.map((icon) => (
							<IconCard key={icon.id} svg={icon.svg} />
						))}
					</Marquee>
					<Marquee
						reverse
						pauseOnHover
						className="[--duration:30s] scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
					>
						{secondRow.map((icon) => (
							<IconCard key={icon.id} svg={icon.svg} />
						))}
					</Marquee>
				</div>
			</div>

			<WordRotate
				className="p-1 text-2xl font-bold text-white dark:text-black"
				duration={3500}
				words={[
					"Building the Web, One Pixel at a Time.",
					"Code That Connects People and Possibilities.",
					"Solutions for web design, development, and automation.",
				]}
			/>
		</div>
	);
}
