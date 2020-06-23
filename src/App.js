import React from 'react';
import MaterialButton from './Material'
import StyledButton from './Styled'

const App = () => (
  <div>
    <MaterialButton maxHeight='10px' variant='contained'>Material</MaterialButton>
    <StyledButton theme={{}} marginLeft='10px' paddingRight='12px' maxHeight='10px'>Styled</StyledButton>
    {/* <StyledButton theme={{}} css={{maxHeight: '10px'}}>Styled</StyledButton> */}
  </div>
)

export default App;
