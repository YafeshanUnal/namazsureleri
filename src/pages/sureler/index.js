import Image from "next/image";
export default function Sureler() {
	const sureler = [
		{
			id: 1,
			name: "Fatiha",
			ayet: 7,
			arapca: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
			turkce: "Allah'ın adıyla, Rahman'ın, Rahim'in",
			image: "/fatiha.jpg",
			voice: "fatiha.mp3",
		},
	];

	return (
		<div className="">
			{sureler.map((sure) => {
				return (
					<div className="flex flex-col gap-4 items-center justify-center" key={sure.id}>
						<div className="flex flex-col gap-4 items-center justify-center">
							<Image src={sure.image} alt={sure.name} className="w-[300px]"
								width={300} height={300}
							/>
							<h3 className="text-slate-400"><strong>Sure Adı: </strong>{sure.name}</h3>
							<h3 className="text-slate-400"><strong>Ayet Sayısı: </strong>{sure.ayet}</h3>
							<h3 className="text-slate-400"><strong>Arapçası: </strong>{sure.arapca}</h3>
							<h3 className="text-slate-400"><strong>Türkçe Meali: </strong>{sure.turkce}</h3>
						</div>
						<audio controls autoPlay>
							<source src={sure.voice} type="audio/mpeg" />
						</audio>
					</div>
				);
			})
			}
		</div>
	);


}
