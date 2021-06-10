import React, { useEffect, useState } from "react"
import eyes from './eyes.png';
import './Creator.css';
import { SketchPicker } from 'react-color'


import functionPlot from "function-plot";
import { Box, TextField } from "@material-ui/core";

function initPlot(formula: string, coeff: number) {
  let contentsBounds = document.body.getBoundingClientRect();
  let width = 800;
  // let height = 500;
  let ratio = contentsBounds.width / width;
  width *= ratio;
  // height *= ratio;
  const errs = document.querySelector('#errs')

  try {

    const xFormula = formula.replaceAll('theta', '(theta%(3.14*2))')

    functionPlot({
      target: "#plot",
      yAxis: { domain: [-1.897959183, 1.897959183] },
      xAxis: { domain: [-3, 3] },
      grid: false,
      annotations: [],
      disableZoom: true,
      data: [
        {
          //r: "R + Ar * sin(N*theta)",
          //r: "R + (1/(1+E^(-(Ar * sin(N*theta)))))/10",
          //r: "R + (1/(1+E^(-( -abs(sin(4*theta)) ))))/2",

          r: `R + (1/(1+E^(-( ${xFormula} ))))/Ar`,
          // r: `((cos(${formula}) + 1)/2 * Ar) + 1`,
          // r:formula, 

          //r: "R + (1/(1+E^(-( cos(theta*theta) ))))/2",
          //r: (sin(5*theta))*4
          //r: -26*abs(sin(5*theta))
          scope: {
            R: 0.5,
            Ar: coeff,
            N: 100
          },
          fnType: "polar",
          graphType: "polyline",
          range: [0, 2 * Math.PI],
          color: 'black',
        },

      ]
    });
    if (errs != null) {
      errs.innerHTML = ''
    }
  } catch (e) {

    if (errs != null) {
      errs.innerHTML = e.message
    }

  }
}

export function Creator() {
  const [formula, setFormula] = useState('(sin(4*theta))*6')
  // const [color, setColor] = useState('#000')
  const [coeff] = useState(6)

  useEffect(() => {
    initPlot(formula, coeff)
  }, [formula, coeff])

  return (
    <>
      <div className="preview">
        <div className="eyesContainer">
          <img className="eyes" src={eyes} alt=''></img>
        </div>

        <div id="plot"></div>
      </div>
      <Box m={4}>
        <Box m={4}>
          <TextField
            value={formula}
            onChange={e => setFormula(e.target.value)}
            label="Formula"
            fullWidth
            variant='outlined'
          />
        </Box>
      </Box>
      <div id="errs"></div>
      <div>
        <SketchPicker />
      </div>
    </>
  )
}