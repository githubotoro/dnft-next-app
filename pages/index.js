import Head from "next/head";
import Image from "next/image";

export default function Home() {
	// const cta = () => {
	// 	return (
	// 		<>
	// 			<section class="overflow-hidden bg-gray-900 sm:grid sm:grid-cols-2 sm:items-center">
	// 				<div class="p-8 md:p-12 lg:px-16 lg:py-24">
	// 					<div class="mx-auto max-w-xl text-center sm:text-left">
	// 						<h2 class="text-2xl font-bold text-white md:text-5xl">
	// 							Can your NFT be updated? Our DNFT can!
	// 						</h2>

	// 						<p class="hidden text-gray-400 md:mt-4 md:block">
	// 							This project aims to bring the best of Web2
	// 							world in Web3 using DNFTs that can be upgraded
	// 							as well as interacted with. Well, don't take our
	// 							word for it. Try the demo now! 👀
	// 						</p>

	// 						<div class="mt-4 md:mt-8">
	// 							<a
	// 								class="inline-block rounded-lg drop-shadow-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
	// 								href="/get-started"
	// 							>
	// 								Get Started
	// 							</a>
	// 						</div>
	// 					</div>
	// 				</div>

	// 				<img
	// 					alt="Violin"
	// 					src="https://image.lexica.art/md/e14dc261-3a6f-46f9-a797-8831d9139084"
	// 					class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-tl-[30px] md:h-[calc(100%_-_4rem)] md:rounded-tl-[60px]"
	// 				/>
	// 			</section>
	// 		</>
	// 	);
	// };

	// const banner = () => {
	// 	return (
	// 		<>
	// 			<section class="bg-gray-900 text-white">
	// 				<div class="mx-auto max-w-screen-xl px-4 py-20 lg:flex lg:items-center">
	// 					<div class="mx-auto max-w-3xl text-center">
	// 						<h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
	// 							<div class="text-7xl mb-5">Dynamic NFTs</div>

	// 							<span class="sm:block">
	// 								{" "}
	// 								More than just JPGs and PNGs{" "}
	// 							</span>
	// 						</h1>

	// 						<p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
	// 							This project aims to bring the best of Web2
	// 							world in Web3 using DNFTs that can be upgraded
	// 							as well as interacted with. Well, don't take our
	// 							word for it. Try the demo now! 👀
	// 						</p>

	// 						<div class="mt-8 flex flex-wrap justify-center gap-4">
	// 							<a
	// 								class="block w-full rounded-lg drop-shadow-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
	// 								href="/get-started"
	// 							>
	// 								Get Started
	// 							</a>

	// 							<a
	// 								class="block w-full rounded-lg drop-shadow-md border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
	// 								href="/about"
	// 							>
	// 								Learn More
	// 							</a>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</section>
	// 		</>
	// 	);
	// };

	// const announcement = () => {
	// 	return (
	// 		<>
	// 			<div class="bg-indigo-600 px-4 py-3 text-white ">
	// 				<p class="text-center text-sm font-medium">
	// 					DNFTs are live on Polygon Mumbai Testnet.&nbsp;
	// 					<a
	// 						class="underline"
	// 						href="https://mumbai.polygonscan.com/address/0xe7d55af9f663a4c5c5bbb0cfb155b3ea9a6b9070"
	// 						target="_blank"
	// 					>
	// 						{" "}
	// 						Check them out &rarr;{" "}
	// 					</a>
	// 				</p>
	// 			</div>
	// 		</>
	// 	);
	// };

	// const cta2 = () => {
	// 	return (
	// 		<>
	// 			<section>
	// 				<div class="bg-gray-900 mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
	// 					<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
	// 						<div class="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24 rounded-2xl">
	// 							<div class="mx-auto max-w-xl text-center">
	// 								<h2 class="text-2xl font-bold text-white md:text-3xl">
	// 									Lorem, ipsum dolor sit amet consectetur
	// 									adipisicing elit
	// 								</h2>

	// 								<p class="hidden text-white/90 sm:mt-4 sm:block">
	// 									Lorem ipsum dolor sit amet, consectetur
	// 									adipiscing elit. Et, egestas tempus
	// 									tellus etiam sed. Quam a scelerisque
	// 									amet ullamcorper eu enim et fermentum,
	// 									augue. Aliquet amet volutpat quisque ut
	// 									interdum tincidunt duis.
	// 								</p>

	// 								<div class="mt-4 md:mt-8">
	// 									<a
	// 										href="#"
	// 										class="inline-block rounded-lg drop-shadow-md border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
	// 									>
	// 										Get Started Today
	// 									</a>
	// 								</div>
	// 							</div>
	// 						</div>

	// 						<div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
	// 							<img
	// 								alt="Portal"
	// 								src="https://image.lexica.art/md/6054270f-5a7b-4e04-a18a-ffb6d29d2a7a"
	// 								class="h-40 w-full object-cover sm:h-56 md:h-full"
	// 							/>

	// 							<img
	// 								alt="Portal"
	// 								src="https://image.lexica.art/md/f67e242c-25f6-47b6-9379-55183e4ee0ae"
	// 								class="h-40 w-full object-cover sm:h-56 md:h-full"
	// 							/>
	// 						</div>
	// 					</div>
	// 				</div>
	// 			</section>
	// 		</>
	// 	);
	// };

	// const cost = () => {
	// 	return (
	// 		<>
	// 			<section class="bg-gray-900">
	// 				<div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
	// 					<div class="mx-auto max-w-3xl text-center">
	// 						<h2 class="text-3xl font-bold text-white sm:text-5xl">
	// 							Cost Analysis
	// 						</h2>

	// 						<p class="mt-4 text-gray-400 sm:text-xl">
	// 							Lorem ipsum dolor sit amet consectetur
	// 							adipisicing elit. Ratione dolores laborum labore
	// 							provident impedit esse recusandae facere libero
	// 							harum sequi.
	// 						</p>
	// 					</div>

	// 					<div class="mt-8 sm:mt-12">
	// 						<dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
	// 							<div class="flex flex-col rounded-lg border px-4 py-8 text-center border-gray-800">
	// 								<dt class="order-last text-lg font-medium text-gray-400">
	// 									Total Sales
	// 								</dt>

	// 								<dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
	// 									$4.8m
	// 								</dd>
	// 							</div>

	// 							<div class="flex flex-col rounded-lg border px-4 py-8 text-center order-gray-800">
	// 								<dt class="order-last text-lg font-medium text-gray-400">
	// 									Official Addons
	// 								</dt>

	// 								<dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
	// 									24
	// 								</dd>
	// 							</div>

	// 							<div class="flex flex-col rounded-lg border  px-4 py-8 text-center border-gray-800">
	// 								<dt class="order-last text-lg font-medium text-gray-400">
	// 									Total Addons
	// 								</dt>

	// 								<dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
	// 									86
	// 								</dd>
	// 							</div>
	// 						</dl>
	// 					</div>
	// 				</div>
	// 			</section>
	// 		</>
	// 	);
	// };

	// const faqs = () => {
	// 	return (
	// 		<>
	// 			<div className="bg-gray-900">
	// 				<center>
	// 					<div class="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white max-w-5xl">
	// 						<details class="group p-6" open>
	// 							<summary class="flex cursor-pointer items-center justify-between">
	// 								<h2 class="text-lg font-medium text-gray-900">
	// 									Lorem ipsum dolor sit amet consectetur
	// 									adipisicing?
	// 								</h2>

	// 								<span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
	// 									<svg
	// 										xmlns="http://www.w3.org/2000/svg"
	// 										class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
	// 										fill="none"
	// 										viewBox="0 0 24 24"
	// 										stroke="currentColor"
	// 										stroke-width="2"
	// 									>
	// 										<path
	// 											stroke-linecap="round"
	// 											stroke-linejoin="round"
	// 											d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
	// 										/>
	// 									</svg>

	// 									<svg
	// 										xmlns="http://www.w3.org/2000/svg"
	// 										class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
	// 										fill="none"
	// 										viewBox="0 0 24 24"
	// 										stroke="currentColor"
	// 										stroke-width="2"
	// 									>
	// 										<path
	// 											stroke-linecap="round"
	// 											stroke-linejoin="round"
	// 											d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
	// 										/>
	// 									</svg>
	// 								</span>
	// 							</summary>

	// 							<p class="mt-4 leading-relaxed text-gray-700">
	// 								Lorem ipsum dolor sit amet consectetur,
	// 								adipisicing elit. Ab hic veritatis molestias
	// 								culpa in, recusandae laboriosam neque
	// 								aliquid libero nesciunt voluptate dicta quo
	// 								officiis explicabo consequuntur distinctio
	// 								corporis earum similique!
	// 							</p>
	// 						</details>

	// 						<details class="group p-6">
	// 							<summary class="flex cursor-pointer items-center justify-between">
	// 								<h2 class="text-lg font-medium text-gray-900">
	// 									Lorem ipsum dolor sit amet consectetur
	// 									adipisicing?
	// 								</h2>

	// 								<span class="relative ml-1.5 h-5 w-5 flex-shrink-0">
	// 									<svg
	// 										xmlns="http://www.w3.org/2000/svg"
	// 										class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
	// 										fill="none"
	// 										viewBox="0 0 24 24"
	// 										stroke="currentColor"
	// 										stroke-width="2"
	// 									>
	// 										<path
	// 											stroke-linecap="round"
	// 											stroke-linejoin="round"
	// 											d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
	// 										/>
	// 									</svg>

	// 									<svg
	// 										xmlns="http://www.w3.org/2000/svg"
	// 										class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
	// 										fill="none"
	// 										viewBox="0 0 24 24"
	// 										stroke="currentColor"
	// 										stroke-width="2"
	// 									>
	// 										<path
	// 											stroke-linecap="round"
	// 											stroke-linejoin="round"
	// 											d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
	// 										/>
	// 									</svg>
	// 								</span>
	// 							</summary>

	// 							<p class="mt-4 leading-relaxed text-gray-700">
	// 								Lorem ipsum dolor sit amet consectetur,
	// 								adipisicing elit. Ab hic veritatis molestias
	// 								culpa in, recusandae laboriosam neque
	// 								aliquid libero nesciunt voluptate dicta quo
	// 								officiis explicabo consequuntur distinctio
	// 								corporis earum similique!
	// 							</p>
	// 						</details>
	// 					</div>
	// 				</center>
	// 			</div>
	// 		</>
	// 	);
	// };

	// const footer = () => {
	// 	return (
	// 		<>
	// 			<div class="bg-gray-900 pt-8">
	// 				<footer
	// 					aria-label="Site Footer"
	// 					class="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white"
	// 				>
	// 					<div class="mx-auto max-w-screen-xl px-4 pt-20 pb-12 sm:px-6 lg:px-8">
	// 						<div class="mx-auto max-w-3xl text-center">
	// 							<p class="text-4xl font-extrabold sm:text-6xl">
	// 								Customise Your Product
	// 							</p>

	// 							<a
	// 								class="mt-8 inline-block rounded-full border border-white/25 px-12 py-3 text-sm font-medium hover:bg-white hover:text-red-500"
	// 								href=""
	// 							>
	// 								Get Started
	// 							</a>
	// 						</div>

	// 						<div class="mt-6 border-t border-white/25 pt-4 sm:flex sm:items-center sm:justify-between">
	// 							<nav
	// 								aria-label="Footer Nav"
	// 								class="flex justify-center gap-4 text-sm font-medium sm:justify-start"
	// 							>
	// 								<a href="" class="hover:opacity-75">
	// 									{" "}
	// 									FAQs{" "}
	// 								</a>
	// 								<a href="" class="hover:opacity-75">
	// 									{" "}
	// 									Contact{" "}
	// 								</a>
	// 								<a href="" class="hover:opacity-75">
	// 									{" "}
	// 									Returns Policy{" "}
	// 								</a>
	// 							</nav>

	// 							<div class="mt-6 flex justify-center gap-6 sm:mt-0 sm:justify-end">
	// 								<a
	// 									class="rounded-full border border-white/25 p-2 hover:opacity-75"
	// 									href=""
	// 									target="_blank"
	// 									rel="noreferrer"
	// 								>
	// 									<span class="sr-only"> Facebook </span>

	// 									<svg
	// 										class="h-4 w-4"
	// 										fill="currentColor"
	// 										viewBox="0 0 24 24"
	// 										aria-hidden="true"
	// 									>
	// 										<path
	// 											fill-rule="evenodd"
	// 											d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
	// 											clip-rule="evenodd"
	// 										/>
	// 									</svg>
	// 								</a>

	// 								<a
	// 									class="rounded-full border border-white/25 p-2 hover:opacity-75"
	// 									href=""
	// 									target="_blank"
	// 									rel="noreferrer"
	// 								>
	// 									<span class="sr-only"> Instagram </span>

	// 									<svg
	// 										class="h-4 w-4"
	// 										fill="currentColor"
	// 										viewBox="0 0 24 24"
	// 										aria-hidden="true"
	// 									>
	// 										<path
	// 											fill-rule="evenodd"
	// 											d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
	// 											clip-rule="evenodd"
	// 										/>
	// 									</svg>
	// 								</a>

	// 								<a
	// 									class="rounded-full border border-white/25 p-2 hover:opacity-75"
	// 									href=""
	// 									target="_blank"
	// 									rel="noreferrer"
	// 								>
	// 									<span class="sr-only"> Twitter </span>

	// 									<svg
	// 										class="h-4 w-4"
	// 										fill="currentColor"
	// 										viewBox="0 0 24 24"
	// 										aria-hidden="true"
	// 									>
	// 										<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
	// 									</svg>
	// 								</a>
	// 							</div>
	// 						</div>
	// 					</div>
	// 				</footer>
	// 			</div>
	// 		</>
	// 	);
	// };

	return (
		<>
			Home
			{/* {announcement()}
			{banner()}
			{cta()}
			{cta2()}
			{cost()}
			{faqs()}
			{footer()} */}
		</>
	);
}
