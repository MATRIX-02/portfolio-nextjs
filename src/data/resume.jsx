import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
	name: "Mayank",
	initials: "M",
	url: "https://mayank--dev.me/Portfolio/",
	description:
		"Full Stack Software Engineer. I love building things and helping people. ",
	avatarUrl: "/static/Profile_picture.jpg",
	skills: [
		"React",
		"Next.js",
		"Typescript",
		"Node.js",
		"Python",
		"C++",
		"MongoDB",
		"Figma",
		"Express.js",
	],

	work: [
		{
			company: "EaseworkAI",
			href: "https://easeworkai.com/",
			badges: ["AI", "LLM"],
			location: "Remote",
			title: "Frontend Engineer Intern",
			logoUrl: "/static/easeworkai_logo.jpeg",
			start: "June 2021",
			end: "Present",
			description:
				"Developed and maintained multiple projects utilizing Streamlit, React, and FastAPI, demonstrating proficiency in both frontend and backend technologies",
		},
		{
			company: "MotionCut",
			badges: [],
			href: "https://motioncut.shop/",
			location: "Remote",
			title: "Web Developer",
			logoUrl: "/static/Motioncut_logo.png",
			start: "Feb 2024",
			end: "April 2024",
			description:
				"Spearheaded the development of 4 major frontend projects, to deliver responsive and user-centric web applications.",
		},
	],
	education: [
		{
			school: "Galgotias University",
			href: "https://www.galgotiasuniversity.edu.in/",
			degree: "Bachelor's of Computer Science & Engineering",
			logoUrl: "/static/Galgotias_University_logo.jpg",
			start: "2020",
			end: "2024",
		},
		{
			school: "Sacred Heart Senior Secondary School, Lucknow",
			href: "https://sacredheartschools.in/",
			degree: "Senior Secondary Education",
			logoUrl: "/static/SHS_logoavif.avif",
			start: "2018",
			end: "2019",
		},
		{
			school: "Army Public School, Pune",
			href: "https://apspune.com/",
			degree: "Secondary Education",
			logoUrl: "/static/APS_Pune_logo.jpeg",
			start: "2016",
			end: "2017",
		},
	],
	projects: [
		{
			title: "ScriptQuiz",
			href: "https://mayank--dev.me/ScriptQuiz",
			dates: "Dec 2023 - Jan 2024",
			active: true,
			description:
				"An interactive quiz platform for learning and practicing JavaScript and Frontend Interviews.",
			technologies: ["React.js", "Javascript", "TailwindCSS", "Shadcn UI"],
			links: [
				{
					type: "Website",
					href: "https://mayank--dev.me/ScriptQuiz",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/MATRIX-02/ScriptQuiz",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/static/Projects/Site_5.png",
			video: "",
		},
		{
			title: "NomNomFoods",
			href: "https://matrix-02.github.io/NomNomFoods/",
			dates: "Sep 2023 - Nov 2023",
			active: true,
			description:
				"An online food delivery platform similar, offering a wide range of cuisines.",
			technologies: [
				"React.js",
				"Javascript",
				"TailwindCSS",
				"SwiggyAPI",
				"Redux",
				"Jest",
			],
			links: [
				{
					type: "Website",
					href: "https://matrix-02.github.io/NomNomFoods/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/MATRIX-02/NomNomFoods",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/static/Projects/Site_4.gif",
			video: "",
		},
		{
			title: "GameRadar Hub",
			href: "https://matrix-02.github.io/GameRadar-Hub/",
			dates: "Aug 2023 - Sep 2023",
			active: true,
			description:
				"Discover the latest and greatest websites with GameRadar Hub, your ultimate guide to the web's hidden gems and trending platforms.",
			technologies: [
				"React.js",
				"Javascript",
				"Rawg API",
				"TailwindCSS",
				"Frame-Motion",
			],
			links: [
				{
					type: "Website",
					href: "https://matrix-02.github.io/GameRadar-Hub/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/MATRIX-02/GameRadar-Hub",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/static/Projects/Site_1.gif",
			video: "",
		},
		{
			title: "Just Chill",
			href: "https://matrix-02.github.io/JustChill/",
			dates: "April 2023 - June 2023",
			active: true,
			description:
				"A lofi music player with a minimalist design for relaxation, offering a seamless and calming listening experience.",
			technologies: ["React.js", "JavaScript", "TailwindCSS"],
			links: [
				{
					type: "Website",
					href: "https://matrix-02.github.io/JustChill/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/MATRIX-02/JustChill",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/static/Projects/Site_2.gif",
			video: "",
		},
	],
};
