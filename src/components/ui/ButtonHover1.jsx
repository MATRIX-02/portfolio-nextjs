"use client";

import { useTheme } from "next-themes";
import React from "react";

const ButtonHover1 = ({
	text = "Contact me",
	bgGradientFrom = "#f7f8ff",
	bgGradientTo = "#ffffff",
	darkBgGradientFrom = "#070e41",
	darkBgGradientTo = "#263381",
	borderColor = "#394481",
	darkBorderColor = "#656fe2",
	iconColor = "white",
	darkIconColor = "black",
	onClick,
}) => {
	const { theme } = useTheme();

	return (
		<button
			className="group mt-5 relative flex h-8 w-[130px] items-center justify-between  rounded dark:bg-black hover:bg-lime-400 bg-white font-medium dark:text-neutral-200 text-black"
			onClick={onClick}
		>
			<span className="pl-4 text-sm dark:text-white ">{text}</span>
			<div className="relative h-full mr-1 overflow-hidden text-black w-7 dark:bg-black">
				<div className="absolute top-[.839em] left-[-0.07em] grid place-content-center transition-all w-full h-full duration-200 group-hover:-translate-y-5 group-hover:translate-x-5">
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="w-5 h-5"
					>
						<path
							d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
							fill={theme === "light" ? darkIconColor : iconColor}
							fillRule="evenodd"
							clipRule="evenodd"
						></path>
					</svg>
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="w-5 h-5 -translate-x-4"
					>
						<path
							d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
							fill={theme === "light" ? darkIconColor : iconColor}
							fillRule="evenodd"
							clipRule="evenodd"
						></path>
					</svg>
				</div>
			</div>
		</button>
	);
};

export default ButtonHover1;
