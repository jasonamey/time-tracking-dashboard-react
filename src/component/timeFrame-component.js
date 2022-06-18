import styled from "styled-components";
//JASON HERE : lets get access to our setState function from the context...
import {useUserContext} from "../context/UserContextProvider";
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

//JASON HERE : we can remove the onClick destructing.... you also probably want to avoid calling
// this function onClick, as that's commonly understood as being assigned to components - maybe 'clickHandler' ?
function TimeFrame() {
  //JASON HERE : ok, no we have our set state function... see how I adjust how it's passed to
  //your components...
  const {setTimeFrame} = useUserContext();
  return (
    <>
      <List>
        <ListItem>
          <Link onClick={() => setTimeFrame("daily")}>Daily</Link>
        </ListItem>
        <ListItem>
          <Link onClick={() => setTimeFrame("weekly")}>Weekly</Link>
        </ListItem>
        <ListItem>
          <Link onClick={() => setTimeFrame("monthly")}>Monthly</Link>
        </ListItem>
      </List>
    </>
  );
}
export default TimeFrame;
