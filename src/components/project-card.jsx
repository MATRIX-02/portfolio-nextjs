import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

export function ProjectCard({
	title,
	href,
	description,
	dates,
	tags,
	link,
	image,
	video,
	links,
	className,
}) {
	return (
		<Card
			className={
				"flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
			}
		>
			<Link
				href={href || "#"}
				className={cn("block cursor-pointer", className)}
			>
				{video && (
					<video
						src={video}
						autoPlay
						loop
						muted
						playsInline
						className="object-cover object-top w-full h-40 mx-auto pointer-events-none" // needed because random black line at bottom of video
					/>
				)}
				{image && (
					<Image
						src={image}
						alt={title}
						width={500}
						height={300}
						className="object-cover object-top w-full h-40 overflow-hidden"
					/>
				)}
			</Link>
			<CardHeader className="px-2">
				<div className="space-y-1">
					<CardTitle className="mt-1 text-base">{title}</CardTitle>
					<time className="font-sans text-xs">{dates}</time>
					<div className="hidden font-sans text-xs underline print:visible">
						{link?.replace("https://", "").replace("www.", "").replace("/", "")}
					</div>
					<Markdown className="max-w-full font-sans text-xs prose text-pretty text-muted-foreground dark:prose-invert">
						{description}
					</Markdown>
				</div>
			</CardHeader>
			<CardContent className="flex flex-col px-2 mt-auto">
				{tags && tags.length > 0 && (
					<div className="flex flex-wrap gap-1 mt-2">
						{tags?.map((tag) => (
							<Badge
								className="px-1 py-0 text-[10px]"
								variant="secondary"
								key={tag}
							>
								{tag}
							</Badge>
						))}
					</div>
				)}
			</CardContent>
			<CardFooter className="px-2 pb-2">
				{links && links.length > 0 && (
					<div className="flex flex-row flex-wrap items-start gap-1">
						{links?.map((link, idx) => (
							<Link href={link?.href} key={idx} target="_blank">
								<Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
									{link.icon}
									{link.type}
								</Badge>
							</Link>
						))}
					</div>
				)}
			</CardFooter>
		</Card>
	);
}
