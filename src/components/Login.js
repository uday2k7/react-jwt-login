import {React, useState} from "react";
import AuthUser from "./AuthUser"

const Login=()=>{
	const {http, setToken} = AuthUser();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const submitForm = () =>{
		http.post('/user/login',{
			email:email,
			password:password
		}).then((res)=>{
			//console.log("RES:",res.data.data.token);
			setToken(res.data.data.userInfo,res.data.data.token);
			console.log(res.data.data.userInfo,res.data.data.token);
		})
	}
return(
	<div className="row justify-content-center pt-5">
		<div className="col-sm-6">
			<div className="card p-4">			
				<div className="form-group">
					<label htmlFor="email">Email address:</label>
					<input type="email" className="form-control" placeholder="Enter email" 
					onChange={e=>setEmail(e.target.value)} id="email" />
				</div>
				<div className="form-group">
					<label htmlFor="pwd">Password:</label>
					<input type="password" className="form-control" placeholder="Enter password" 
					onChange={e=>setPassword(e.target.value)} id="pwd" />
				</div>
				<div className="form-group form-check m-3">
					<label className="form-check-label">
					<input className="form-check-input" type="checkbox" /> Remember me
					</label>
				</div>
				<button type="button" className="btn btn-primary" onClick={submitForm}>Login</button>				
			</div>
		</div>
	</div>
);
};
export default Login;