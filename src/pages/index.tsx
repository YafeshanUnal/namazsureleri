import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const ramazan = new Date("2023-03-23");

	const ramazanDay = () => {
		const today = new Date();
		const diff = ramazan.getTime() - today.getTime();
		const day = 1000 * 60 * 60 * 24;
		const hour = 1000 * 60 * 60;
		const minute = 1000 * 60;
		const dayLeft = Math.floor(diff / day);
		const hourLeft = Math.floor((diff % day) / hour);
		const minuteLeft = Math.floor((diff % hour) / minute);
		const secondLeft = Math.floor((diff % minute) / 1000);
		const timeLeft = `${dayLeft} gün ${hourLeft} saat ${minuteLeft} dakika ${secondLeft} saniye`;

		// vakit sürekli olarak güncellensin
		setTimeout(ramazanDay, 1000);

		return timeLeft;
	};

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
		const timer = setInterval(() => {
			setTime(ramazanDay());
		}, 1000);
		return () => clearInterval(timer);
	}, []);
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
			className="flex flex-col gap-10 items-center justify-center w-full p-4"
			style={{ background: "/kuran.jpg" }}>
			{/* Hicri takvim card */}
			<div className="flex flex-col relative items-center justify-center w-1/3 tablet:w-1/2 mobile:w-full h-full p-6 bg-gray-400 rounded-xl shadow-xl">
				<Image
					src="/crescent-moon.svg"
					alt="Hicri Takvim"
					width={200}
					height={200}
					className="w-20 h-20 absolute left-1 top-1 mobile:relative "
				/>
				<div className="flex flex-col items-center justify-center w-full h-1/2 relative">
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
				{/* Ramazan'a kalan gün sayısı */}
				<div className="flex flex-col items-center justify-center w-full h-1/2 relative">
					<h2 className="mt-4 text-2xl font-bold mobile:text-lg">
						Ramazanın Başlamasına
					</h2>
					<div className="flex items-center justify-center w-full h-1/2 text-2xl font-bold"></div>
					<span className="flex text-2x font-medium space-x-2">
						<p className="">{ramazanDay()}</p>
					</span>
				</div>
			</div>
			{/* Bir ayet bir Hadis bir dau bölümü */}
			<div className="flex space-x-3 tablet:flex-col items-start justify-center w-2/3 tablet:w-1/2 mobile:w-full h-full p-6 bg-gray-400 rounded-xl shadow-xl">
				<div className="w-full">
					<h2 className="mt-4 text-2xl font-bold">Bir Ayet</h2>
					<div className="flex flex-col items-center justify-center w-full h-1/2 relative">
						<p className="text-xl ">
							“Ey iman edenler, Allah’a karşı gelmeyin ve onu inkar etmeyin.
							Çünkü Allah, sizin için saklanan şeyleri bilir. Siz de onun için
							saklanan şeyleri bilirsiniz. Allah, her şeyi bilendir, her şeyi
							görendir.”
						</p>
						<p className="text-xl ">- (Enbiya, 105)</p>
					</div>
				</div>
				<div className="w-full">
					<h2 className="mt-4 text-2xl font-bold">Bir Hadis</h2>
					<div className="flex flex-col items-center justify-center w-full h-1/2 relative">
						<p className="text-xl">
							“İnsanın en büyük ihtiyacı, Allah’ın rızasını kazanmaktır. İnsanın
							en büyük zenginliği, Allah’ın rızasını kazanmaktır. İnsanın en
							büyük korkusu, Allah’ın rızasını kaybetmektir. İnsanın en büyük
							acısı, Allah’ın rızasını kaybetmektir.”
						</p>
						<p className="text-xl">- (İbn Mace)</p>
					</div>
				</div>
				<div className="w-full">
					<h2 className="mt-4 text-2xl font-bold">Bir Dua</h2>
					<div className="flex flex-col items-center justify-center w-full h-1/2 relative">
						<p className="text-xl">
							“Ey Allahım! Senin rızanı kazanmak için, Senin rızanı kaybetmekten
							daha büyük bir korku yoktur.
						</p>
						<p className="text-xl">- (İbn Mace)</p>
					</div>
				</div>
			</div>
		</div>
	);
}
