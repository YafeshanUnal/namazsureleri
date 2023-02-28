import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
	return (
		<nav className="flex justify-end w-screen p-4 mb-8 bg-transparent items-center fixed">
			<ul className="flex gap-10">
				<li className="flex">
					<Link
						href="/"
						className="flex items-center after:transition-all duration-500 ease-in-out transform hover:scale-110">
						<Image
							width={24}
							height={24}
							src="home.svg"
							className="w-6 h-6 mr-2 "
							alt="Anasayfa"
						/>
						<span className="text-xl">Anasayfa</span>
					</Link>
				</li>
				<li className="flex">
					<Link
						href="/sureler"
						className="flex items-center after:transition-all duration-500 ease-in-out transform hover:scale-110">
						<Image
							width={24}
							height={24}
							src="quran.svg"
							className="w-6 h-6 mr-2"
							alt="Anasayfa"
						/>
						<span className="text-xl">Sureler</span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
