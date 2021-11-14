import { authService } from "fbase";
import { useHistory } from "react-router"; //Log out後rootページ遷移のためimport

const Profile = () => {
	const history = useHistory();

	const onLogOutClick = () => {
		authService.signOut();
		history.push("/"); //jsコードを活用したLog out後rootページ遷移
	};

	return (
		<>
			<button onClick={onLogOutClick}>Log Out</button>
		</>
	);
};

export default Profile;
