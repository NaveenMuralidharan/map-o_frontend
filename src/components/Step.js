import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';
  import Typography from '@mui/material/Typography';
  
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

const Step = ({step}) => {
    console.log("STEP ", step.order, step.action);

    return (
      
        <div>      
            
            {/* <h5>{step.order} - {step.action}</h5> */}
            <ThemeProvider theme={theme}>      
                <Typography variant="h5">

                    <p>{step.order} - {step.action}</p>
                    <p>Performed by {step.stepOwner} - using {step.tool} ({step.channel})</p>
                    <p>Purpose: {step.purpose}</p>
                    <a href="">Document - {step.docType}</a>
                </Typography>
            </ThemeProvider>              
            
            
            <hr></hr>
        </div>
        
      );


}


export default Step