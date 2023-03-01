import { useSelector } from "react-redux";

export const useRedux = () => {
	const sure = useSelector((state: any) => state.slice.sure);
	const namazVakitleri = useSelector(
		(state: any) => state.slice.namazVakitleri
	);
	return { sure, namazVakitleri };
};
