"use client";

import styles from "./scroll-button.module.css";

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
			↓
		</button>
	);
}

export default ScrollButton;
