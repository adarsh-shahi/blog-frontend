import { ChangeEvent, FormEvent, useState } from "react";

export default function AddPost() {
	const [fileInput, setFileInput] = useState<File | null>(null);

	const [titleInput, setTitleInput] = useState("");

	const [descriptionInput, setDescriptionInput] = useState("");

	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!titleInput || !descriptionInput) return;
		const response = await fetch("v1/posts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({title: titleInput})
		});
	};

	return (
		<section className="w-full mx-auto">
			<form
				onSubmit={handleFormSubmit}
				className="flex flex-col gap-5 items-center"
			>
				<input
					onChange={(e: ChangeEvent<HTMLInputElement>) => {
						setFileInput(e.target!.files![0]);
					}}
					type="file"
				/>
				<input
					value={titleInput}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setTitleInput(e.target.value)
					}
					type="text"
					placeholder="Title"
				/>
				<input
					value={descriptionInput}
					onChange={(e: ChangeEvent<HTMLInputElement>) =>
						setDescriptionInput(e.target.value)
					}
					type="text"
					placeholder="Description"
					className="w-5/6 h-5/6"
				/>
				<button className="bg-blue-800 text-white px-5">POST</button>
			</form>
		</section>
	);
}
