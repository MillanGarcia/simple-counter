import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Reloj from "../../img/stopwatch-solid.svg"

//create your first component
const Home = () => {
	const[prealerta,setPrealerta]=useState();//almacena el tiempo necesario para la alerta
	const[alerta,setAlerta]=useState(0);
	const[play,setPlay]=useState(false);////activa el contador hacia delante
	const[typetime,setTypetime]=useState("secs");//indica el tipo de tiempo usado al escribir en la cuenta atrás necesaria
	const[typetime2,setTypetime2]=useState("secs");//indica el tipo de tiempo usado al escribir en la cuenta atrás necesaria
	const[countdown,setCountdown]=useState(false);//activa el contador hacia atras
	const[cuenta,setCuenta]=useState(0);//Almacena la cuenta normal 
	const[cdnum,setCdnum]=useState(0);//Almacena la cuenta atras
	const[precdnum,setPrecdnum]=useState();//Almacena el numero que indica el usuario para la cuenta atrás
	const[cuenta1,setCuenta1]=useState(null);
	const[cuenta2,setCuenta2]=useState(null);
	const[cuenta3,setCuenta3]=useState(null);
	const[cuenta4,setCuenta4]=useState(null);
	const[cuenta5,setCuenta5]=useState(null);
	const[cuenta6,setCuenta6]=useState(null);
	
	const writeCdnum=(e)=>{
		let nuevonumero= parseInt(e);
		setPrecdnum(nuevonumero);
	}

	const writealarm=(e)=>{
		let nuevaalarma= parseInt(e);
		setPrealerta(nuevaalarma);
	}
	
	const reCuentaAtras=(typetime)=>{// al empezar una nueva cuenta atrás
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
		reCuentaAtras2(typetime2)
		setCountdown(true);
	}
	
	const reCuentaAtras2=(typetime2)=>{
		console.log(typetime2)
		switch (typetime2) {
			case "secs":
				setAlerta(prealerta);
				break;
			case "mins":
				setAlerta(prealerta*60);
				break;
			case "hours":
				setAlerta(prealerta*3600);
				break;
			default:
				break;
		}
		
	}

	const funciondoble=()=>{
		setPlay(!play)
		reCuentaAtras2(typetime2)
	}

	const funciondoble2=()=>{
		setCountdown(!countdown)
		reCuentaAtras2(typetime2)
	}

	const restart=()=>{
		setCuenta(0)
		setPlay(false)
		setCuenta1(null)
		setCuenta2(null)
		setCuenta3(null)
		setCuenta4(null)
		setCuenta5(null)
		setCuenta6(null)
		console.log("reiniciado")
	}

	const regresiva=()=>{
		console.log("esto es la regresiva"+countdown)
		setCdnum(cdnum-1);
		let numstr=`${cdnum}`;
		//setPrealerta(prealerta-1)
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
		//setPrealerta(prealerta-1)
		setCuenta1(numstr[numstr.length-1])
		setCuenta2(numstr[numstr.length-2])
		setCuenta3(numstr[numstr.length-3])
		setCuenta4(numstr[numstr.length-4])
		setCuenta5(numstr[numstr.length-5])
		setCuenta6(numstr[numstr.length-6])
		setCountdown(false);
	}
	
	useEffect(()=>{
		
		setAlerta(alerta-1)
		console.log("playing alerta "+alerta)
		alerta===-1?alert("Se terminó tu tiempo!" ):"";//porque se usa el -2? porque se hace un primer renderizado que resta uno a la cuenta atrás de la alarma
		//si escribo este codigo, despues del if(lineas 103-118) en vez de antes, se suman dos enteros extra al valor de la cuenta, porque?
			if(play){
				console.log("playing>> "+cuenta)
				//console.log("prealerta"+prealerta)
				setCountdown(false);
				const t=setInterval(() => {
					suma();
					
					return clearInterval(t)
				}, 1000);
			}
		
			if(countdown && cdnum>=0){
				console.log("cuenta atras>> "+cdnum)
				const y=setInterval(() => {
					regresiva();
					
					return clearInterval(y)
				}, 1000);
			}
			if(cuenta1===null && play===false && countdown===false){//este condicional if, sirve para pasar de nuevo la funcion restart, y no se quede el numero que aparece en imagen como el ultimo que conto, es necesario pasarla dos veces
				restart();
				cuenta1===null ?console.log("CUENTA NULL"):"";
			}
		//setPrealerta(prealerta-1)
		//console.log("playing alerta "+prealerta)
		//prealerta===-2?alert("Hello! I am an alert boxer!"):"";
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
						<div className="col-2 p-3 bg-dark bg-opacity-50 border-5 border-top-0 border-bottom-0 border border-dark  rounded">{cuenta6?cuenta6:"0"}</div>
						<div className="col-2 p-3 bg-dark bg-opacity-50 border-5 border-top-0 border-bottom-0 border border-dark  rounded">{cuenta5?cuenta5:"0"}</div>
						<div className="col-2 p-3 bg-dark bg-opacity-50 border-5 border-top-0 border-bottom-0 border border-dark  rounded">{cuenta4?cuenta4:"0"}</div>
						<div className="col-2 p-3 bg-dark bg-opacity-50 border-5 border-top-0 border-bottom-0 border border-dark  rounded">{cuenta3?cuenta3:"0"}</div>
						<div className="col-2 p-3 bg-dark bg-opacity-50 border-5 border-top-0 border-bottom-0 border border-dark  rounded">{cuenta2?cuenta2:"0"}</div>
						<div className="col-2 p-3 bg-dark bg-opacity-50 border-5 border-top-0 border-bottom-0 border border-dark  rounded" >{cuenta1?cuenta1:"Start?"}</div>
					</div>
				</h1>
				<div className="row justify-content-end p-1 fw-semibold mx-5">
					<button className="col-2 p-1 rounded fw-bold " onClick={()=>funciondoble()} >{play?"Pause":cuenta===0?"Play":`Play: ${cuenta-1}`}</button>
					<button className="col-2 p-1 rounded fw-bold" onClick={()=>restart()}>Restart</button>
				</div>
				<div className="row justify-content-end p-1  mx-5">	
					<button className="col-2 p-1 rounded fw-bold" onClick={()=>funciondoble2()}>{countdown?"Stop countdown":cuenta1===null?"Resume countdown": cdnum+1===0?"Resume countdown":`Resume countdown:${cdnum+1}`}</button>
					<button className="col-2 p-1 rounded fw-bold" onClick={()=>reCuentaAtras(typetime)}>Start new countdown</button>
				</div>
				<div className="row  p-1">
					<p className="text-white col-5 text-end">CUENTA ATRÁS</p>
					<input className="col-3 " type="text" onChange={(e)=>writeCdnum(e.target.value)} placeholder="Indique aqui el tiempo para la cuenta atras"/>
					<div className="dropdown col-4" style={{height:"40px"}}>
						<button className="btn btn-secondary dropdown-toggle me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Elija la medida de tiempo que va a usar: {typetime}
						</button>
						<ul className="dropdown-menu">
							<li><button className="dropdown-item" type="button" onClick={()=>setTypetime("secs")}>Segundos</button></li>
							<li><button className="dropdown-item" type="button" onClick={()=>setTypetime("mins")}>Minutos</button></li>
							<li><button className="dropdown-item" type="button" onClick={()=>setTypetime("hours")}>Horas</button></li>
						</ul>
					</div>
				</div>
				<div className="row  p-1" >
					<p className="text-white col-4 text-end">ALARMA</p>
					<input className="col-3 " type="text" onChange={(e)=>writealarm(e.target.value)} placeholder="Establezca su alarma de tiempo"/>
					<div className="dropdown col-4" style={{height:"40px"}}>
						<button className="btn btn-secondary dropdown-toggle me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Elija la medida de tiempo que va a usar: {typetime2}
						</button>
						<ul className="dropdown-menu">
							<li><button className="dropdown-item" type="button" onClick={()=>setTypetime2("secs")}>Segundos</button></li>
							<li><button className="dropdown-item" type="button" onClick={()=>setTypetime2("mins")}>Minutos</button></li>
							<li><button className="dropdown-item" type="button" onClick={()=>setTypetime2("hours")}>Horas</button></li>
						</ul>
					</div>
				</div>
			</div>
		
	);
};
export default Home;
