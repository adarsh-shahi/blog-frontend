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

	const inputClass = "focus:outline-none rounded-full px-5 py-3 text-2xl";

	return (
		<div className=" bg-gray-900 w-screen h-screen">
			<form
				className="flex flex-col items-center gap-10 mt-32"
				onSubmit={handleFormSubmit}
			>
				<input
					value={usernameValue}
					className={inputClass}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setUsernameValue(e.target.value)
					}
					type="text"
				/>
				<input
					value={passwordValue}
					className={inputClass}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setPasswordValue(e.target.value)
					}
					type="password"
				/>
				<button className="bg-purple-600 text-white px-5 py-2 rounded-full font-bold ">
					LOGIN
				</button>
			</form>
		</div>
	);
}
