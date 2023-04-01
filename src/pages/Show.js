import { Link, useLoaderData, Form } from "react-router-dom";
// import { showLoader } from "../loaders";
// import CreateStage from "./Edit"
import Mermaid from "../Mermaid";

import Stage from "../components/Stage"
import Step from "../components/Step"
import React, { useState } from 'react'
import { updateAction } from "../actions";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
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
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper';  

const theme = createTheme();

  theme.typography.h5 = {
    fontSize: '1.0rem',
    '@media (min-width:600px)': {
      fontSize: '1.0rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.0rem',
    },
  };
  

//TRIAL 3

const Show3 = () => {
    //constructor
    console.log("hi from show3.js")
    
    // DESTRUCTURE PROCESS FROM SHOWLOADER
    const data = useLoaderData();
    
    // const { mermaidCode } = data;
                
    const { process } = data;
    console.log("process obj in show js is", process)
    const { stages } = process;
    const { steps } = stages;
    // TRIAL - get mermaid code from process obj
    const { mermaidCode } = process;
    const [processData, setProcessData] = useState({
                                                    mermaidCode: mermaidCode, 
                                                    process: process, 
                                                    stages: stages, 
                                                    steps: steps 
                                                })
    console.log("recently set mermaidcode is, ", processData.mermaidCode)
                                            
    
    // Toggle process options 
    const [processToggle, setProcessToggle] = useState(false);
    const handleProcessOptionsClick = ()=>{
        setProcessToggle(!processToggle)
    }
    

    //Toggle Add stage form visibility
    const [stageToggle, setStageToggle] = useState(false);
    const handleNewStageClick = () => {
        setStageToggle(!stageToggle);
      };

    // NEW STAGE FUNC state variables 
    const [formData, setFormData] = useState({ name: '', orgUnit: '', stageOwner: '', contactDetails: '', 
            stepOwner: '', stepAction: '', pass_to: '', purpose: '', channel: '', tool: '' });
    //EDIT stage related state variables
    const [editFormData, setEditFormData] = useState({editingStageId: '', name: ''})


    const handleStageSubmit = async (event) =>{
        event.preventDefault(); 
        console.log("form data is ",formData);

        //Create a shallow copy of process update process object with new stage
        const updatedProcess = {...process}
        const newStageOrder = updatedProcess.stages.length + 1; 
        const newStepOrder = newStageOrder + 0.1;
        console.log("updated process before stage pus is ", updatedProcess)

        updatedProcess.stages.push({
                                                        order:      newStageOrder,
                                                        name:       formData.name,
                                                        orgUnit:    formData.orgUnit,
                                                        stageOwner: formData.stageOwner,
                                                        contactDetails: formData.contactDetails,
                                                        steps:      [
                                                                        {
                                                                            order:          newStepOrder,
                                                                            stepOwner:      formData.stepOwner,
                                                                            action:         formData.stepAction,
                                                                            pass_to:        formData.pass_to, 
                                                                            purpose:        formData.purpose,
                                                                            channel:        formData.channel,
                                                                            tool:           formData.tool,
                                                                        }
                                                                    ]
                                                    })
        
        console.log("updated process AFTER stage push is ", updatedProcess)
        
        //TRIAL - Atempt to get upated process obj
        //returned from update ACtion to update state, processData
            const retrievedProcess = await updateAction(updatedProcess);       
            console.log("retrieved process is ", retrievedProcess) 

          const retrievedStages = await retrievedProcess.stages  
          setProcessData({...processData, stages: retrievedStages})
        // handleStateUpdate(processData.stages, retrievedProcess.stages)                                                
            
        //create new mermaid diagram and update mermaid code state                                            
        const newmermaidCodeGen = (diagObj)=>{

            let text=""
            const diagType="sequenceDiagram"
            // text = text +"\n"+ diagObj.type+"\n"
            text = text + "\n" + diagType + "\n"
            diagObj.stages.forEach((stage) => {
                text = text + "box " + stage.name+"\n"
                let lastindex = stage.steps.length - 1
        
                stage.steps.forEach((step,i)=>{
                    text = text + "participant " + step.stakeholder+"\n"
                    if(lastindex === i){ 
                        text = text + "end" + "\n"
                    }
                })
                
                stage.steps.forEach((step)=>{
                    text = text + "activate " + step.stakeholder + "\n"
                    text = text + "Note over " + step.stakeholder +": " + step.stakeholder+ " - <br/>" +  step.action + "<br/>" + "Doc: " + step.docType+ "\n"
                    // text = text + "Note over " + step.stakeholder +": Channel: " + "" +step.channel + "<br/> Tool: " + step.tool + "<br/>" + "\n"
                    // text = text + step.stakeholder + "-->" + step.pass_to + ":" + step.desc + "\n"
                    text = text + step.stakeholder + "->>" + step.pass_to + ":" + "Channel: "+ "" + step.channel + "<br/> Tool: " + step.tool + "<br/>"+"\n"
                    
                })
                
            })
            // console.log(text)
            return text
        }

        console.log('state mermaidCode BEFORE update ', processData.mermaidCode)
        const updatedMermaidCode = newmermaidCodeGen(retrievedProcess)
        console.log({updatedMermaidCode})
        setProcessData({...processData, mermaidCode: updatedMermaidCode})
        console.log('state mermaidCode after update ', processData.mermaidCode)
            //create coy of stages, push new stage
            // setProcessData(processData.process, retrievedProcess)
        //clear form    
        handleNewStageClick();

    }


    
    //EDIT FORM TRIAL
    const [editStageToggle] = useState(false);

    const handleEditStageSubmit = (event)=>{
        event.preventDefault(); 
        console.log("Edit form data is ",editFormData);

    }

    const handleEditInputChange = (event) =>{
        const {name, value} = event.target;
        setEditFormData((prevState) =>({...prevState, [name]: value}))
    }

    const handleInputChange = (event) =>{
        const { name, value } = event.target;
        setFormData((prevState)=>({ ...prevState, [name]: value}));
    }
    


    // console.log("From Show component, mermaid code fro loader data is " + mermaidCode);

    return (<Container sx={{ bgcolor: '#e8f0fc' }}>
        
            
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
        <ThemeProvider theme={theme}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Process Mapper
        </Typography>
        </ThemeProvider>
    </Toolbar>
    </AppBar>
    
    <Container maxWidth="sm" sx={{ bgcolor: '#e8f0fc' }}>    
        <br></br>
        <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    width: "100%",
                    // height: 100,
                    padding: 2,
                            },
            }}>

            <Paper elevation={3}>

            <ThemeProvider theme={theme}>
            
            <Typography variant="h5">{processData.process.processName}</Typography>
            
            <Typography variant="h5">Organization: {processData.process.orgUnit}</Typography>    
            <Typography variant="h5">Process Owner: {processData.process.processOwner}</Typography>
            <br></br>
            
            {/*  */}

            { !processToggle? <>
            
                <Button variant="outlined"
                        onClick={handleProcessOptionsClick}>
                    View options
                </Button>
                
            </>: <></>}

            {processToggle? 
            
                <>
                    <Button variant="contained"
                        onClick={handleProcessOptionsClick}>
                        Close
                    </Button>
                
                </> : <></>}
            
            {processToggle? 
                <>
                    <Stack direction="column" spacing={0}>
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
                    </Stack>         
            </>: <></>}

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

            {/*  */}
            
            
            </ThemeProvider>
                
             </Paper>   
            </Box>

            <br></br>    
                
            <Paper elevation={3}>
                <ThemeProvider theme={theme}>
                <Typography variant="h5"> {processData.process.processName} Process Map</Typography>
                </ThemeProvider>
                <br></br>    
                <Mermaid chart={processData.mermaidCode} />
            </Paper>
            
            <br></br>    
             

            <Card>
                <br></br>
                <ThemeProvider theme={theme}>
                    <Typography variant="h5"> Stages of {processData.process.processName}</Typography>
                </ThemeProvider>
    
                <br></br>
                {!stageToggle? <div>
                    <Button 
                        variant="outlined"
                        // startIcon = {<AddIcon />} 
                        onClick={handleNewStageClick}>
                        {/* Add New Stage */}
                        <ThemeProvider theme={theme}>
                            <Typography variant="h5">Add Stage</Typography>
                        </ThemeProvider>
                    </Button>
                    
                </div> 
                :
                <></>}
                <hr></hr>
                
                {stageToggle ? 
                            // <div>
                            // <Container>
                            <Box 
                                // component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}>    
                                
                                <ThemeProvider theme={theme}>      
                                    <Typography variant="h5">Adding New Stage</Typography>
                                    <Typography variant="h5">
                                        Stage Order - {processData.stages.length+1}
                                    </Typography>
                                </ThemeProvider>

                                <Form onSubmit={handleStageSubmit}>
                                <Stack direction="row" spacing={2}> 
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Stage Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Organization Unit"
                                    name="orgUnit"
                                    value={formData.orgUnit}
                                    onChange={handleInputChange}
                                />
                                </Stack>

                                <Stack direction="row" spacing={2}> 
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Stage owner"
                                    name="stageOwner"
                                    value={formData.stageOwner}
                                    onChange={handleInputChange}
                                />

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Contact Details"
                                    name="contactDetails"
                                    value={formData.contactDetails}
                                    onChange={handleInputChange}
                                />
                                </Stack> 
                                <hr></hr>       
                                    
                                <ThemeProvider theme={theme}>      
                                    <Typography variant="h5">
                                        Step order - {processData.stages.length+1.1}
                                    </Typography>
                                </ThemeProvider>
                                
                                <Stack direction="row" spacing={2}>    
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Step owner"
                                    name="stepOwner"
                                    value={formData.stepOwner}
                                    onChange={handleInputChange}
                                /> 

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Step action"
                                    name="stepAction"
                                    value={formData.stepAction}
                                    onChange={handleInputChange}
                                />
                                </Stack>

                                <Stack direction="row" spacing={2}> 
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Pass to"
                                    name="pass_to"
                                    value={formData.pass_to}
                                    onChange={handleInputChange}
                                /> 

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Purpose"
                                    name="purpose"
                                    value={formData.purpose}
                                    onChange={handleInputChange}
                                /> 
                                </Stack>

                                <Stack direction="row" spacing={2}>        
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Channel"
                                    name="channel"
                                    value={formData.channel}
                                    onChange={handleInputChange}
                                /> 

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Tool"
                                    name="tool"
                                    value={formData.tool}
                                    onChange={handleInputChange}
                                />
                                </Stack> 
                                    
                                    <br></br>
                                    <br></br>
                                    <Button variant="contained" type="submit">Submit</Button>
                                    <br></br>
                                    <br></br>
                                    <Button variant="contained"
                                        onClick={handleNewStageClick}>
                                                Cancel
                                    </Button>
                                        <br></br>
                                        
                                        
                                </Form>
                            </Box>
                            // </Container>    
                            // </div>
                            :
                            <></>
                }


                {/* STAGES */}
                <div>
                    
                    {processData.stages
                        .map((stage) => 
                            
                            <div>

                            <Stage stage={stage} key={stage._id} /> 
                            
                            </div>
                            )
                    }
                </div>

                {/* STEPS */}
                <div>    
                    {processData.stages.forEach((stage)=>{
                        console.log("Stage is "+ stage.name);
                        return stage.steps.map((step) => {
                            console.log("Step is "+ step.order);
                            return <Step step={step} key={step._id} />
                            
                        })
                    })

                    }
                </div>
                
            </Card>
        </Container>

 
        </Container>)

}
export default Show3;

