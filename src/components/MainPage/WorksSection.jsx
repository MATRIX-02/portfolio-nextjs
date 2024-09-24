import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "../magicui/marquee";
import Link from "next/link";

const images = [
	{
		id: 1,
		path: "/static/Projects/Site_1.gif",
		link: "https://mayank--dev.me/GameRadar-Hub/",
	},
	{
		id: 2,
		path: "/static/Projects/Site_2.gif",
		link: "https://mayank--dev.me/JustChill/",
	},
	{
		id: 3,
		path: "/static/Projects/Site_3.gif",
		link: "https://disneyplus-hotstar-clone-2fdee.web.app/",
	},
	{
		id: 4,
		path: "/static/Projects/Site_4.gif",
		link: "https://mayank--dev.me/NomNomFoods/",
	},
	{
		id: 5,
		path: "/static/Projects/Site_5.png",
		link: "https://mayank--dev.me/ScriptQuiz/",
	},
];

const firstRow = images.slice(0, images.length / 2);
const secondRow = images.slice(images.length / 2);

const ProjectMarqueeCard = ({ path, link }) => {
	return (
		<Link href={link} target="_blank" rel="noreferrer">
			<img
				className="relative border drop-shadow-lg rounded-2xl flex-shrink-0  h-[8rem] w-[15rem] overflow-hidden bg-center bg-cover bg-no-repeat"
				width="32"
				height="32"
				alt=""
				src={path}
			/>
		</Link>
	);
};

export default function WorksSection() {
	return (
		<div className="flex flex-col h-full justify-between pt-12 md:px-6 lg:w-[35%]  relative border-b-none md:border-none">
			<div className="flex flex-col w-full h-full mt-0 md:mt-12 xl:mt-0">
				<div className="relative flex items-center gap-3 mb-3 font-semibold uppercase">
					<div className="relative flex">
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 640 512"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
						</svg>
						<svg
							stroke="currentColor"
							fill="currentColor"
							stroke-width="0"
							viewBox="0 0 640 512"
							className="absolute duration-1000 animate-ping text-lime-400"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
						</svg>
					</div>
					My Projects
				</div>
			</div>
			<Marquee
				reverse
				pauseOnHover
				className="[--duration:30s] scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
			>
				{firstRow.map((image) => (
					<ProjectMarqueeCard
						key={image.id}
						path={image.path}
						link={image.link}
					/>
				))}
			</Marquee>
			<Marquee
				pauseOnHover
				className="[--duration:30s] scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
			>
				{secondRow.map((image) => (
					<ProjectMarqueeCard
						key={image.id}
						path={image.path}
						link={image.link}
					/>
				))}
			</Marquee>
			<span className="relative flex flex-col items-end w-full text-sm duration-300 hover:text-lime-400">
				<span className="overflow-hidden group/cta">
					<a
						className="flex items-center gap-3 mt-2 group/exp"
						href="/projects"
					>
						Explore more{" "}
						<svg
							stroke="currentColor"
							fill="none"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke-linecap="round"
							stroke-linejoin="round"
							className="duration-300 -translate-x-[5px] translate-y-0 group-hover/exp:-translate-x-[2px] group-hover/exp:-translate-y-[2px]"
							height="1em"
							width="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<line x1="7" y1="17" x2="17" y2="7"></line>
							<polyline points="7 7 17 7 17 17"></polyline>
						</svg>
					</a>
					<span className="h-[1px] bg-lime-300 w-full block relative -translate-x-[100%] group-hover/cta:translate-x-[-20%] duration-300"></span>
				</span>
			</span>

			<div className="relative pt-12 bottom-0 right-0 items-center justify-center block w-full h-[40vh]  mt-12 md:mt-0 -mb-44">
				<div id="functions-hero" className="absolute inset-0 top-10">
					<div className="opacity-1 animate-fade-in absolute z-20 flex-1 flex items-center justify-center h-auto w-[70%] left-[20%] top-[0%] sm:w-[55%] sm:left-[23%] sm:top-[0%] md:left-[25%] md:w-[55%] md:top-[5%] lg:left-[5%] lg:w-[100%] lg:top-[-10%] xl:left-[8%] xl:w-[90%] xl:top-[-5%] 2xl:left-[5%] 2xl:w-[100%] 2xl:top-[-5%]">
						<a
							href="mailto:mayanksingh122001@gmail.com"
							className="flex items-center w-full gap-1 px-3 py-2 border border-lime-600 group hover:border-strong sm:gap-2 bg-alternative rounded-xl group/email"
						>
							<div className="relative font-mono text-sm text-foreground-muted text-lime-400">
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 512 512"
									className="text-white"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
								</svg>
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 512 512"
									className="absolute top-0 animate-pulse text-lime-400"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
								</svg>
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 512 512"
									className="absolute top-0 animate-ping text-lime-400"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"></path>
								</svg>
							</div>
							<div className="flex-1 font-mono text-xs text-left opacity-1 animate-fade-in text-foreground md:text-sm">
								Open for Work: Full time / Remote
							</div>
							<div className="text-foreground group-hover/email:text-lime-300 rounded p-1.5 opacity-1 group-hover:opacity-100 transition-opacity">
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth="0"
									viewBox="0 0 512 512"
									className="w-3.5 h-3.5"
									height="1em"
									width="1em"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z"></path>
								</svg>
							</div>
						</a>
					</div>
					<svg
						id="svg1"
						xmlns="http://www.w3.org/2000/svg"
						width="100%"
						height="100%"
						fill="none"
						viewBox="0 0 155 284"
						className="absolute"
						style={{
							width: "15.244%",
							height: "41.24%",
							left: "38.8%",
							top: "31.2%",
						}}
					>
						<path
							stroke="url(#lg-svg1)"
							strokeWidth="1.396"
							d="M.797 283.216c14.605-22.693 64.498-78.738 87.739-104.396-22.406-17.823-47.852-46.354-57.983-58.555 36.536-29.153 96.735-65.699 122.267-80.327-6.727-8.041-21.226-27.282-26.518-39.053"
						></path>
						<defs>
							<linearGradient
								id="lg-svg1"
								x1="100%"
								x2="100%"
								y1="-20%"
								y2="130%"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0" stopColor="#FFFFFF" stopOpacity="0"></stop>
								<stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.6"></stop>
								<stop offset="1" stopColor="#FFFFFF" stopOpacity="0"></stop>
							</linearGradient>
						</defs>
					</svg>
					<svg
						id="svg2"
						xmlns="http://www.w3.org/2000/svg"
						width="100%"
						height="100%"
						fill="none"
						viewBox="0 0 272 235"
						className="absolute"
						style={{
							width: "27.458%",
							height: "34.045%",
							left: "50.8%",
							top: "31.4%",
						}}
					>
						<path
							stroke="url(#lg-svg2)"
							strokeWidth="1.396"
							d="M271.749 233.614C215.075 230.474 159.599 210.964 138.945 201.602C144.38 186.681 156.517 152.612 161.587 135.71C126.058 122.39 44.25 76.75 1.25 0.75"
						></path>
						<defs>
							<linearGradient
								id="lg-svg2"
								x1="100%"
								x2="100%"
								y1="-20%"
								y2="130%"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0" stopColor="#FFFFFF" stopOpacity="0"></stop>
								<stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.6"></stop>
								<stop offset="1" stopColor="#FFFFFF" stopOpacity="0"></stop>
							</linearGradient>
						</defs>
					</svg>
					<svg
						id="svg3"
						xmlns="http://www.w3.org/2000/svg"
						width="100%"
						height="100%"
						fill="none"
						viewBox="0 0 261 144"
						className="absolute"
						style={{
							width: "26.687%",
							height: "20.49%",
							left: "25.1%",
							top: "31.4%",
						}}
					>
						<path
							stroke="url(#lg-svg3)"
							strokeWidth="1.396"
							d="M260.5 1.5C157.75 30.75 67.75 89 1.13281 143.202"
						></path>
						<defs>
							<linearGradient
								id="lg-svg3"
								x1="100%"
								x2="100%"
								y1="-20%"
								y2="130%"
								gradientUnits="userSpaceOnUse"
							>
								<stop offset="0" stopColor="#FFFFFF" stopOpacity="0"></stop>
								<stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.6"></stop>
								<stop offset="1" stopColor="#FFFFFF" stopOpacity="0"></stop>
							</linearGradient>
						</defs>
					</svg>
					<div
						id="dot1"
						className="absolute origin-center w-[2.5%] h-[3.6%] flex items-center justify-center opacity-1 transition-opacity animate-fade-in delay-75"
						style={{ left: "50%", top: "29.9%" }}
					>
						<span className="absolute inset-0 w-full h-full bg-black rounded-full dark:bg-white bg-opacity-20"></span>
						<span className="absolute w-4/5 bg-black rounded-full h-4/5 dark:bg-white bg-opacity-90"></span>
					</div>
					<div className="absolute left-[51.15%] top-[10%] w-px h-[20%] overflow-hidden">
						<span className="absolute inset-0 w-full h-full bg-gradient-to-t from-current to-transparent delay-1200 animate-slide-in"></span>
					</div>
					<img
						alt="globe wireframe"
						fetchPriority="high"
						width="400"
						height="400"
						decoding="async"
						className="block w-full h-full"
						src="/static/globe-light.svg"
						style={{ color: "transparent" }}
					/>
					<img
						alt="globe wireframe"
						fetchPriority="high"
						width="400"
						height="400"
						decoding="async"
						className="hidden w-full h-full"
						src="/static/globe.svg"
						style={{ color: "transparent" }}
					/>
				</div>
			</div>
			<div class="relative flex flex-col justify-end gap-4 pt-12">
				<p class="text-lg">
					Your business needs a frontend developer to create fast, responsive,
					and user-friendly web applications. With React.js/Next.js expertise, I
					deliver optimized, scalable sites that engage users and drive growth.
					Let’s work together to achieve your goals.
				</p>
			</div>
		</div>
	);
}
