import { ChangeEvent, useState } from "react";

export default function Login() {
	const [inputValue, setInputValue] = useState("");
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

  }
	return (
		<div>
			<form onSubmit={handleFormSubmit}>
				<input
					value={inputValue}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setInputValue(e.target.value)
					}
					type="text"
				/>
				<button>Login</button>
			</form>
		</div>
	);
}
