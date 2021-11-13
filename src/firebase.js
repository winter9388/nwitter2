import firebase from "firebase/compat/app";

//セキュリティキー保安のため、.envから各種キーを引っ張ってくる。　.envファイルはgithubにアップロードしない　（.gitignoreにリスト化）
//비밀키 보안을 위해 .env파일에서 각종 보안키를 변수를 통해 가져옴, .env파일은 깃허브에 업로즈 하지 않는 방식으로 보안강화 (.gitignore)
const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};

export default firebase.initializeApp(firebaseConfig);
