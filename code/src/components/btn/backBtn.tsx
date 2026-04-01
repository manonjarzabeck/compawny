"use client";

import React from "react";
import { useNavigate } from "react-router";
import type { BackBtnProps } from "../../models/props/back_btn_props";
import Btn from "../btn/Btn";

const BackBtn = ({
	fallbackLink = "/",
	children = "Retour",
	variant = "default",
}: BackBtnProps) => {
	const navigate = useNavigate();

	const handleBack = () => {
		if (window.history.length > 1) {
			navigate(-1);
		} else {
			navigate(fallbackLink);
		}
	};

	return (
		<div style={{ margin: "0.8rem 0 0.4rem 0.8rem" }}>
			<Btn onClick={handleBack} variant={variant}>
				{children}
			</Btn>
		</div>
	);
};

export default BackBtn;
