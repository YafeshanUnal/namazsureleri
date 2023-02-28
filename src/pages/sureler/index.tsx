import { setSure } from "../../store/slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Sureler() {
	const showBig = (id) => {
		setActive(!active);
		setActiveId(id);
	};

	const [active, setActive] = useState(false);
	const [activeId, setActiveId] = useState(1);
	const [sureler, setSureler] = useState([]);
	const { sure } = useSelector((state: any) => state.sure);
	const dispatch = useDispatch();

	// sayfa yüklendiğinde api'den verileri çek
	const getSureler = () => {
		fetch("https://api.acikkuran.com/surah/1")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				dispatch(setSure(data.data));
				// gelen veriyi array olarak setSureler'a at
				setSureler(data.data);
			});
	};

	useEffect(() => {
		getSureler();
	}, []);

	return (
		<div className="flex flex-col items-center justify-center w-full min-h-screen py-2">
			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-2xl font-bold pb-4">Sureler</h1>
			</main>
			{/* 
			{active && (
				<div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
					<div
						className="relative flex flex-col items-center justify-center w-3/4 h-3/4 p-6 bg-white rounded-xl
						mobile:w-11/12 mobile:h-11/12
					">
						<button
							className="absolute top-0 right-0 z-50 p-4 text-2xl font-bold text-white bg-red-500 "
							onClick={() => showBig(activeId)}>
							X
						</button>
						<div className="flex flex-col items-center">
							<Image
								src={ureler[activeId - 1].image}
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
							<div
								className="w-full p-10 flex flex-col gap-4  text-justify
								mobile:p-2
							">
								<p className="text-sm">
									<span className="font-bold"> Ayet Sayısı:</span>{" "}
									{sureler[activeId - 1].ayet}
								</p>
								<p className="text-sm">
									<span className="font-bold"> Bilgi:</span>{" "}
									{sureler[activeId - 1].bilgi}
								</p>
								<p className="text-sm ">
									<span className="font-bold"> Arapça:</span>{" "}
									{sureler[activeId - 1].arapca}
								</p>
								<p className="text-sm ">
									<span className="font-bold"> Türkçe Meali:</span>{" "}
									{sureler[activeId - 1].turkce}
								</p>
							</div>
							<audio controls>
								<source src={sureler[activeId - 1].voice} type="audio/mpeg" />
								Your browser does not support the audio element.
							</audio>
						</div>
					</div>
				</div> */}
		</div>
	);
}
