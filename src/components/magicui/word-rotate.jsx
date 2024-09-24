"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";

export default function WordRotate({
	words,
	duration = 2500,

	framerProps = {
		initial: { opacity: 0, y: 50, filter: "blur(10px)" },
		animate: { opacity: 1, y: 0, filter: "blur(0px)" },
		exit: { opacity: 0, y: 0, filter: "blur(10px)" },
		transition: { duration: 0.55, ease: "easeOut" },
	},

	className,
}) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, duration);

		// Clean up interval on unmount
		return () => clearInterval(interval);
	}, [words, duration]);

	return (
		<div className="py-2 overflow-hidden">
			<AnimatePresence mode="wait">
				<motion.h1
					key={words[index]}
					className={cn(className)}
					{...framerProps}
				>
					{words[index]}
				</motion.h1>
			</AnimatePresence>
		</div>
	);
}
