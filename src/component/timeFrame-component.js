import styled from "styled-components";
import "../index.css";

const List = styled.ul`
	padding: 0;
	margin: 25px 15px;
	@media screen and (max-width: 730px) {
		display: flex;
		margin: 10px;
	}
`;

const ListItem = styled.li`
	margin: 15px auto;
`;

const Link = styled.button`
	border: none;
	padding: 5px;
	font-size: 14px;
	background-color: transparent;
	color: var(--desaturatedBlue);

	&:hover {
		color: white;
	}
`;

function TimeFrame({ onClick }) {
	return (
		<>
			<List>
				<ListItem>
					<Link onClick={onClick("daily")}>Daily</Link>
				</ListItem>
				<ListItem>
					<Link onClick={onClick("weekly")}>Weekly</Link>
				</ListItem>
				<ListItem>
					<Link onClick={onClick("monthly")}>Monthly</Link>
				</ListItem>
			</List>
		</>
	);
}
export default TimeFrame;
