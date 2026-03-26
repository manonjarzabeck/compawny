import React from "react";
import Btn from "../../btn/Btn";
import style from "./admin-cruds.module.css";

const AdminCruds = () => {
	return (
		<section className={style.grid}>
			<div className={style.container}>
				<img
					className={style.image}
					src="/img/homepage/actionguide.jpg"
					alt=""
				/>
				<Btn link={"/admin/action-homepage"}>Gérer les actions 👉🏼</Btn>
			</div>
			<div className={style.container}>
				<img className={style.image} src="/img/homepage/assoguide.jpg" alt="" />
				<Btn link={"/admin/association-homepage"}>
					Gérer les associations 👉🏼
				</Btn>
			</div>
			<div className={style.container}>
				<img
					className={style.image}
					src="/img/homepage/adoptionguide.png"
					alt=""
				/>
				<Btn link={"/admin/adoption-homepage"}>Gérer les adoptions 👉🏼</Btn>
			</div>
		</section>
	);
};

export default AdminCruds;
