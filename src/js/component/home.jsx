import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Reloj from "../../img/stopwatch-solid.svg"

//create your first component
const Home = () => {
	const[play,setPlay]=useState(false);
	const[typetime,setTypetime]=useState("secs");
	const[countdown,setCountdown]=useState(false);
	const[cuenta,setCuenta]=useState(0);
	const[cdnum,setCdnum]=useState(0);
	const[precdnum,setPrecdnum]=useState();
	const[cuenta1,setCuenta1]=useState("");
	const[cuenta2,setCuenta2]=useState("");
	const[cuenta3,setCuenta3]=useState("");
	const[cuenta4,setCuenta4]=useState("");
	const[cuenta5,setCuenta5]=useState("");
	const[cuenta6,setCuenta6]=useState("");
	

	const escritura=(e)=>{
		var nuevonumero= parseInt(e);
		setPrecdnum(nuevonumero);
	}

	const reCuentaAtras=(typetime)=>{
		console.log(typetime)
		switch (typetime) {
			case "secs":
				setCdnum(precdnum);
				break;
			case "mins":
				setCdnum(precdnum*60);
				break;
			case "hours":
				setCdnum(precdnum*3600);
				break;
			default:
				break;
		}
		setCountdown(true);
	}

	const restart=()=>{
		setCuenta(0)
		setPlay(false)
		setCuenta1(0)
		setCuenta2(0)
		setCuenta3(0)
		setCuenta4(0)
		setCuenta5(0)
		setCuenta6(0)
		console.log("reiniciado")
	}

	const regresiva=()=>{
		setCdnum(cdnum-1);
		let numstr=`${cdnum}`;

		setCuenta1(numstr[numstr.length-1])
		setCuenta2(numstr[numstr.length-2])
		setCuenta3(numstr[numstr.length-3])
		setCuenta4(numstr[numstr.length-4])
		setCuenta5(numstr[numstr.length-5])
		setCuenta6(numstr[numstr.length-6])
		setPlay(false);
	}

	const suma=()=>{
		
		setCuenta(cuenta+1);
		let numstr=`${cuenta}`;
		
		setCuenta1(numstr[numstr.length-1])
		setCuenta2(numstr[numstr.length-2])
		setCuenta3(numstr[numstr.length-3])
		setCuenta4(numstr[numstr.length-4])
		setCuenta5(numstr[numstr.length-5])
		setCuenta6(numstr[numstr.length-6])
		setCountdown(false);
	}
	
	useEffect(()=>{
		
		if(play){
			console.log("playing>>"+cuenta)
			const t=setInterval(() => {
			suma(); 
			return clearInterval(t)
		}, 1000);}
		if(countdown && cdnum>=0){
			console.log("cuenta atras"+cdnum)
			const y=setInterval(() => {
				regresiva(); 
				return clearInterval(y)
			}, 1000);

		}
	},[cuenta,play,countdown,cdnum])

	return (
		
			<div className="text-center bg-black h-100">
				<p className="text-white fs-1 bg-dark bg-opacity-50 border-5 border-top-0 border-bottom-0 border border-dark  rounded p-5">CONTADOR AUTOMÁTICO</p>
				<h1 className="text-center mt-5 row text-white justify-content-end ">
					<div className="text-white col-3 me-5 h-25 bg-dark bg-opacity-75 border-5 border-top-0 border-bottom-0 border border-dark rounded py-3"  >
						<svg className="text-white" xmlns="http://www.w3.org/2000/svg" style={{height:"90px"}} viewBox="0 0 448 512">
							<path d="M432 304c0 114.9-93.1 208-208 208S16 418.9 16 304c0-104 76.3-190.2 176-205.5V64h-28c-6.6 0-12-5.4-12-12V12c0-6.6 5.4-12 12-12h120c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-28v34.5c37.5 5.8 71.7 21.6 99.7 44.6l27.5-27.5c4.7-4.7 12.3-4.7 17 0l28.3 28.3c4.7 4.7 4.7 12.3 0 17l-29.4 29.4-.6.6C419.7 223.3 432 262.2 432 304zm-176 36V188.5c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12V340c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"/>
						</svg>
					</div>
					<div className="col-8 row p-2 me-3">
						<div className="col-2 p-3 bg-dark bg-opacity-50 border-5 border-top-0 border-bottom-0 border border-dark  rounded">{cuenta6?cuenta6:0}</div>
						<div className="col-2 p-3 bg-dark bg-opacity-50 border-5 border-top-0 border-bottom-0 border border-dark  rounded">{cuenta5?cuenta5:0}</div>
						<div className="col-2 p-3 bg-dark bg-opacity-50 border-5 border-top-0 border-bottom-0 border border-dark  rounded">{cuenta4?cuenta4:0}</div>
						<div className="col-2 p-3 bg-dark bg-opacity-50 border-5 border-top-0 border-bottom-0 border border-dark  rounded">{cuenta3?cuenta3:0}</div>
						<div className="col-2 p-3 bg-dark bg-opacity-50 border-5 border-top-0 border-bottom-0 border border-dark  rounded">{cuenta2?cuenta2:0}</div>
						<div className="col-2 p-3 bg-dark bg-opacity-50 border-5 border-top-0 border-bottom-0 border border-dark  rounded" >{cuenta1?cuenta1:0}</div>
					</div>
				</h1>
				<div className="row justify-content-end p-1 fw-semibold mx-5">
					<button className="col-2 p-1 rounded fw-bold " onClick={()=>setPlay(!play)}>{play?"Pause":"Play"}</button>
					<button className="col-2 p-1 rounded fw-bold" onClick={()=>restart()}>Restart</button>
				</div>
				<div className="row justify-content-end p-1  mx-5">	
					<button className="col-2 p-1 rounded fw-bold" onClick={()=>setCountdown(!countdown)}>{countdown?"Stop countdown":"Resume countdown"}</button>
					<button className="col-2 p-1 rounded fw-bold" onClick={()=>reCuentaAtras(typetime)}>Start new countdown</button>
				</div>
				<div className="row justify-content-end p-1">
					<input className="col-3" type="text" onChange={(e)=>escritura(e.target.value)} placeholder="Indique aqui el tiempo para la cuenta atras"/>
					<div class="dropdown col-4" style={{height:"40px"}}>
						<button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Elija la medida de tiempo que va a usar: {typetime}
						</button>
						<ul class="dropdown-menu">
							<li><button class="dropdown-item" type="button" onClick={()=>setTypetime("secs")}>Segundos</button></li>
							<li><button class="dropdown-item" type="button" onClick={()=>setTypetime("mins")}>Minutos</button></li>
							<li><button class="dropdown-item" type="button" onClick={()=>setTypetime("hours")}>Horas</button></li>
						</ul>
					</div>
				</div>
			</div>
		
	);
};

export default Home;
