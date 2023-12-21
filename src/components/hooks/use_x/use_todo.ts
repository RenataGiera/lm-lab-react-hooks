import { useEffect, useState } from 'react';
import { isError } from '../../../helpers/is_error';


export const useTodo = <T>(endpoint: string) => {
	const [data, setData] = useState<T | null>(null);
	const [isFetching, setIsFetching] = useState(true);


	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(endpoint);
				setIsFetching(false);
				if (response.status === 200) {
					const json = await response.json();
					setData(json);
				}
			} catch (e) {
				setIsFetching(false);

				console.log(isError(e) ? e.message : 'Unknown error!');
			}
		};
		fetchData();
	}, [endpoint]);

	return [data, isFetching]


};
