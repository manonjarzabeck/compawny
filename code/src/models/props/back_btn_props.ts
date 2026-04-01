import type { ReactNode } from "react";

type BackBtnProps = {
	fallbackLink?: string;
	children?: ReactNode;
	variant?: "default" | "homepage";
};

export type { BackBtnProps };
