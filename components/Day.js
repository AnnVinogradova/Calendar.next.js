export default function Day({ date }) {
	return <>
		<div>
			<table>
				<tbody>
					<tr className="day">{date.getDate()}</tr>
				</tbody>
			</table>
		</div>
	</>;
};



