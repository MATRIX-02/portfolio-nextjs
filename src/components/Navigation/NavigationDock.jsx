"use client";

import React from "react";
import Link from "next/link";
import {
	CalendarIcon,
	HomeIcon,
	MailIcon,
	PencilIcon,
	LinkedinIcon,
	GithubIcon,
	FileIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";

const DATA = {
	navbar: [
		{ href: "/", icon: HomeIcon, label: "Home" },
		{ href: "/projects", icon: PencilIcon, label: "Projects" },
	],
	contact: {
		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/MATRIX-02",
				icon: GithubIcon,
			},
			LinkedIn: {
				name: "LinkedIn",
				url: "https://www.linkedin.com/in/mayank--dev/",
				icon: LinkedinIcon,
			},

			Email: {
				name: "Send Email",
				url: "mailto:mayanksingh122001@gmail.com",
				icon: MailIcon,
			},
			Resume: {
				name: "Resume",
				type: "file",
				url: "/resume",
				icon: FileIcon,
			},
		},
	},
};

const NavigationDock = () => {
	return (
		<div className="fixed inset-x-0 z-30 flex h-full mx-auto origin-bottom bottom-3 max-h-14">
			<TooltipProvider>
				<Dock
					direction="middle"
					className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background dark:[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
				>
					{DATA.navbar.map((item) => (
						<DockIcon key={item.label}>
							<Tooltip>
								<TooltipTrigger asChild>
									<Link
										href={item.href}
										aria-label={item.label}
										className={cn(
											buttonVariants({ variant: "ghost", size: "icon" }),
											"size-12 rounded-full"
										)}
									>
										<item.icon className="size-4" />
									</Link>
								</TooltipTrigger>
								<TooltipContent>
									<p>{item.label}</p>
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}
					<Separator orientation="vertical" className="h-full" />
					{Object.entries(DATA.contact.social).map(([name, social]) => (
						<DockIcon key={name}>
							<Tooltip>
								<TooltipTrigger asChild>
									{social.type === "file" ? (
										<a
											href={social.url}
											aria-label={social.name}
											className={cn(
												buttonVariants({ variant: "ghost", size: "icon" }),
												"size-12 rounded-full"
											)}
										>
											<social.icon className="size-4" />
										</a>
									) : (
										<Link
											href={social.url}
											aria-label={social.name}
											target="_blank"
											rel="noopener noreferrer"
											className={cn(
												buttonVariants({ variant: "ghost", size: "icon" }),
												"size-12 rounded-full"
											)}
										>
											<social.icon className="size-4" />
										</Link>
									)}
								</TooltipTrigger>
								<TooltipContent>
									<p>{name}</p>
								</TooltipContent>
							</Tooltip>
						</DockIcon>
					))}
					<Separator orientation="vertical" className="h-full" />
					<DockIcon>
						<Tooltip>
							<TooltipTrigger asChild>
								<ModeToggle />
							</TooltipTrigger>
							<TooltipContent>
								<p>Theme</p>
							</TooltipContent>
						</Tooltip>
					</DockIcon>
				</Dock>
			</TooltipProvider>
		</div>
	);
};

export default NavigationDock;
