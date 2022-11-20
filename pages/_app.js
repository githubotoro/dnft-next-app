import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script src="https://platform.twitter.com/widgets.js" />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
