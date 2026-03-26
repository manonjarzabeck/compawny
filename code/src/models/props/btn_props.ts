import type { ReactNode } from "react";

export type BtnProps = {
	link?: string;
	children: ReactNode;
	onClick?: () => void;
	variant?: "default" | "homepage";
};
