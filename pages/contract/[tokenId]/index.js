import { useRouter } from "next/router";
import contractAbi from "../../api/contractAbi.json";
import getContractAbi from "../../contractAbi";
import { useState } from "react";
import { ethers } from "ethers";
import Script from "next/script";

const NftDetails = () => {
	const router = useRouter();

	const TOKEN_ID = parseInt(router.query.tokenId);
	const CONTRACT_ADDRESS = "0xEE725C99ebDC4535a71734F45f2E23bac9d28592";
	const PRIVATE_KEY =
		"df20e876976adc6235ffb1c09380992ece75cc4eb4f904ff5ba5ebb84fb263dc";
	const CONTRACT_ABI = contractAbi.abi;

	const [dnftUri, setDnftUri] = useState();

	// Provider
	const alchemyProvider = new ethers.providers.AlchemyProvider(
		"maticmum",
		process.env.MATIC_MUMBAI
	);

	// Signer
	const signer = new ethers.Wallet(
		"df20e876976adc6235ffb1c09380992ece75cc4eb4f904ff5ba5ebb84fb263dc",
		alchemyProvider
	);

	// Smart Contract
	const dnftContract = new ethers.Contract(
		"0xEE725C99ebDC4535a71734F45f2E23bac9d28592",
		CONTRACT_ABI,
		signer
	);

	const getDnftUri = async () => {
		const _dnftUri = await dnftContract.getTokenUri(TOKEN_ID);
		setDnftUri(_dnftUri);
	};

	return (
		<>
			<center>
				<div className="max-w-2xl ">
					<a
						className="twitter-timeline"
						href="https://twitter.com/yupuday"
					>
						Tweets by yupuday
					</a>
				</div>
			</center>
		</>
	);
};

export default NftDetails;
