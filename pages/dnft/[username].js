import { useRouter } from "next/router";

const DnftRender = () => {
	const router = useRouter();
	const username = router.query.username;
	const twitterLink = `https://twitter.com/${username}`;

	return (
		<>
			<center>
				<div className="max-w-2xl ">
					<a className="twitter-timeline" href={twitterLink}>
						Tweets by {username}
					</a>
				</div>
			</center>
		</>
	);
};

export default DnftRender;
