import { useRouter } from "next/router";
import contractAbi from "../api/contractAbi.json";
import { useState } from "react";
import { ethers } from "ethers";

const ContractDetails = () => {
	const router = useRouter();

	const CONTRACT_ADDRESS = "0xEE725C99ebDC4535a71734F45f2E23bac9d28592";
	const PRIVATE_KEY =
		"df20e876976adc6235ffb1c09380992ece75cc4eb4f904ff5ba5ebb84fb263dc";
	const CONTRACT_ABI = contractAbi.abi;

	console.log(CONTRACT_ADDRESS);

	const [totalDnfts, setTotalDnfts] = useState();
	const [dnfts, setDnfts] = useState();

	// Provider
	const alchemyProvider = new ethers.providers.AlchemyProvider(
		"maticmum",
		process.env.MATIC_MUMBAI
	);

	// Signer
	const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

	// Smart Contract
	const dnftContract = new ethers.Contract(
		CONTRACT_ADDRESS,
		CONTRACT_ABI,
		signer
	);

	const getDnfts = async () => {
		const _totalDnfts = await dnftContract._tokenIds();
		setTotalDnfts(_totalDnfts);

		for (let i = 1; i <= _totalDnfts; i++) {}
	};

	return <>{/* <h1>{contractAddress}</h1> */}</>;
};

export default ContractDetails;
