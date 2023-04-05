export default function MonthCalendar({ month }) {
	const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
	const startDay = new Date(month.getFullYear(), month.getMonth(), 0).getDay();
	const weeks = Math.ceil((daysInMonth + startDay) / 7);

	const weekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

	const renderDays = (weekdays) => {
		const rows = [];
		let cells = [];
		for (let day = 1; day <= daysInMonth; day++) {
			const date = new Date(month.getFullYear(), month.getMonth(), day);
			if (day === 1) {
				for (let i = 0; i < date.getDay(); i++) {
					cells.push(<td key={`empty-${i}`}>&nbsp;</td>);
				}
			}
			cells.push(<td key={day}>{day}</td>);
			if (date.getDay() === 6 || day === daysInMonth) {
				rows.push(<tr key={day}>{cells}</tr>);
				cells = [];
			}
		}
		return rows;
	};

	const renderWeeks = () => {
		const weeksArray = [];
		for (let i = 0; i < weeks; i++) {
			weeksArray.push(renderDays(weekdays)[i]);
		}
		return (
			<div>
				<table>
					<thead>
						<tr>
							{weekdays.map((weekday) => (
								<th key={weekday}>{weekday}</th>
							))}
						</tr>
					</thead>
					<tbody>
						<tr>
							{weeksArray}
						</tr>
					</tbody>
				</table>
			</div>
		);
	};

	return renderWeeks();
}