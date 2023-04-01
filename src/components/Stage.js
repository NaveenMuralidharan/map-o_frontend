
import Step from "../components/Step"
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';

const theme = createTheme();

theme.typography.h5 = {
  fontSize: '0.8rem',
  '@media (min-width:600px)': {
    fontSize: '1.0rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
};


const Stage = ({stage}) => {

    const { steps } = stage;
    // console.log("DEBUG ", { stage, steps })
    //constructor
    const [stepToggle, setStepToggle] = useState(false);
    const handleViewStepsClick = () => {
        setStepToggle(!stepToggle);
      };


    return (
        <div>
          <ThemeProvider theme={theme}>      
            <Typography variant="h5">{stage.order} - {stage.name}</Typography>
            <Typography variant="h5">By {stage.stageOwner}</Typography>
          </ThemeProvider>
          <br></br>

          {!stepToggle ? 
                      <Button 
                        variant="outlined"
                        endIcon={<KeyboardArrowDownIcon/>}
                        onClick={handleViewStepsClick}>
                        <ThemeProvider theme={theme}>
                          <Typography variant="h5">
                            View
                          </Typography>  
                        </ThemeProvider>
                      </Button>
                      
                      : <></>
          }

          <hr></hr>
          {stepToggle ? 
                        <div>
                            <Button 
                              variant="contained"
                              endIcon={<CancelIcon/>} 
                              onClick={handleViewStepsClick}>
                                <ThemeProvider theme={theme}>
                                  <Typography variant="h5">
                                    Close
                                  </Typography>
                                </ThemeProvider>    
                            </Button>
                            <br></br>
                            <br></br>  
                          {/* <h6>Steps in {stage.name}</h6> */}
                          <ThemeProvider theme={theme}>
                                <Typography variant="h5">
                                  <p>Steps in {stage.name}</p>
                                </Typography>
                              </ThemeProvider>   
                          {steps.map((step) =>{
                            return <Step step={step} key={step._id} />
                       
                          })}
                        </div>
                       : <></> 
          }
            

           

         
          
        </div>
      );


}


export default Stage