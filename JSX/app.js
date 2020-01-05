import React from "react";
import "./style.css";
function app(){
	return(
		<div style={{border:'solid 1px black', maxWidth:"100vw"}}>
			<h1 className="title-red">My title</h1>
			<img src={logo512.jpg} />
			<img src={logo192.jpg} />

		</div>
)
}
export default app ;