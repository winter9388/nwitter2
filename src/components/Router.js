import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ isLoggedIn }) => {
	return (
		<Router>
			{isLoggedIn && <Navigation />}
			<Switch>
				{isLoggedIn ? (
					<>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/profile">
							<Profile />
						</Route>
					</>
				) : (
					<Route exact path="/">
						<Auth />
					</Route>
				)}
				{/* <Redirect from="*" to="/" />  Redirectを活用したLog out後のrootページへ遷移コード(redirectのimportが必要)*/}
			</Switch>
		</Router>
	);
};

export default AppRouter;
