import { useState } from 'react';
import MonthCalendar from '../components/MonthCalendar';

export default function MonthPicker() {
	const [selectedMonth, setSelectedMonth] = useState(new Date());

	const handleMonthChange = (event) => {
		const selectedDate = new Date(event.target.value);
		setSelectedMonth(selectedDate);
	};

	return (
		<div>
			<label htmlFor="month">Select a month:</label>
			<input type="month" id="month" value={selectedMonth.toISOString().slice(0, 7)} onChange={handleMonthChange} />
			<MonthCalendar month={selectedMonth} />
		</div>
	);
};









