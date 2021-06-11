import React, { useEffect, useState } from "react"
import eyes from './eyes.png';
import './Creator.css';
import { SketchPicker } from 'react-color'
import { examples } from './examples'
import functionPlot from "function-plot";
import { Box, Paper, TextField, Button, Typography, Divider, Container } from "@material-ui/core";
// import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

function initPlot(formula: string, coeff: number) {
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
          closed: false,
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

  //Testing image generation
  /*
  var node = document.getElementById('main');
  if (node != null) {
    toPng(node)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  }
  */
}

export function Creator() {
  const [formula, setFormula] = useState('0')
  // const [color, setColor] = useState('#000')
  const [coeff] = useState(6)

  useEffect(() => {
    initPlot(formula, coeff)
  }, [formula, coeff])

  return (

    <Container maxWidth="md">
      <Typography variant="h4" component="h4">
        Preview
      </Typography>
      <div className="preview" id="main">
        <div className="eyesContainer">
          <img className="eyes" src={eyes} alt=''></img>
        </div>

        <div id="plot"></div>
      </div>
      <Divider />

      <Box m={4}>
        <Typography variant="h4" component="h4">
          Shape
      </Typography>
        <Box display="flex" justifyContent='center'>
          <Box m={4} width={400}>
            <TextField
              value={formula}
              onChange={e => setFormula(e.target.value)}
              label="Formula"
              fullWidth
              variant='outlined'
            />
          </Box>
        </Box>
      </Box>
      <div id="errs"></div>
      <Box m={4}>
        <Typography variant="h6" component="h6" color='primary'>
          Examples
      </Typography>
        <Box m={2}>
          {Object.entries(examples).map(([name, formula]) => (
            <Button
              variant="contained"
              color="primary"
              key={name}
              onClick={() => setFormula(formula)}>
              {name}
            </Button>
          ))}
        </Box>
      </Box>
      <Box m={1}>
        <Paper variant='outlined'>
          <div>
            <SketchPicker />
          </div>
        </Paper>
      </Box>

    </Container>
  )
}