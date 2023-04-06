export default function MonthCalendar({ month }) { 
	const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate(); 
	const startDay = new Date(month.getFullYear(), month.getMonth(), 0).getDay() +6; 
	const weeks = Math.ceil((daysInMonth + startDay) / 7); 
	
	const renderDays = () => { 
	 const rows = []; 
	 let cells = []; 
	 for (let day = 1; day <= daysInMonth; day++) { 
	  const date = new Date(month.getFullYear(), month.getMonth(), day); 
	  if (day === 1) { 
	   for (let i = 0; i < date.getDay() - 1; i++) { 
		cells.push(<td key={`empty-${i}`}></td>); 
	   } 
	  } 
	  cells.push(<td key={day}>{day}</td>); 
	  if (date.getDay() === 0 || day === daysInMonth) { 
	   rows.push(<tr key={day}>{cells}</tr>); 
	   cells = []; 
	  } 
	 } 
	 return rows; 
	}; 
	
	const renderWeeks = () => { 
	 const weeksArray = []; 
	 for (let i = 0; i < weeks; i++) { 
	  weeksArray.push(renderDays()[i]); 
	 } 
	 return ( 
	  <div className="div"> 
		<div>Days in month: {daysInMonth}</div>
        <div>Start day: {startDay}</div>
        <div>Weeks: {weeks}</div>
	   <table className="table"> 
		<thead> 
		 <tr> 
		  {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((weekday) => ( 
		   <th key={weekday}>{weekday}</th> 
		  ))} 
		 </tr> 
		</thead> 
		<tbody>{weeksArray}</tbody> 
	   </table> 
	  </div> 
	 ); 
	}; 
	
	return renderWeeks(); 
   }