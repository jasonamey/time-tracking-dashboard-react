import styled from "styled-components";
import "../index.css";
import { ReactComponent as WorkIcon } from "../images/icon-work.svg";
import { ReactComponent as PlayIcon } from "../images/icon-play.svg";
import { ReactComponent as StudyIcon } from "../images/icon-study.svg";
import { ReactComponent as ExerciseIcon } from "../images/icon-exercise.svg";
import { ReactComponent as SocialIcon } from "../images/icon-social.svg";
import { ReactComponent as SelfCareIcon } from "../images/icon-self-care.svg";
import { ReactComponent as OptionsIcon } from "../images/icon-ellipsis.svg";

// Load local json data
const localData = require("../data.json");

const Card = styled.section`
	height: 215px;
	min-width: 215px;

	position: relative;
	border-radius: 15px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	background-color: var(--darkBlue);

	@media screen and (max-width: 500px) {
		width: 100%;
	}
`;

const SvgContainer = styled.div`
	--bg-color: ${(props) => props.bgColor || "green"};
	background-color: var(--bg-color);
	height: 50%;
	width: 100%;
	border-radius: 15px;
	position: absolute;
	top: 0;
	right: 0;
	margin: auto;
`;

const Container = styled.div`
	height: 85%;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: var(--darkBlue);
	border-radius: 15px;
	color: white;
	z-index: 10;

	&:hover {
		transition: background-color 0.5s;
		background-color: var(--desaturatedBlue);
	}
`;

const StatWrapper = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 500px) {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
`;

const Title = styled.header`
	font-size: 12px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const CurrentStat = styled.div`
	font-size: 32px;
	margin: 16px 0;
`;

const PreviousStat = styled.div`
	font-size: 12px;
	color: var(--paleBlue);
`;

// Pick svg icon for activity
function SvgPicker(props) {
	const activity = props.activity;

	switch (activity) {
		case "Work":
			return <WorkIcon />;
		case "Play":
			return <PlayIcon />;
		case "Study":
			return <StudyIcon />;
		case "Exercise":
			return <ExerciseIcon />;
		case "Social":
			return <SocialIcon />;
		case "SelfCare":
			return <SelfCareIcon />;
		default:
			return <div>Icon</div>;
	}
}

function StatComponent(props) {
	const activityIndex = props.index;
	return (
		<>
			<Card>
				<SvgContainer bgColor={props.bgColor}>
					<SvgPicker activity={props.activity} />
				</SvgContainer>
				<Container>
					<Title>
						<h2>{props.activity}</h2>
						<OptionsIcon />
					</Title>
					<StatWrapper>
						<CurrentStat>
							{
								localData[activityIndex].timeframes[
									`${props.timeFrame}`
								]["current"]
							}
							hrs
						</CurrentStat>
						<PreviousStat>
							Previuos -{" "}
							{
								localData[activityIndex].timeframes[
									`${props.timeFrame}`
								]["previous"]
							}{" "}
							hrs
						</PreviousStat>
					</StatWrapper>
				</Container>
			</Card>
		</>
	);
}
export default StatComponent;
