import { ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { ACTION_TYPE } from "../context/userContext";

interface IProtectedRouteProps {
	user: { username?: string; email?: string; token?: string };
	children: ReactElement;
}
export default function ProtectedRoute({
	user,
	children,
}: IProtectedRouteProps) {
	const { dispatch } = useContext(UserContext)!;
	const token = localStorage.getItem("userToken");
	if (token) {
		dispatch({
			type: ACTION_TYPE.ADD_USER,
			payload: {
				user: {
					token,
				},
			},
		});
		return children;
	}
	return <Navigate to="/login" />;
}
