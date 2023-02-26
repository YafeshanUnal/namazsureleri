import { useState } from "react";
import Image from "next/image";
export default function Sureler() {

	const showBig = (id) => {
		setActive(!active);
		setActiveId(id);
	};

	const [active, setActive] = useState(false);
	const [activeId, setActiveId] = useState(1);

	const sureler = [
		{
			id: 1,
			name: "Fatiha",
			ayet: 7,
			turkce: "Rahmân (ve) rahîm (olan) Allah'ın adıyla.2. Hamd(övme ve övülme), âlemlerin Rabbi Allah'a mahsustur. 3. O, rahmândır ve rahîmdir. 4. Ceza gününün mâlikidir. 5.(Rabbimiz!) Ancak sana kulluk ederiz ve yalnız senden medet umarız. 6. Bize doğru yolu göster. 7. Kendilerine lütuf ve ikramda bulunduğun kimselerin yolunu; gazaba uğramışların ve sapmışların yolunu değil!",
			arapca: " بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ ٱلرَّحْمَنِ ٱلرَّحِيمِ مَٰلِكِ يَوْمِ ٱلدِّينِ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ اهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ صِرَٰطَ ٱلَّذِينَ أَنعَمتَ عَلَيهِمْ غَيْرِ ٱلْمَغضُوبِ عَلَيهِمْ وَلَا ٱلضَّٰلِّينَ",
			bilgi: "Mekke döneminde inmiştir. Yedi âyettir. Kur’an-ı Kerim’in ilk sûresi olduğu için “başlangıç” anlamına “Fâtiha” adını almıştır. Sûrenin ayrıca, “Ümmü’l-Kitab” (Kitab’ın özü) “es-Seb’ul-Mesânî” (Tekrarlanan yedi âyet) , “el-Esâs”,“el-Vâfiye”, “el-Kâfiye”, “el-Kenz”, “eş-Şifâ”, “eş-Şükr” ve “es-Salât” gibi başka adları da vardır. Kur’an’ın içerdiği esaslar öz olarak Fâtiha’da vardır. Zira övgü ve yüceltilmeye lâyık bir tek Allah’ın varlığı, onun hâkimiyeti, tek mabut oluşu, kulluğun ancak O’na yapılıp O’ndan yardım isteneceği, bu sûrede özlü bir şekilde ifade edilir. Fâtiha sûresi, aynı zamanda baştan başa eşsiz güzellikte bir dua, bir yakarıştır.",
			image: "/fatiha.jpg",
			voice: "fatiha.mp3",
		},
		{
			id: 2,
			name: "İhlas",
			ayet: 4,
			arapca: "قُلْ هُوَ اللَّهُ أَحَدٌ ٱللَّهُ ٱلصَّمَدُ لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
			turkce: "Diyin ki: O, Allah'tır, tek olan, O, özgün olan, O, hiçbir şeyi doğurmadı, hiçbir şeyi doğurulmadı, hiçbir şeyi yaratmadı.",
			bilgi: "Mekke döneminde inmiştir. Dört âyettir. Kur’an-ı Kerim’in ikinci sûresi olduğu için “birlik” anlamına “İhlas” adını almıştır. Sûrenin ayrıca, “es-Sâdık” (Gerçek) ve “es-Sâd” (Doğru) gibi başka adları da vardır.",
			image: "/ihlas.png",
			voice: "ihlas.mp3",
		},
		{
			id: 3,
			name: "Kevser",
			ayet: 3,
			arapca: "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ مِن شَرِّ مَا خَلَقَ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
			turkce: "Diyin ki: Ben, gün doğumunun şerrinden, yaratılanların şerrinden, yatağa yatarken ve yataktan kalkarken şerrinden, kötü düşmanlar�n şerrinden, kıskançların şerrinden korunuyorum.",
			bilgi: "Mekke döneminde inmiştir. Üç âyettir. Kur’an-ı Kerim’in üçüncü sûresi olduğu için “mükemmel” anlamına “Kevser” adını almıştır. Sûrenin ayrıca, “es-Sâdık” (Gerçek) ve “es-Sâd” (Doğru) gibi başka adları da vardır.",
			image: "/kevser.png",
			voice: "kevser.mp3",
		},

	];


	return (
		<div className="flex flex-col items-center justify-center w-full min-h-screen py-2">
			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-2xl font-bold pb-4">Sureler</h1>
				<div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
					{sureler.map((sure) => (
						<div
							key={sure.id}
							className="flex flex-col items-center justify-center w-96 p-6 m-4 text-left border-2 border-gray-200 rounded-xl shadow-xl"
						>
							<div className="flex flex-col items-center justify-center w-full h-1/2">
								<Image
									src={sure.image}
									alt={sure.name}
									width={200}
									height={200}
									className=""
								/>
								<h2 className="mt-4 text-2xl font-bold">{sure.name}</h2>
							</div>
							<div className="flex flex-col items-center justify-center w-full h-1/2">
								<p className="text-xl font-bold">Ayet Sayısı: {sure.ayet}</p>

								<button
									className="px-4 py-2 mt-4 text-xl font-bold text-white bg-blue-500 rounded-xl"
									onClick={() => showBig(sure.id)}
								>
									Oku
								</button>
							</div>
						</div>
					))}
				</div>
			</main>
			{active && (
				<div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
					<div className="relative flex flex-col items-center justify-center w-3/4 h-3/4 p-6 bg-white rounded-xl
						mobile:w-11/12 mobile:h-11/12
					">
						<button
							className="absolute top-0 right-0 z-50 p-4 text-2xl font-bold text-white bg-red-500 "
							onClick={() => showBig(activeId)}
						>
							X
						</button>
						<div className="flex flex-col items-center">
							<Image
								src={sureler[activeId - 1].image}
								alt={sureler[activeId - 1].name}
								width={200}
								height={200}
								className="tablet:hidden"
							/>
							<h2 className="text-2xl font-bold">
								{sureler[activeId - 1].name}
							</h2>
						</div>
						<div className="flex flex-col items-center justify-center w-full ">
							<div className="w-full p-10 flex flex-col gap-4  text-justify
								mobile:p-2
							">
								<p className="text-sm">
									<span className="font-bold"> Ayet Sayısı:</span> {sureler[activeId - 1].ayet}
								</p>
								<p className="text-sm">
									<span className="font-bold"> Bilgi:</span> {sureler[activeId - 1].bilgi}
								</p>
								<p className="text-sm ">
									<span className="font-bold"> Arapça:</span> {sureler[activeId - 1].arapca}
								</p>
								<p className="text-sm ">
									<span className="font-bold"> Türkçe Meali:</span> {sureler[activeId - 1].turkce}
								</p>
							</div>
							<audio controls>
								<source
									src={sureler[activeId - 1].voice}
									type="audio/mpeg"
								/>
								Your browser does not support the audio element.
							</audio>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
