import { ChangeEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { ACTION_TYPE } from "../context/userContext";

export default function Login() {
	const [usernameValue, setUsernameValue] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const { dispatch } = useContext(UserContext!)!;
	const navigate = useNavigate();

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!usernameValue || !emailValue) return;
		dispatch({
			type: ACTION_TYPE.ADD_USER,
			payload: {
				username: usernameValue,
				email: emailValue,
			},
		});
		navigate("/");
	};

	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<input
					value={usernameValue}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setUsernameValue(e.target.value)
					}
					type="text"
				/>
				<input
					value={emailValue}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setEmailValue(e.target.value)
					}
					type="text"
				/>
				<button>Login</button>
			</form>
		</div>
	);
}
