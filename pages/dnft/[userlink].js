import { useRouter } from "next/router";

const DnftRender = () => {
	const router = useRouter();
	const userLinkName = router.query.userlink;
	// const userLink = `https://${userLinkName}.vercel.app`;

	return (
		<>
			{/* <iframe
				className="w-screen h-screen"
				loading="lazy"
				src={userLink}
				allowfullscreen="allowfullscreen"
				allow="fullscreen"
			></iframe> */}

			<div className="flex flex-col w-full">
				<img
					className="w-full"
					src="https://image.lexica.art/md/07303708-b92a-4dac-8a0d-ef60ebf2e842"
				></img>

				<center>
					<div className="p-4 -mt-48 items-center">
						<div className="w-full h-fit rounded-lg drop-shadow-lg border-8 border-indigo-800 bg-gradient-to-r from-blue-500 to-sky-500">
							<div className="p-1 text-md font-bold text-white">
								Something is brewing here!
								<br />
								CTRL + CLICK&nbsp;
								<a
									className="underline text-black"
									href="https://twitter.com/yupuday"
									target="_blank"
									rel="noreferrer"
								>
									here
								</a>
								&nbsp;to know more!
								<br />
								👀👀👀
							</div>
						</div>
					</div>
				</center>
			</div>
		</>
	);
};

export default DnftRender;
