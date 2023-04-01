import {Link, useLoaderData, Form, redirect} from "react-router-dom";
import React, {useState} from "react";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';
  import Typography from '@mui/material/Typography';
  import IconButton from '@mui/material/IconButton';
  import RouteIcon from '@mui/icons-material/Route';
  import Paper from '@mui/material/Paper';
  import Box from '@mui/material/Box';
  import ViewInArIcon from '@mui/icons-material/ViewInAr';
  import SchoolIcon from '@mui/icons-material/School';
  import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

  const theme = createTheme();
  theme.typography.h5 = {
    fontSize: '1.8rem',
    '@media (min-width:600px)': {
      fontSize: '2.0rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.3rem',
    },
  };
  

const Index = (props) => {
    const processes = useLoaderData()
    console.log("from index js process is ", processes)
    const [color, setColor] = React.useState('primary');
    const [processToggle, setProcessToggle] = useState(false);

    const handleNewProcessClick = () => {
        setProcessToggle(!processToggle);
      };


    return <>
    
    <Container sx={{ bgcolor: '#e8f0fc' }}>

    <AppBar position="static">
    <Toolbar sx={{
      width: "100%",
      maxWidth: 600,
      mx: "auto"
    }}>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link} to="/"
          >
            <RouteIcon />
        </IconButton>
        <ThemeProvider theme={theme}>
        <Typography variant="h5" component="div">
            Process Mapper
        </Typography>
        </ThemeProvider>
    </Toolbar>
    </AppBar>

    
      <Container maxWidth="md">
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: "100%",
          padding: 2
        //   height: 100,
        },
      }}
    >
  
      <Paper elevation={3}>
        <ThemeProvider theme={theme}>
            <br></br>
            <RouteIcon />
            <Typography variant="h5">
                Welcome to Process Mapper - the ultimate process mapping tool. <br></br> 
            </Typography>
            <ViewInArIcon />
            <Typography variant="h5">
                Visualize and understand your business processes end to end, <br></br>
            </Typography>
            <SchoolIcon />
            <Typography variant="h5">
            Train new hires, and secure your company's knowledge with ease.<br></br>
            </Typography>
        </ThemeProvider>
        <br></br>
      
        
        </Paper>
        </Box>
        </Container>    

    <Container maxWidth="md">
        {!processToggle? 

        <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: "100%",
                padding: 1
                // height: 130,
                
              },
            }}
          > 
            <Paper elevation={3}>
                <br></br>
                <TipsAndUpdatesIcon />
                <ThemeProvider theme={theme}>
                    <Typography variant="h5">
                        Get started now and gain a clear understanding of how your business processes work.
                 <br></br>
                 <br></br>
                <Button variant="contained" onClick={handleNewProcessClick}>
                        Create 
                </Button>
                </Typography>
                </ThemeProvider>
            </Paper>
          
          
          </Box>

            
        : <></>}
        
        { processToggle? 
        
        <Card>

        <p>Map a new Process:</p>
        <Form action="/process/create" method="post">
            <Container>
                <Stack direction="column" spacing={2}>
                {/* <label htmlFor="orgUnit">Org Unit:</label>
                <input type="text" name="orgUnit"/> */}
                <TextField
                                    required                                   
                                    id="outlined-required"
                                    label="Organization unit"
                                    name="orgUnit"
                />

                <TextField
                                    required                                   
                                    id="outlined-required"
                                    label="Process Owner"
                                    name="processOwner"
                />
                <TextField
                                    required                                   
                                    id="outlined-required"
                                    label="Process Name"
                                    name="processName"
                />

                {/* <label htmlFor="processOwner">Process Owner:</label>
                <input type="text" name="processOwner"/>
            
            
                <label htmlFor="processName">Process Name:</label>
                <input type="text" name="processName"/> */}
                </Stack>
            </Container>
            <br></br>
            {/* <button type="submit"> Create Process </button> */}
            <Button variant="contained" type="submit">Create Process</Button>
             <br></br>
             <br></br>   

        { processToggle? 
        
        // <button onClick={handleNewProcessClick}>Cancel</button>
        <div>
        <Button variant="outlined" onClick={handleNewProcessClick}>
            Cancel
        </Button>
        <br></br>
        <br></br>
        </div>
            : <></>

        }


        </Form>
        
        </Card>
        
        : <></> }
        
        {/* SAMPLE PROCESSES */}

        <ThemeProvider theme={theme}>
            <br></br>
            <Typography variant="h5">
                SAMPLE PROCESS MAPS
            </Typography>
        </ThemeProvider>

        {/* <div maxWidth="md"> */}

            {processes.map((process)=>{

            //    return <Paper  elevation={3} key={process._id} maxWidth="md" margin="8px 8px 8px 8px">
                    
            //                 <Stack direction="column" spacing={1}>
                            
            //                 <Link to={`/process/${process._id}`}>
            //                     <p>{process.processName}</p> 
            //                 </Link>

            //                 <Stack direction="row" spacing={4}>
            //                    <IconButton
            //                         size="large"
            //                         edge="start"
            //                         color="inherit"
            //                         aria-label="menu"
            //                         sx={{ mr: 2 }}
            //                         component={Link} to={`/process/${process._id}/update`}
            //                     >
            //                     <BorderColorIcon />
            //                 </IconButton>
            //                 {/* DELETE PROCESS  */}
            //                     <Form action={`/process/${process._id}/delete`} method="post">
                                
            //                         {/* <Button type="submit" 
            //                                 variant="outlined" 
            //                                 startIcon={<DeleteIcon />}
            //                                 // style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}
            //                                 >
            //                                     Delete Process
            //                         </Button> */}
            //                         <IconButton
            //                                     size="large"
            //                                     edge="start"
            //                                     color="inherit"
            //                                     aria-label="menu"
            //                                     sx={{ mr: 2 }}
            //                                     type="submit"
            //                                 >
            //                                     <DeleteIcon />
            //                         </IconButton>

            //                     </Form>
            //                 </Stack>
            //                 </Stack>
                                
            //         </Paper>
                
                return <Container maxWidth="md" key={process._id}>

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 1,
                            width: "100%",
                            // height: 100,
                            padding: 3,
                            },
                        }}
                        >
                            <Paper elevation={3}>
                                
                                <Link to={`/process/${process._id}`}>
                                <ThemeProvider theme={theme}>
                                    <Typography variant="h5">
                                        {process.processName}
                                    </Typography>
                                </ThemeProvider> 
                                    {/* <p>{process.processName}</p>  */}
                                </Link>

                                {/* <Stack direction="column" spacing={0}>
                                <IconButton
                                    size="medium"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 0 }}
                                    component={Link} to={`/process/${process._id}/update`}
                                >
                                <BorderColorIcon />
                                <ThemeProvider theme={theme}>
                                                        <Typography variant="h5">EDIT</Typography>
                                </ThemeProvider> 
                                </IconButton>

                                
                                <Form action={`/process/${process._id}/delete`} method="post">
                                    <IconButton
                                                    size="medium"
                                                    edge="start"
                                                    color="inherit"
                                                    aria-label="menu"
                                                    sx={{ mr: 0 }}
                                                    type="submit"
                                                >
                                                    <DeleteIcon />
                                                    <ThemeProvider theme={theme}>
                                                        <Typography variant="h5">Delete</Typography>
                                                    </ThemeProvider>    
                                    </IconButton>
                                </Form>
                                </Stack> */}
                            </Paper>

                        </Box>
                        <br></br>
                </Container>
                
            })}
            
            {/* <h4>{processes[0].processName}</h4> */}
        {/* </div> */}

    </Container>
    </Container>
    </>

}

export default Index;