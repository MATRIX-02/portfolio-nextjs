import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import NavigationDock from "@/components/Navigation/NavigationDock";
import AnimatedCursor from "react-animated-cursor";
import Particles from "@/components/magicui/particles";

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<title>Mayank's Portfolio</title>
				<meta
					name="description"
					content="Welcome to Mayank's Portfolio. Explore my projects and skills."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta property="og:title" content="Mayank's Portfolio" />
				<meta
					property="og:description"
					content="Welcome to Mayank's Portfolio. Explore my projects and skills."
				/>
				<meta property="og:url" content="https://mayank--dev.me/Portfolio/" />
				<meta name="twitter:card" content="summary_large_image" />
				<link rel="shortcut icon" href="/static/favicon.ico" />
			</head>
			<body
				className={cn(
					"h-full bg-background antialiased mx-auto p-12 sm:pt-24 px-6 "
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="light">
					{/* <AnimatedCursor
						innerSize={8}
						outerSize={10}
						innerScale={1}
						outerScale={2}
						outerAlpha={0}
						hasBlendMode={true}
						innerStyle={{
							backgroundColor: "white",
							mixBlendMode: "exclusion",
						}}
						outerStyle={{
							border: "3px solid white",
							mixBlendMode: "exclusion",
						}}
					/> */}
					<TooltipProvider delayDuration={0}>
						{children}
						<NavigationDock />
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
