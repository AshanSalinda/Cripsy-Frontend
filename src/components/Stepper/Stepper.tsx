import React from 'react';
import { Stepper as MuiStepper, Step, StepLabel } from '@mui/material';

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
        activeStep={2}
        alternativeLabel
        sx={{
          "& .MuiStepConnector-line": {
            borderTopWidth: 3,
            borderColor: "#165923",
            marginX: 2,
            borderRadius: '10px',
            opacity: 1
          },
          "@keyframes activeScale": {
            "0%": {
              transform: "scale(1)",
              boxShadow: "0 0 0 4px #FFFF, 0 0 0 6px #1ECF41",
            },
            "50%": {
              transform: "scale(1)", // Scale the icon when it's active
              boxShadow: "0 0 0 8px #FFFF, 0 0 0 10px #1ECF41", // Increase shadow size for emphasis
            },
            "100%": {
              transform: "scale(1)",
              boxShadow: "0 0 0 4px #FFFF, 0 0 0 6px #1ECF41",
            },
          },
          "& .MuiStepIcon-root": {
            color: "#1ECF41",
            width: "2rem", 
            height: "2rem",
          
          },
          "& .MuiStepIcon-root.Mui-active": {
            border: "2px solid #1ECF41",
            borderRadius: "50%",
            color: "#FFFFFF",
            boxShadow: "0 0 0 4px #FFFF, 0 0 0 6px #1ECF41", // Double border on active step icon
           // Add animation for scaling and shadow
          },
          "& .MuiStepIcon-text": {
            fill: "#000000",
            color: "#1ECF41"
          },
          "& .MuiStepLabel-label": {
            fontSize: "1.2rem",
          },
          "& .MuiStepLabel-iconContainer": {
            fontSize: "2rem",
          },
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel
              sx={{
                "& .MuiStepIcon-root": {
                  color: "#1ECF41",
                  width: "2rem",
                  height: "2rem",
                },
                "& .MuiStepIcon-root.Mui-active": {
                  border: "2px solid #1ECF41",
                  borderRadius: "50%",
                  color: "#FFFFFF",
                  boxShadow: "0 0 0 4px #FFFF, 0 0 0 6px #1ECF41",
                  animation: 'activeScale 1.5s ease-in-out infinite',
                },
                "& .MuiStepLabel-label": {
                  fontSize: "1.2rem",
                  fontFamily: "Inter, sans-serif",
                  
                },
                "& .MuiStepLabel-iconContainer": {
                  fontSize: "2rem",
                  color: "#1ECF41",
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </MuiStepper>
    </div>
  );
}

export default Stepper;
