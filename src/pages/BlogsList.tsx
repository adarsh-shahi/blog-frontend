import { useNavigate } from "react-router-dom";

export default function BlogsList() {
	const navigate = useNavigate();
	const addPostButtonHanlder = () => {
		navigate("/post");
	};
	return (
		<div className="px-10 py-6 bg-gray-900 w-screen">
			<div className="flex items-center justify-between">
				<h1 className="text-white text-9xl font-extrabold">THE BLOG</h1>
				<button
					onClick={addPostButtonHanlder}
					className="text-black bg-white font-extrabold px-5 py-2 rounded-full"
				>
					ADD POST
				</button>
			</div>
		</div>
	);
}
