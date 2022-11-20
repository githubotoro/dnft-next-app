import { useRouter } from "next/router";

const DnftRender = () => {
	const router = useRouter();
	const userLinkName = router.query.userlink;
	const userLink = `https://${userLinkName}.vercel.app`;

	return (
		<>
			<iframe
				className="w-screen h-screen"
				loading="lazy"
				src={userLink}
				allowfullscreen="allowfullscreen"
				allow="fullscreen"
			></iframe>
		</>
	);
};

export default DnftRender;
