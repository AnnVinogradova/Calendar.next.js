
export default function Header({ currentDate, setCurrentDate }) {
	const prevMonth = () => {
		const newDate = new Date(currentDate);
		newDate.setMonth(newDate.getMonth() - 1);
		setCurrentDate(newDate);
	};

	const nextMonth = () => {
		const newDate = new Date(currentDate);
		newDate.setMonth(newDate.getMonth() + 1);
		setCurrentDate(newDate);
	};

	return <>
		<div className="header">
			<h1>Calendar</h1>
			<button onClick={prevMonth}>Prev</button>
			<h2>
				{currentDate && currentDate.toLocaleString('default', { month: 'long' })}{' '}
				{currentDate && currentDate.getFullYear()}
			</h2>
			<button onClick={nextMonth}>Next</button>
		</div>
	</>;
};





