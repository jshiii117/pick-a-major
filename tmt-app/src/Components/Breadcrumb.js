import React from "react";
import {Breadcrumbs, Typography} from '@mui/material';
import ForwardArrow from '../Images/Forward.png';

function Breadcrumb(){
    return(
        
        <Breadcrumbs
            separator={
                <img 
                    style={{width:"24px", margin: "0 16px"}}
                    src={ForwardArrow} 
                    alt="ForwardArrow"/>
            }
            aria-label="breadcrumb" 
            sx={{
                width:"70%", 
                display:"flex", 
                alignItems:"center",
                textAlign:"center",
                marginX:"auto"
            }}
        >
            <Typography variant="CustomSubHeading" sx={{color:"BobaHighlight.main"}}>Student Projects</Typography>
            <Typography variant="CustomSubHeading" sx={{color:"BobaHighlight.main"}}>Major Picker</Typography>
        </Breadcrumbs>
    )
}

export default Breadcrumb;