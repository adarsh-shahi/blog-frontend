import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import SideNavigation from "./components/SideNavigation";
import BlogsList from "./pages/BlogsList";
import Error from "./pages/Error";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";

function App() {
	return (
		<BrowserRouter>
			<div className="flex">
				<Routes>
					<Route
						path="/"
						element={
							<ProtectedRoute>
								<SideNavigation />
							</ProtectedRoute>
						}
					>
						<Route index element={<BlogsList />} />
						<Route path="/search" element={<Search />} />
						<Route path="/explore" element={<Explore />} />
						<Route path="/profile" element={<Profile />} />
					</Route>
					<Route path="/login" element={<Login />} />
					<Route path="*" element={<Error />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
