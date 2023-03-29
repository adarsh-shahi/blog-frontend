import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { ACTION_TYPE } from "../context/userContext";

export default function Login() {
	const [usernameValue, setUsernameValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	const { dispatch } = useContext(UserContext!)!;
	const navigate = useNavigate();

	const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(usernameValue, passwordValue);
		if (!passwordValue || !usernameValue) return;
		const response = await fetch("/v1/login", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: usernameValue,
				password: passwordValue,
			}),
			// credentials: "include",
			// body: JSON.stringify({ username: "catman", password: "catman" }),
		});
		const data = await response.json();
		const { token, username, email } = data.message;
		localStorage.setItem("userToken", token);
		dispatch({
			type: ACTION_TYPE.ADD_USER,
			payload: {
				user: {
					username,
					email,
					token,
				},
			},
		});
		navigate("/");
	};


	return (
		<div className="flex justify-center items-center w-screen h-screen bg-gray-900">
			<div className="w-100 p-10 shadow-lg bg-red-600 rounded-md">
				<h1 className="text-3xl block text-center font-semibold">Login</h1>
				<hr className="mt-3 bg-black" />
				<form
					className=""
					onSubmit={handleFormSubmit}
				>

					<div className="mt-10">
						<label htmlFor="username" className="block text-xl font-bold px-3">Username or Email</label>
						<input
							value={usernameValue}
							className="focus:outline-none focus:border-black-900 rounded-full mt-2 px-5 py-3 text-lg px-3 py-2"
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setUsernameValue(e.target.value)
							}
							type="text"
							placeholder="Enter username or Email..."
						/>
					</div>
					<div>
						<label htmlFor="password" className="block text-base text-xl font-bold mt-5 mb-0 px-3">Password</label>
						<input
							value={passwordValue}
							className="focus:outline-none focus:border-gray-600 rounded-full mt-2 px-5 py-3 text-lg px-3 py-2"
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								setPasswordValue(e.target.value)
							}
							type="password"
							placeholder="Enter password..."
						/>
					</div>
					<div>
						<button type="submit" className="border-2 bg-purple-600 text-white px-5 py-2 rounded-md mt-10 block font-bold w-full hover:bg-transparent">
							LOGIN
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
