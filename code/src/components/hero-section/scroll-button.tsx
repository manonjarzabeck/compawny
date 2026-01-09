"use client";
import { ChevronDown } from "lucide-react";
import styles from "./hero-section.module.css";

function ScrollButton() {
	const handleScroll = () => {
		const target = document.getElementById("guide");
		if (target) {
			target.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<button
			type="button"
			className={styles.scrollBtn}
			onClick={handleScroll}
			aria-label="Faire défiler sur la section suivante = Le guide du bénévole"
		>
			<ChevronDown size={28} strokeWidth={2} />
		</button>
	);
}

export default ScrollButton;
