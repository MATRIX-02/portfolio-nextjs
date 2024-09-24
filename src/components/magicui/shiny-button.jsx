"use client";
import React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const animationProps = {
	initial: { "--x": "100%", scale: 0.8 },
	animate: { "--x": "-100%", scale: 1 },
	whileTap: { scale: 0.95 },

	transition: {
		repeat: Infinity,
		repeatType: "loop",
		repeatDelay: 1,
		type: "spring",
		stiffness: 20,
		damping: 15,
		mass: 2,
		scale: {
			type: "spring",
			stiffness: 200,
			damping: 5,
			mass: 0.5,
		},
	},
};
const ShinyButton = ({ children, className, ...props }) => {
	return (
		<motion.button
			{...animationProps}
			{...props}
			className={cn(
				"relative -top-3 -right-1 rounded-lg px-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out dark:hover:shadow hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]",
				className
			)}
		>
			<span
				className="relative block size-full text-[.6rem] font-bold uppercase tracking-wide dark:text-[rgb(0,0,0,65%)] text-[rgb(255,255,255,90%)]"
				style={{
					maskImage:
						"linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
				}}
			>
				{children}
			</span>
			<span
				style={{
					mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
					maskComposite: "exclude",
				}}
				className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
			></span>
		</motion.button>
	);
};

export default ShinyButton;
