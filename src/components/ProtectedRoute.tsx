import { ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface IProtectedRouteProps {
	user: { username?: string; email?: string };
	children: ReactElement;
}
export default function ProtectedRoute({
	user,
	children,
}: IProtectedRouteProps) {
	console.log(user);
	if (!user?.email || !user?.email) return <Navigate to="/login" />;
	return children;
}
