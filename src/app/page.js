"use client";

import Particles from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
	const { theme } = useTheme();
	const [color, setColor] = useState("#ffffff");

	useEffect(() => {
		setColor(theme === "dark" ? "#000000" : "#ffffff");
	}, [theme]);

	return (
		<div>
			<Particles
				className="absolute inset-0"
				quantity={100}
				ease={80}
				color={color}
				refresh
			/>
		</div>
	);
}
