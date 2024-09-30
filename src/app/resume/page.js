"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ResumeCard } from "@/components/Resume/resume-card";
import { ProjectCard } from "@/components/Resume/resume-project-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	SiReact,
	SiNextdotjs,
	SiTypescript,
	SiNodedotjs,
	SiPython,
	SiCplusplus,
	SiMongodb,
	SiFigma,
	SiExpress,
	SiGithub,
	SiGit,
	SiMui,
} from "react-icons/si";

const BLUR_FADE_DELAY = 0.04;

const skills = [
	{ name: "React", icon: SiReact, color: "#61DAFB" },
	{ name: "Next.js", icon: SiNextdotjs, color: "#000000" },
	{ name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
	{ name: "Node.js", icon: SiNodedotjs, color: "#339933" },
	{ name: "Python", icon: SiPython, color: "#3776AB" },
	{ name: "C++", icon: SiCplusplus, color: "#00599C" },
	{ name: "MongoDB", icon: SiMongodb, color: "#47A248" },
	{ name: "Figma", icon: SiFigma, color: "#F24E1E" },
	{ name: "Express.js", icon: SiExpress, color: "#000000" },
	{ name: "GitHub", icon: SiGithub, color: "#181717" },
	{ name: "Git", icon: SiGit, color: "#F05032" },
	{ name: "Material UI", icon: SiMui, color: "#0081CB" },
];

export default function Resume() {
	const [hoveredSkill, setHoveredSkill] = useState(null);
	return (
		<main className="flex max-w-2xl m-auto flex-col min-h-[100dvh] space-y-10">
			<section id="hero">
				<div className="w-full max-w-2xl mx-auto space-y-8">
					<div className="flex justify-between gap-2">
						<div className="flex-col flex flex-1 space-y-1.5">
							<BlurFadeText
								delay={BLUR_FADE_DELAY}
								className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
								yOffset={8}
								text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
							/>
							<BlurFadeText
								className="max-w-[600px] md:text-xl"
								delay={BLUR_FADE_DELAY}
								text={DATA.description}
							/>
						</div>
						<BlurFade delay={BLUR_FADE_DELAY}>
							<Avatar className="border size-28">
								<AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
								<AvatarFallback>{DATA.initials}</AvatarFallback>
							</Avatar>
						</BlurFade>
					</div>
				</div>
			</section>

			<section id="work">
				<div className="flex flex-col min-h-0 gap-y-3">
					<BlurFade delay={BLUR_FADE_DELAY * 5}>
						<h2 className="text-xl font-bold">Work Experience</h2>
					</BlurFade>
					{DATA.work.map((work, id) => (
						<BlurFade
							key={work.company}
							delay={BLUR_FADE_DELAY * 6 + id * 0.05}
						>
							<ResumeCard
								key={work.company}
								logoUrl={work.logoUrl}
								altText={work.company}
								title={work.company}
								subtitle={work.title}
								href={work.href}
								badges={work.badges}
								period={`${work.start} - ${work.end ?? "Present"}`}
								description={work.description}
							/>
						</BlurFade>
					))}
				</div>
			</section>
			<section id="education">
				<div className="flex flex-col min-h-0 gap-y-3">
					<BlurFade delay={BLUR_FADE_DELAY * 7}>
						<h2 className="text-xl font-bold">Education</h2>
					</BlurFade>
					{DATA.education.map((education, id) => (
						<BlurFade
							key={education.school}
							delay={BLUR_FADE_DELAY * 8 + id * 0.05}
						>
							<ResumeCard
								key={education.school}
								href={education.href}
								logoUrl={education.logoUrl}
								altText={education.school}
								title={education.school}
								subtitle={education.degree}
								period={`${education.start} - ${education.end}`}
							/>
						</BlurFade>
					))}
				</div>
			</section>
			<section id="skills">
				<div className="flex flex-col min-h-0 gap-y-3">
					<BlurFade delay={BLUR_FADE_DELAY * 9}>
						<h2 className="text-xl font-bold">Skills</h2>
					</BlurFade>
					<div className="grid grid-cols-3 gap-8 md:grid-cols-5 justify-items-center">
						{skills.map((skill, id) => (
							<BlurFade
								key={skill.name}
								delay={BLUR_FADE_DELAY * 10 + id * 0.05}
							>
								<div
									className="relative group"
									onMouseEnter={() => setHoveredSkill(skill.name)}
									onMouseLeave={() => setHoveredSkill(null)}
								>
									<div className="flex items-center justify-center w-16 h-16 transition-transform bg-white rounded-full shadow-lg group-hover:scale-110">
										<skill.icon
											className="w-10 h-10"
											style={{ color: skill.color }}
										/>
									</div>
									{hoveredSkill === skill.name && (
										<div className="absolute px-3 py-1 text-sm text-white transform -translate-x-1/2 bg-gray-800 rounded-md -bottom-8 left-1/2 whitespace-nowrap">
											{skill.name}
										</div>
									)}
								</div>
							</BlurFade>
						))}
					</div>
				</div>
			</section>
			<section id="projects">
				<div className="w-full py-12 space-y-12">
					<BlurFade delay={BLUR_FADE_DELAY * 11}>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block px-3 py-1 text-sm rounded-lg bg-foreground text-background">
									My Projects
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
									Check out my latest work
								</h2>
								<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									I&apos;ve worked on a variety of projects, from simple
									websites to complex web applications. Here are a few of my
									favorites.
								</p>
							</div>
						</div>
					</BlurFade>
					<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
						{DATA.projects.map((project, id) => (
							<BlurFade
								key={project.title}
								delay={BLUR_FADE_DELAY * 12 + id * 0.05}
							>
								<ProjectCard
									href={project.href}
									key={project.title}
									title={project.title}
									description={project.description}
									dates={project.dates}
									tags={project.technologies}
									image={project.image}
									video={project.video}
									links={project.links}
								/>
							</BlurFade>
						))}
					</div>
				</div>
			</section>
			<section id="download-resume">
				<BlurFade delay={BLUR_FADE_DELAY * 13}>
					<div className="flex justify-start mb-8 -mt-10">
						<Link
							href="/static/Mayank_Resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button variant="outline">Download Resume (PDF)</Button>
						</Link>
					</div>
				</BlurFade>
			</section>
		</main>
	);
}
