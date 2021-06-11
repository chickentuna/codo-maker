export const examples = {
  Propeller: '(sin(4*theta))*20',
  Fuzzy: 'sin(4*high*theta)',
  Geometric: '-abs(sin(4*theta))',
  Hair: ' floor(theta-1.05) == 0 ? (sin((theta+0.15)*30) * high) : low',
  Buzz: 'cos(theta*2)*sin(theta*50)*high',
  Star: '(sin(5*theta))*4',
  Sun: '-26*abs(sin(5*theta))',
  Screw: '(theta + 0.2) % pi/2 < pi / 16 ? low : high',
  Sonic: '(((theta % (pi / 5))/(pi/5))*2 - 1) * 1.5',
  Cotonball: 'abs(cos(theta*9))*2',
  Artistic: '-abs(sin(4*theta)) * cos(theta*4)*5',
  Small: 'low',
  Big: 'high'

}

