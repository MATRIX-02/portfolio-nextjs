import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import NavigationDock from "@/components/Navigation/NavigationDock";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

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
				<meta property="og:image" content="/path/to/your/image.jpg" />
				<meta property="og:url" content="https://yourwebsite.com" />
				<meta name="twitter:card" content="summary_large_image" />
			</head>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
					fontSans.variable
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="light">
					<TooltipProvider delayDuration={0}>
						{children}
						<NavigationDock />
					</TooltipProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
