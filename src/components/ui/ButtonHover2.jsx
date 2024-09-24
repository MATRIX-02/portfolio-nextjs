import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa";

const ButtonHover2 = ({
	text = "Click me",
	href = "#",
	target = "_blank",
	rel = "noopener noreferrer",
	className,
}) => {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const buttonRef = useRef(null);

	useEffect(() => {
		const handleMouseMove = (e) => {
			setMousePos({ x: e.clientX, y: e.clientY });
		};
		document.addEventListener("mousemove", handleMouseMove);
		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<a
			href={href}
			target={target}
			rel={rel}
			className={cn(
				"relative rounded h-8 py-4  flex justify-between w-max dark:border bg- items-center gap-2 px-2 mt-[1.2rem] text-sm  duration-300 border font-medium dark:hover:text-black dark:text-black hover:text-lime-500 group/gbtn ",
				className
			)}
			style={{
				"--mouse-x": `${mousePos.x - (buttonRef.current?.offsetLeft || 0)}px`,
				"--mouse-y": `${mousePos.y - (buttonRef.current?.offsetTop || 0)}px`,
			}}
			ref={buttonRef}
		>
			<span className="flex items-center gap-2 pl-4">
				{text}
				<FaGithub className="ml-1" size={20} />
			</span>
			<span className="h-[1px] w-0 bg-current absolute bottom-0 left-0 group-hover/gbtn:w-full transition-all duration-300 ease-in-out" />
		</a>
	);
};

export default ButtonHover2;
