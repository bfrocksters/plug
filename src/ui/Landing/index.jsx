import React,{ useState } from 'react';
import { Button,
    Sidebar,
    SidebarRegion,
    Menu,
    MenuGroup,
    MenuItem,
    MenuList,
    ToggleButton,
    Header,
    HeaderRegion,
    HeaderTitle,
    Text,
    Row,
    Column
 } from 'reactackle';
 import { Redirect } from "react-router-dom";
import { setConstantValue } from 'typescript';

export const Workspaces = () => {
    const [workspace,setWorkspace] = useState('code');
    return <Sidebar>
        <Redirect to={`/${workspace}`} />
        <Button
          text="New Workspace"
          colorScheme="primary"
          size="inline"
          alternateTitle="alternate title"
        />
    <SidebarRegion spread>
    <Menu colorScheme="dark">
  <MenuGroup>
      <MenuList>
        <MenuItem 
          text="Item 1"
          textSecondary="Item 1 - text secondary"
          addonRight={<ToggleButton />}
          onClick={(data) => {
            setWorkspace('code1')
          }}
        />
        <MenuItem 
        text="Item 2" 
        textSecondary="Item 1 - text secondary"
        onClick={(data) => {
            setWorkspace('code2')
          }}
        />
        <MenuItem text="Item 3" />
      </MenuList>
      </MenuGroup>
      </Menu>
        </SidebarRegion>
  </Sidebar>;
};

const Main = (props) => {
    console.log(props);
  return <Text display="headline">{props.id}</Text>;
};

export const Landing = (props) => {
    console.log(props);
    return <Row
      layoutDirection="horizontal"
    >
        <Column
          size={{ xsmall: 2 }}
        >
          <Workspaces/>
        </Column>
        <Column  size={{ xsmall: 10 }} >
          <Main id={props.match.params.id} />
        </Column>
    </Row>
};
