import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import SidebarOptions from "./SidebarOptions";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { collection } from "firebase/firestore";
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


const Sidebar = () => {
  const channelRef = collection(db, "rooms");
  const [channels, loading, error] = useCollection(channelRef);
  
  const [user] = useAuthState(auth)

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h3>{user?.displayName}</h3>
          <h4>
            <FiberManualRecordIcon />
            {user?.email}
          </h4>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarOptions Icon={InsertCommentIcon} title="Threads" />
      <SidebarOptions Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOptions Icon={DraftsIcon} title="Saved Items" />
      <SidebarOptions Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOptions Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOptions Icon={AppsIcon} title="Apps" />
      <SidebarOptions Icon={FileCopyIcon} title="File browser" />
      <SidebarOptions Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOptions Icon={AddIcon} addChannelOption title="Add channel" />

      {channels?.docs.map((doc) => (
        <SidebarOptions key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  flex: 0.3;
  background-color: var(--slack-color);
  color: white;
  margin-top: 60px;
  max-width: 260px;
  border-top: 1px solid #49274b;
  overflow-y: scroll;

  > hr {
    margin: 10px 0;
    border: 1px solid #49274b;
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  padding: 13px;
  border-bottom: 1px solid #49274b;

  > .MuiSvgIcon-root {
    font-size: 18px;
    color: #49274b;
    background-color: white;
    padding: 10px;
    border-radius: 50%;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;

  > h3 {
    font-size: 13px;
    font-weight: 900;
    margin-bottom: 4px;
  }

  > h4 {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 13px;
  }
  > h4 > .MuiSvgIcon-root {
    color: blue;
    font-size: 13px;
    margin-top: 1px;
    margin-right: 3px;
  }
`;
