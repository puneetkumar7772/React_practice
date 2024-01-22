import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react'

const Navigation = ({value}) => {
  return (
    <div>
      {/* <div style={{width:"100%",height:"50px",backgroundColor:"red",color:"#fff"}}>{value}</div> */}
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
           Online Exam Portal
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navigation;
