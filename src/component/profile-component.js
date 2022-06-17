import styled from "styled-components";
import "../index.css";
import TimeFrame from "./timeFrame-component";

const Profile = styled.div`
	height: 100%;
	max-height: 445px;
	width: 200px;
	border-radius: 15px;
	background-color: var(--darkBlue);
	@media screen and (max-width: 730px) {
		margin: 0;
		width: 100%;
	}
`;

const Header = styled.header`
	padding: 20px;
	border-radius: 15px;
	background-color: var(--blue);
	color: white;
	@media screen and (max-width: 730px) {
		display: flex;
		justify-content: space-around;
	}
`;

const ImgWrapper = styled.div`
	height: fit-content;
	width: fit-content;
	border: 5px solid white;
	border-radius: 50%;
	margin-bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 730px) {
		// flex-direction: row;
		// gap: 15px;
		justify-content: space-evenly;
	}
`;

const SubTitle = styled.h4`
	@media screen and (max-width: 730px) {
		margin: 0;
	}
`;

const Name = styled.h1`
	font-size: 32px;
	@media screen and (max-width: 730px) {
		font-size: 24px;
		margin: 0;
	}
`;

function ProfileComponent({ onClick }) {
	return (
		<>
			<Profile>
				<Header>
					<ImgWrapper>
						<img
							src={require("../images/image-jeremy.png")}
							alt="user profile"
							height={50}
							width={50}
						/>
					</ImgWrapper>
					<TitleWrapper>
						<SubTitle>Report for</SubTitle>
						<Name>Jeremy Robson</Name>
					</TitleWrapper>
				</Header>
				<TimeFrame onClick={onClick} />
			</Profile>
		</>
	);
}

export default ProfileComponent;
