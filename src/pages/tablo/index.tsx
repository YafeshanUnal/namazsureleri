import { createClient } from "@supabase/supabase-js";
import { use, useEffect, useState } from "react";

export default function Tablo() {
	const supabaseUrl = "https://bnmykjjkoywrrpostdse.supabase.co";
	const supabaseKey =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJubXlramprb3l3cnJwb3N0ZHNlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NzY5NTA2NSwiZXhwIjoxOTkzMjcxMDY1fQ.oxpYW5Oex8DfKmTB2P-ets5lQ0hyFCob67_8eP2r1F0";
	const supabase = createClient(supabaseUrl, supabaseKey);
	const [user, setUser] = useState([]);
	const [removeName, setRemoveName] = useState("");
	const [addName, setAddName] = useState("");

	const fetchUser = async () => {
		let { data: user, error } = await supabase.from("user").select("*");
		setUser(user);
	};

	const addUser = async () => {
		const { data, error } = await supabase
			.from("user")
			.insert([{ name: addName, surname: "Ünal" }]);
	};

	const removeUser = async () => {
		const { data, error } = await supabase
			.from("user")
			.delete()
			.eq("name", removeName);
	};

	useEffect(() => {
		fetchUser();
	}, []);

	return (
		<div className=" w-screen h-screen items-center justify-center flex">
			{user.map((user) => (
				<div className="bg-emerald-400 p-4 w-min flex" key={user.id}>
					<span>Name: {user.name}</span>
				</div>
			))}
			<div className="flex flex-col space-y-2 pl-2">
				<input
					type="text"
					placeholder="Enter to name"
					onChange={(e) => {
						setAddName(e.target.value);
					}}
					className="bg-yellow-300 p-4 rounded-lg"
				/>
				<button
					onClick={() => addUser()}
					className="bg-blue-600 p-4 rounded-lg ml-2">
					Add User
				</button>
			</div>
			<div className="flex flex-col space-y-2 pl-2">
				<input
					type="text"
					placeholder="Enter to name wanted you"
					onChange={(e) => {
						setRemoveName(e.target.value);
					}}
					className="bg-yellow-300 p-4 rounded-lg"
				/>
				<button
					onClick={() => removeUser()}
					className="bg-blue-600 p-4 rounded-lg ml-2">
					Remove User
				</button>
			</div>
		</div>
	);
}
