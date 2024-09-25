"use client";

import React, { useMemo } from "react";
import { ExternalLink } from "lucide-react";
import ShineBorder from "./magicui/shine-border";
import ShinyButton from "@/components/magicui/shiny-button";
import ButtonHover1 from "./ui/ButtonHover1";
import ButtonHover2 from "./ui/ButtonHover2";

const ProjectCard = ({ project }) => {
	const {
		name,
		category,
		image,
		isNew,
		tags,
		description,
		liveLink,
		codeLink,
	} = project;

	const randomFactor = useMemo(() => 0.5 + Math.random(), []);

	return (
		<div className="w-full">
			<ShineBorder
				color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
				randomFactor={randomFactor}
			>
				<div className="relative w-[99.66%] mt-[0.08rem] overflow-hidden rounded-[0.44rem] shadow-lg group/card">
					<div className="overflow-hidden ">
						<div className="relative group/tooltip">
							<a href={liveLink} target="_blank" rel="noopener noreferrer">
								<img
									alt={`${name} Website`}
									className="object-fill h-[18.3rem]"
									src={image}
								/>
							</a>
							<span
								className="absolute px-3 py-1 text-xs text-white transition-opacity duration-300 border rounded-md opacity-0 pointer-events-none group-hover/tooltip:opacity-100 whitespace-nowrap"
								style={{ transform: "translate(30%, -130%)" }}
							>
								Visit Website
								<ExternalLink
									className="inline-block ml-1 text-lime-400"
									size={16}
								/>
							</span>
						</div>
					</div>
					<div className="relative flex flex-col justify-between gap-2 p-4 min-h-48">
						<div className="flex justify-between w-full gap-2">
							<h3 className="relative text-xl font-semibold">
								{name}
								{isNew && <ShinyButton>New</ShinyButton>}
							</h3>
							<div className="flex flex-wrap items-center gap-2">
								{tags.map((tag, index) => (
									<span
										key={index}
										className="px-2 py-1 text-xs font-semibold text-gray-300 bg-black border rounded-full dark:text-gray-700 dark:bg-gray-200"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
						<div className="flex flex-col justify-between flex-grow">
							<p className="mt-2 text-gray-300 duration-300 dark:text-gray-600">
								{description}
							</p>
							<div className="flex gap-5">
								<a href={liveLink} target="_blank" rel="noopener noreferrer">
									<ButtonHover1
										text="Live Demo"
										iconColor="white"
										darkIconColor="black"
									/>
								</a>
								{codeLink && (
									<ButtonHover2
										text="View on Github"
										textColor="#ffedd3"
										accentColor="#ffc506"
										href={codeLink}
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</ShineBorder>
		</div>
	);
};

export default ProjectCard;
