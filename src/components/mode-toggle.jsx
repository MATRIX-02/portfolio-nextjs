"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			variant="ghost"
			type="button"
			size="icon"
			className="px-2"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			<SunIcon className="h-[1.2rem] w-[1.2rem] dark:text-neutral-800 dark:hidden text-neutral-200" />
			<MoonIcon className="hidden h-[1.2rem] w-[1.2rem] dark:text-neutral-800 dark:block text-neutral-200" />
		</Button>
	);
}