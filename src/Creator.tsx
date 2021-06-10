import React, { useEffect, useState } from "react"
import eyes from './eyes.png';
import './Creator.css';
import { SketchPicker } from 'react-color'
import { examples } from './examples'
import functionPlot from "function-plot";
import { Box, Paper, TextField, Button } from "@material-ui/core";

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
          r: `R + (1/(1+E^(-( ${xFormula} ))))/Ar`,
          // r: `${xFormula}`,

          scope: {
            R: 0.5,
            high: 4,
            low: -4,
            pi: 3.14,
            PI: 3.14,
            Ar: coeff
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
  const [formula, setFormula] = useState('0')
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
        <Box display="flex" justifyContent='center' m={4}>
        {Object.entries(examples).map(([name, formula]) => (
              <Button
                variant="contained"
                color="primary"
                key={name}
                onClick={() => setFormula(formula)}>
                {name}
              </Button>
            ))}
         
          {/* <Box m={1} width={300}>
          <Paper variant='outlined'>
            <List
              subheader={
                <ListSubheader component="div">
                  Examples
              </ListSubheader>
              }
            >
              {Object.entries(examples).map(([name, formula]) => (
                <ListItem key={name} button>
                  <ListItemText primary={name} onClick={() => { setFormula(formula) }} />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box> */}
          <Box m={1}>
            <Paper variant='outlined'>
              <div>
                <SketchPicker />
              </div>
            </Paper>
          </Box>
        </Box>

    </>
  )
}