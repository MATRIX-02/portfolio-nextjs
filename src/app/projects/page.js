"use client";

import React, { useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { project } from "@/data/projects";
import ProjectCard from "@/components/project-card";
import BlurFade from "@/components/magicui/blur-fade";

const BLUR_FADE_DELAY = 0.04;

export default function Project() {
	const { theme } = useTheme();
	const [activeCategory, setActiveCategory] = useState("All");

	const categories = useMemo(() => {
		const cats = new Set(["All", ...project.map((p) => p.category)]);
		return Array.from(cats);
	}, []);

	const filteredProjects = useMemo(() => {
		if (activeCategory === "All") {
			return project;
		}
		return project.filter((p) => p.category === activeCategory);
	}, [activeCategory, project]);

	const sortedProjects = useMemo(() => {
		return [
			...filteredProjects.filter((p) => p.isNew),
			...filteredProjects.filter((p) => !p.isNew),
		];
	}, [filteredProjects]);

	return (
		<main className="relative flex flex-col items-center justify-between h-auto px-0 ">
			<div className="relative flex flex-col items-center w-full h-full mx-auto">
				<div>
					<span className="text-[4rem] font-bold">Projects</span>
				</div>
				<div className="container relative flex flex-col h-full gap-3 px-6 py-5 lg:w-screen lg:flex-row">
					<div className="mt-4 lg:w-[20%] w-full p-4 rounded-tr-xl rounded-bl-xl border lg:sticky lg:top-4 lg:self-start drop-shadow-lg">
						<h4 className="text-xl font-bold">Category</h4>
						<ul className="flex flex-wrap items-center gap-4 mt-4 lg:space-y-2 lg:block">
							{categories.map((cat, index) => (
								<li
									key={index}
									className={`relative lg:border-none border overflow-hidden rounded-md group text-white ${
										activeCategory === cat
											? "text-lime-400 group-hover:text-black"
											: ""
									}`}
								>
									<button
										type="button"
										onClick={() => setActiveCategory(cat)}
										className={`z-10 w-full relative translate-x-0 text-left font-semibold py-1 text-sm px-2 duration-100 ${
											activeCategory === cat
												? "text-lime-400 group-hover:text-black"
												: "text-white dark:text-gray-700 group-hover:text-black"
										}`}
									>
										<span className="relative flex justify-between w-full">
											<span
												className={`duration-300 lg:group-hover:translate-x-2 ${
													activeCategory === cat
														? "text-lime-400 group-hover:text-black"
														: ""
												}`}
											>
												{cat}
											</span>
											<span>
												(
												{
													project.filter((p) =>
														cat === "All" ? true : p.category === cat
													).length
												}
												)
											</span>
										</span>
									</button>
									<span
										className={`absolute left-0 w-full h-full bg-lime-400 translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-300 ${
											activeCategory === cat ? "translate-x-0 opacity-100" : ""
										}`}
									></span>
								</li>
							))}
						</ul>
					</div>
					<div className="relative w-full">
						<div className="flex flex-wrap gap-4 p-4">
							{sortedProjects.map((proj, index) => (
								<BlurFade
									className="w-full lg:w-[calc(50%-1rem)] "
									key={proj.id}
									delay={BLUR_FADE_DELAY * index}
								>
									<ProjectCard project={proj} />
								</BlurFade>
							))}
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
