
import { useState } from 'react';
import Header from '../components/Header';
import Day from '../components/Day';

export default function Calendar() {
	const [currentDate, setCurrentDate] = useState(new Date());

	const getDaysInMonth = (date) => {
		const year = date.getFullYear();
		const month = date.getMonth();
		return new Date(year, month + 1, 0).getDate();
	};

	const getFirstDayOfMonth = (date) => {
		const year = date.getFullYear();
		const month = date.getMonth();
		return new Date(year, month, 1).getDay();
	};

	const daysInMonth = getDaysInMonth(currentDate);
	const firstDayOfMonth = getFirstDayOfMonth(currentDate);

	const days = [];
	for (let i = 1; i <= daysInMonth; i++) {
		days.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
	}

	const emptyDays = [];
	for (let i = 0; i < firstDayOfMonth; i++) {
		emptyDays.push(i);
	}

	const firstDayOffset = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;
	const weeks = days.reduce((acc, day) => {
		const weekIndex = Math.floor((day.getDate() - 1 + firstDayOffset) / 7);
		if (!acc[weekIndex]) {
			acc[weekIndex] = [];
		}
		acc[weekIndex].push(day);
		return acc;
	}, []);

	return <>
		<div className="calendar">
			<Header currentDate={currentDate} setCurrentDate={setCurrentDate} />
			<table>
				<thead>
					<tr>
						<th>Mon</th>
						<th>Tue</th>
						<th>Wen</th>
						<th>Thu</th>
						<th>Fri</th>
						<th>Sat</th>
						<th>Sun</th>
					</tr>
				</thead>
				<tbody>
					{weeks.map((week) => (
						<tr key={week[0].getDate()}>
							{week.map((day) => (
								<td key={day.getDate()}><Day date={day} /></td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	</>;
};








