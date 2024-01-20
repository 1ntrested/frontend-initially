import React,{useContext} from 'react'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
//import { ThemeContext } from '../App.jsx';
function Navbar() {
   // const {theme,toggleTheme}=useContext(ThemeContext);
  return (
    <AppBar style={{ background: '#3C4142' }}> 
        <Toolbar position="static" style={{display:'flex',justifyContent:'space-evenly'}}>
     <Button variant="text" style={{color:'white'}}> 
     <Typography variant="h5">
         <i>1NITIALS</i> 
      </Typography>
      </Button>


<div style={{display:'flex'}}>
    <div>
     <Button variant="text"  style={{color:'white',marginRight:'10px'}} size="small" onClick={()=>{
        location.href = '/createpost'
     }}>createPost</Button>
     </div>
     <div>
     <Button variant="text"  style={{color:'white',marginRight:'10px'}} size="small" onClick={()=>{
        location.href = '/showpost'
     }}>showPost</Button>
     </div>
    <div style={{display:'flex',marginRight:'10px'}}>
     <Button variant="text"  style={{color:'white'}} size="small" onClick={()=>{
        location.href = '/Signup'
     }}>Signup</Button>
     </div>
     <div>
     <Button variant="text"  style={{color:'white'}} size="small" onClick={()=>{
        location.href = '/login'
     }}>Login</Button>

     </div>

  </div>

  </Toolbar>

  </AppBar>
  )
}

export default Navbar