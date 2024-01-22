import React from 'react'
import Button from '../../button/Button';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { MdHome } from "react-icons/md";
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar} from '@mui/material';

const Sidebar = ({data,value}) => {
const drawerWidth = 240;

  return (
    <div>
      {/* <div style={{width:"21vw",height:"93vh",backgroundColor:"green",marginTop:"0px",color:"#fff"}}>{data}
      <Button value = {"click"}/>
      <Button value = {"data"}/> */}
    <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Home', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {/* <MdHome/> */}
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      </div>
    // </div>
  )
}

export default Sidebar;
