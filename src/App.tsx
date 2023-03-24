import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import SideNavigation from "./components/SideNavigation";
import { UserContext } from "./context/userContext";
import BlogsList from "./pages/BlogsList";
import Error from "./pages/Error";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

function App() {
	const value = useContext(UserContext);
	console.log(value);
	return (
		<BrowserRouter>
			<div className="flex">
				<Routes>
					<Route path="/" element={<SideNavigation />}>
						<Route
							index
							element={
								<ProtectedRoute user={value?.state.user!}>
									<BlogsList />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/search"
							element={
								<ProtectedRoute user={value?.state.user!}>
									<Search />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/explore"
							element={
								<ProtectedRoute user={value?.state.user!}>
									<Explore />
								</ProtectedRoute>
							}
						/>
						<Route
							path="/profile"
							element={
								<ProtectedRoute user={value?.state.user!}>
									<Profile />
								</ProtectedRoute>
							}
						/>
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
