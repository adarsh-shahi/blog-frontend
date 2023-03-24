import { ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

interface IProtectedRouteProps {
	children: ReactElement;
}
export default function ProtectedRoute({ children }: IProtectedRouteProps) {
	const { state } = useContext(UserContext)!;

	if (state.user.token) {
		return children;
	}
	return <Navigate to="/login" />;
}
