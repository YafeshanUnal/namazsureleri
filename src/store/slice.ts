import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	sure: {
		id: 0,
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
	namazVakitleri: {
		imsak: "05:43",
		gunes: "",
		ogle: "",
		ikindi: "",
		aksam: "",
		yatsi: "",
	},
};

const slice = createSlice({
	name: "slice",
	initialState,
	reducers: {
		setSure: (state, { payload }) => {
			state.sure = payload;
		},
		setNamazVakitleri: (state, { payload }) => {
			state.namazVakitleri = payload;
		},
	},
});

export const { setSure, setNamazVakitleri } = slice.actions;
export default slice.reducer;
