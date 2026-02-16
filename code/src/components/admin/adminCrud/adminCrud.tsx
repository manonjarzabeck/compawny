import React from "react";
import Btn from "../../btn/Btn";
import style from "./adminCrud.module.css";

const AdminCrud = () => {
	return (
		<section className={style.grid}>
			<div className={style.container}>
				<img className={style.image} src="/img/pages/actionguide.jpg" alt="" />
				<Btn link={"/admin/action-homepage"}>Gérer les actions 👉🏼</Btn>
			</div>
			<div className={style.container}>
				<img className={style.image} src="/img/pages/assoguide.jpg" alt="" />
				<Btn link={"/admin/association-homepage"}>
					Gérer les associations 👉🏼
				</Btn>
			</div>
			<div className={style.container}>
				<img
					className={style.image}
					src="/img/pages/adoptionguide.png"
					alt=""
				/>
				<Btn link={"/admin/adoption-homepage"}>Gérer les adoptions 👉🏼</Btn>
			</div>
		</section>
	);
};

export default AdminCrud;
