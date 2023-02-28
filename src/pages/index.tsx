import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
	const [date, setDate] = useState("");
	const hicriMonth = [
		"Muharrem",
		"Safer",
		"Rebiülevvel",
		"Rebiülahir",
		"Cemaziyelevvel",
		"Cemaziyelahir",
		"Recep",
		"Şaban",
		"Ramazan",
		"Şevval",
		"Zilkade",
		"Zilhicce",
	];

	useEffect(() => {
		const date = new Date().toLocaleDateString("en-US", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
			calendar: "islamic",
		});
		setDate(date);
	}, []);

	return (
		<div
			className="flex flex-col gap-10 items-center justify-center w-screen"
			style={{ background: "/kuran.jpg" }}>
			{/* Hicri takvim card */}

			<div className="flex flex-col items-center justify-center w-1/2 h-full p-6 bg-gray-400 rounded-xl shadow-xl">
				<div className="flex flex-col items-center justify-center w-full h-1/2 relative">
					<Image
						src="/crescent-moon.svg"
						alt="Hicri Takvim"
						width={200}
						height={200}
						className="w-20 h-20 absolute left-0 top-0"
					/>
					<h2 className="mt-4 text-2xl font-bold">Hicri Takvim</h2>
					<div className="flex flex-col items-center justify-center w-full h-1/2 text-2xl font-bold">
						{/* date in gününü al ve ayı getir */}
						<span className="flex text-2x font-medium space-x-2">
							<p className="">{date.split("/")[0]}</p>
							<p className="">{hicriMonth[parseInt(date.split("/")[1]) - 1]}</p>
							<p className="">{date.split("/")[2]}</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
