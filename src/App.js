import React from 'react';
import MaterialButton from './Material'
import StyledButton from './Styled'

const App = () => (
  <div>
    <MaterialButton maxHeight='10px' variant='contained'>Material</MaterialButton>
    <StyledButton css={{maxHeight: '10px'}}>Styled</StyledButton>
  </div>
)

export default App;
