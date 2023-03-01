import { setSure } from "../../store/slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRedux } from "../../store/hooks";
export default function Sureler() {
	const showBig = (id) => {
		setActive(!active);
		setActiveId(id);
	};

	const [active, setActive] = useState(false);
	const [activeId, setActiveId] = useState(1);
	const [sureler, setSureler] = useState([]);
	const { sure } = useRedux();
	const dispatch = useDispatch();

	// sayfa yüklendiğinde api'den verileri çek
	const getSureler = (id: number) => {
		fetch("https://api.acikkuran.com/surah/" + id)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				dispatch(setSure(data.data));
				// gelen veriyi array olarak setSureler'a at
				setSureler(data.data);
			});
	};
	useEffect(() => {
		getSureler(113);
	}, []);

	/**
	 * id: 0,
		name: "",
		slug: "",
		verse_count: 0,
		audio: {
			mp3: "",
			duration: 0,
		},
		verses: [
			{
				id: 0,
				surah_id: 0,
				verse_number: 0,
				verse: "",
				transcription: "",
				translation: {
					id: 133504,
					author: {
						id: 50,
						name: "",
						description: "",
						language: "",
					},
					text: "",
					footnotes: [
						{
							id: 0,
							number: 0,
							text: "",
						},
					],
				},
			},
		],
	},
	 * 
	 */

	return (
		<div className="flex flex-col items-center justify-center w-full min-h-screen py-2">
			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-2xl font-bold pb-4">Sureler</h1>
				<div className="flex flex-col items-center bg-slate-400 justify-center p-10 rounded-lg h-full">
					<div className="">{sure.name}</div>
					<div className="">{sure.slug}</div>
					{sure.verses.map((verse) => {
						return (
							<div
								key={sure.verses.id}
								className="flex flex-col items-center justify-center w-full h-full bg-emerald-200">
								<div className="">{verse.verse_number}</div>
								<div className="">{verse.verse}</div>
								<div className="">{verse.transcription}</div>
								<div className="">{verse.translation.text}</div>
							</div>
						);
					})}
				</div>
				<div className="flex flex-col items-center justify-center w-full h-full"></div>
			</main>
		</div>
	);
}
