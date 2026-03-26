"use client";

import { useLocation } from "react-router";
import styles from "./admin-flash-msg.module.css";

const AdminFlashMessage = () => {
	const location = useLocation();
	const message = location.state?.message;

	if (!message) return null;

	return <p className={styles.message}>{message}</p>;
};

export default AdminFlashMessage;
