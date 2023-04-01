import { useState } from "react";
import { useLoaderData, Form, Link} from "react-router-dom";
import { updateAction } from "../actions";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import RouteIcon from '@mui/icons-material/Route';

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


const Edit = (params)=> {
    
    
    const data = useLoaderData();
    const { process } = data;
    console.log("process obj in EDIT js is", process)
   
    //STATE for process meta data
    const [formData, setFormData] = useState(process)
    
    //HANDLE CHANGE FOR Process meta data
    const handleChange = (event)=>{
        
        const{name, value} = event.target
        // console.log("name and value are", name, value)
        setFormData((prevState)=>({...prevState, [name]: value}))
        console.log("PROCESS METADATA EDIT - set form data is ", formData)

    }
    //HANDLE SUBMIT FOR Process meta data
   
    const handleSubmit = (event)=>{
        event.preventDefault();
     
        //package updated process
        console.log("formdata being used in handlesubmit is ", formData)
        const updatedProcess = {...formData}
        
        //send updated process to update backend
        updateAction(updatedProcess)
 
    }
 


    console.log(formData._id)

    return (<>
        <Container maxWidth="sm" sx={{ bgcolor: '#e8f0fc' }}>
            <AppBar position="static">
                <Toolbar sx={{
                    width: "100%",
                    maxWidth: 600,
                    mx: "auto"
                    }}>
                    <IconButton
                        size="large"
                        // edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        component={Link} to="/"
                    >
                        <RouteIcon />
                    </IconButton>
        
                <Typography variant="h5" component="div" >
                    Process Mapper
                </Typography>
                </Toolbar>
            </AppBar>
                    
            {/* <Container maxWidth="sm" sx={{ bgcolor: '#e8f0fc' }}> */}
                <br></br>
            <Card>
                <ThemeProvider theme={theme}>
            <Typography variant="h5">Editing Process: </Typography>
                 <br></br>   
                <Form onSubmit={handleSubmit}>

                    {/* Process metadata edit */}
                    <Container>                 
                    <Stack direction="column" spacing={2}>
                    <TextField
                                    required
                                    // multiline
                                    id="outlined-required"
                                    label="Organization unit"
                                    name="orgUnit"
                                    value={formData.orgUnit}
                                    onChange={handleChange}
                    />

                    <TextField
                                    required
                                    // multiline
                                    id="outlined-required"
                                    label="Process Name"
                                    // helperText="Use identifiable names for processes"
                                    name="processName"
                                    value={formData.processName}
                                    onChange={handleChange}
                    />
                    
                                        
                    <TextField
                                    required
                                    
                                    id="outlined-required"
                                    label="Process owner"
                                    name="processOwner"
                                    value={formData.processOwner}
                                    onChange={handleChange}
                    />
                    </Stack>

                    
                    </Container> 
                    <hr></hr>  

                    {/* Stages and Stepa edit */}

                    {formData.stages.map((stage, stageIndex) => {
                        console.log({stage})

                        return (
                        
                        <Container>
                            <Stack direction="row" spacing={2}>
                                {/* <h5>{stage.order} - {stage.name}</h5> */}

                               
                                <TextField
                                    disabled
                                    id="outlined-required"
                                    label="Stage Order"
                                    name="order"
                                    value={formData.stages[stageIndex].order}
                                    
                                />
                                <br></br>
                                <br></br>                           
                                <TextField
                                    required
                                    
                                    id="outlined-required"
                                    label="Stage name"
                                    name="name"
                                    value={formData.stages[stageIndex].name}
                                    onChange={(e)=> {

                                        const formDataCopy = JSON.parse(JSON.stringify(formData))
                                        formDataCopy.stages[stageIndex].name = e.target.value;
                                        console.log(formDataCopy, formData)    
                                        
                                        setFormData(formDataCopy)
     
                                        }}
                                />
                            </Stack>
                            <br></br>
                       
                            <Stack direction="row" spacing={2}>

                            <TextField
                                    required
                                    id="outlined-required"
                                    label="Stage owner"
                                    name="stageOwner"
                                    value={formData.stages[stageIndex].stageOwner}
                                    onChange={(e)=> {

                                        const formDataCopy = JSON.parse(JSON.stringify(formData))
                                        formDataCopy.stages[stageIndex].stageOwner = e.target.value;
                                        console.log(formDataCopy, formData)    
                                        
                                        setFormData(formDataCopy)
     
                                        }}
                            />
                            <TextField
                                    required
                                    id="outlined-required"
                                    label="Stage Org unit"
                                    name="orgUnit"
                                    value={formData.stages[stageIndex].orgUnit}
                                    onChange={(e)=> {

                                    const formDataCopy = JSON.parse(JSON.stringify(formData))
                                    formDataCopy.stages[stageIndex].orgUnit = e.target.value;
                                    console.log(formDataCopy, formData)    
                                    
                                    setFormData(formDataCopy)
 
                                    }}
                            />   
                            </Stack>

  
                            <hr></hr>

                        {stage.steps.map((step, stepIndex)=>{
                            console.log({step})
                            return (<div>
                                    
                                    <Stack direction="row" spacing={2}>       
                                        <TextField
                                            disabled
                                    id="outlined-required"
                                    label="Step order"
                                    name="order"
                                            value={formData.stages[stageIndex].steps[stepIndex].order}
                                            // onChange={handleChange}
                                        />

                                        <TextField
                                            required
                                    id="outlined-required"
                                    label="Step action"
                                    name="action"
                                    value={formData.stages[stageIndex].steps[stepIndex].action}
                                    onChange={(e)=> {
                                                  
                                        const stepFormCopy = JSON.parse(JSON.stringify(formData))
                                        stepFormCopy.stages[stageIndex].steps[stepIndex].action = e.target.value;
                                        setFormData(stepFormCopy)

                                            }}
                                        />
                                    </Stack>
                                    <br></br>
                           

                                    <Stack direction="row" spacing={2}>
                                        <TextField
                                            required
                                    id="outlined-required"
                                    label="Step owner"
                                    name="stepOwner"
                                    value={formData.stages[stageIndex].steps[stepIndex].stepOwner}
                                    onChange={(e)=> {
                                                  
                                        const stepFormCopy = JSON.parse(JSON.stringify(formData))
                                        stepFormCopy.stages[stageIndex].steps[stepIndex].stepOwner = e.target.value;
                                        setFormData(stepFormCopy)

                                        }}
                                    />
                                                   
                                    <TextField
                                    required
                                    id="outlined-required"
                                    label="Pass to"
                                    name="pass_to"
                                    value={formData.stages[stageIndex].steps[stepIndex].pass_to}
                                    onChange={(e)=> {
                                                  
                                        const stepFormCopy = JSON.parse(JSON.stringify(formData))
                                        stepFormCopy.stages[stageIndex].steps[stepIndex].pass_to = e.target.value;
                                        setFormData(stepFormCopy)

                                        }}
                                    />
                                    </Stack>
                                    <br></br>
                                    <br></br>
                                    <Stack direction="row" spacing={2}>
                                        
                                    </Stack>   

                                    <Stack>
                                    <TextField
                                    required
                                    multiline
                                    id="outlined-required"
                                    label="Purpose"
                                    name="purpose"
                                    value={formData.stages[stageIndex].steps[stepIndex].purpose}
                                    onChange={(e)=> {
                                                  
                                        const stepFormCopy = JSON.parse(JSON.stringify(formData))
                                        stepFormCopy.stages[stageIndex].steps[stepIndex].purpose = e.target.value;
                                        setFormData(stepFormCopy)

                                        }}
                                    />
                                    </Stack> 
                                    <br></br>
                             

                                    <Stack>    
                                        <TextField
                                        required
                                        id="outlined-required"
                                        label="Channel"
                                        name="channel"
                                        value={formData.stages[stageIndex].steps[stepIndex].channel}
                                        onChange={(e)=> {
                                                    
                                            const stepFormCopy = JSON.parse(JSON.stringify(formData))
                                            stepFormCopy.stages[stageIndex].steps[stepIndex].channel = e.target.value;
                                            setFormData(stepFormCopy)

                                            }}
                                        />
                                        <br></br>
                                        <TextField
                                        required
                                        id="outlined-required"
                                        label="Tool"
                                        name="tool"
                                        value={formData.stages[stageIndex].steps[stepIndex].tool}
                                        onChange={(e)=> {
                                                    
                                            const stepFormCopy = JSON.parse(JSON.stringify(formData))
                                            stepFormCopy.stages[stageIndex].steps[stepIndex].tool = e.target.value;
                                            setFormData(stepFormCopy)

                                            }}
                                        />
                                        <br></br>
                                    </Stack>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Document"
                                            name="docType"
                                            value={formData.stages[stageIndex].steps[stepIndex].docType}
                                            onChange={(e)=> {
                                                        
                                                const stepFormCopy = JSON.parse(JSON.stringify(formData))
                                                stepFormCopy.stages[stageIndex].steps[stepIndex].docType = e.target.value;
                                                setFormData(stepFormCopy)

                                                }}
                                        />
                                    <Stack>

                                    </Stack>
                                    <hr></hr>


                                </div>)

                        })}
                            
                    </Container>)    
                        
                        
                    })} 

                    {/* <button type="submit"> Edit Process information </button> */}

                    <Button variant="contained" type="submit">
                        Update
                    </Button>

                    <br></br>
                    <br></br>

                    <Link to={`/process/${process._id}`}>
                        <p>Back to Process Map</p> 
                   </Link>

                </Form>    

            {/* </Box> */}

                
                </ThemeProvider>
            </Card>
        </Container>
        </>
    );
}

export default Edit