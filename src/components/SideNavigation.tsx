import { NavLink, Outlet } from "react-router-dom";

export default function SideNavigation() {
	return (
		<>
			<section className="bg-gray-800 text-white px-4 h-screen text-2xl pt-10 flex flex-col gap-5">
				<NavLink to="/">Home</NavLink>
				<NavLink to="/search">Search</NavLink>
				<NavLink to="/explore">Explore</NavLink>
				<NavLink to="/profile">Profile</NavLink>
			</section>
			<Outlet />
		</>
	);
}
