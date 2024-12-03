import React from 'react'
import {Stepper as MuiStepper, Step, StepLabel} from '@mui/material';

const steps = [
    'Order Placed',
    'Processing',
    'Shipped',
    'Delivered'
  ];

function Stepper() {
  return (
    <div>
        <MuiStepper 
            activeStep={3} 
            alternativeLabel
            sx={{
                
                "& .MuiStepConnector-line": {
                  borderTopWidth: 3, 
                  borderColor: "#165923", 
                  marginX: 2,

                },
              }} 
    >
            {steps.map((label) => (
            <Step key={label}>
                <StepLabel sx={{
                                "& .MuiStepIcon-root": {
                                    color: "#1ECF41", // Customize completed and active step colors
                                    width: "2rem", // Adjust the size of the step icon
                                    height: "2rem",
                                   
                                },
                                "& .MuiStepIcon-root.Mui-active": {
                                    border: "2px solid #1ECF41", // Add border only for the active step icon
                                    borderRadius: "50%",
                                    color: "#FFFFFF", // Active icon color
                                },
                                "& .MuiStepIcon-text": {
                                    fill: "#000000",
                                     // Customize text inside the icon
                                },
                                "& .MuiStepLabel-label": {
                                    fontSize: "1.2rem",
                                    
                                    
                                  },
                                  "& .MuiStepLabel-iconContainer": {
                                    fontSize: "2rem",
                                     // Adjust the icon size if needed
                                  },
                            }}>{label}</StepLabel>
            </Step>
            ))}
        </MuiStepper>
    </div>
  )
}

export default Stepper