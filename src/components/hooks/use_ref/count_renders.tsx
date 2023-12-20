import { useState } from 'react';
import { useRef } from 'react'

export const CountRenders = () => {
	const [value, setValue] = useState('');
	const renderCount = useRef(1);

	return (
		<>
			<h2>useRef</h2>

			<input
				value={value}
				type='text'
				onChange={(e) => setValue(e.target.value)}
			/>

			<p>{value}</p>
			<p>I have rendered {renderCount.current++} times</p>
		</>
	);
};
