import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";
import "./index.css";
import StatComponent from "./component/stat-component";
import ProfileComponent from "./component/profile-component";
import reportWebVitals from "./reportWebVitals";
import { useState, createContext } from "react";

const Container = styled.main`
	display: grid;
	grid-template-columns: auto auto;

	@media screen and (max-width: 730px) {
		grid-template-columns: auto;
		grid-template-rows: auto auto;
	}
`;

const StatWrapper = styled.div`
	height: auto;
	width: auto;
	max-width: 690px;
	margin-left: 25px;

	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 15px;

	@media screen and (max-width: 950px) {
		width: 460px;
	}
	@media screen and (max-width: 730px) {
		margin-left: 0;
		margin-top: 25px;
	}
	@media screen and (max-width: 500px) {
		width: auto;
	}
`;

const UserContext = createContext();

function ContainerTest() {
	const [timeFrame, setTimeFrame] = useState("daily");
	return (
		<UserContext.Provider value={timeFrame}>
			<Container>
				{/* onClick={(e) => setTimeFrame(e)} */}
				<ProfileComponent onClick={(e) => setTimeFrame(e)} />
				<StatWrapper>
					<StatComponent
						activity="Work"
						bgColor="hsl(15, 100%, 70%)"
						index="0"
						timeFrame={timeFrame}
					/>
					<StatComponent
						activity="Play"
						bgColor="hsl(195, 74%, 62%)"
						index="1"
						timeFrame={timeFrame}
					/>
					<StatComponent
						activity="Study"
						bgColor="hsl(348, 100%, 68%)"
						index="2"
						timeFrame={timeFrame}
					/>
					<StatComponent
						activity="Exercise"
						bgColor="hsl(145, 58%, 55%)"
						index="3"
						timeFrame={timeFrame}
					/>
					<StatComponent
						activity="Social"
						bgColor="hsl(264, 64%, 52%)"
						index="4"
						timeFrame={timeFrame}
					/>
					<StatComponent
						activity="SelfCare"
						bgColor="hsl(43, 84%, 65%)"
						index="5"
						timeFrame={timeFrame}
					/>
				</StatWrapper>
			</Container>
		</UserContext.Provider>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ContainerTest />
	</React.StrictMode>
);

reportWebVitals(console.log);
