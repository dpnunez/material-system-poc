import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { spacing, sizing, compose } from "@material-ui/system";


// Working
const MyButton = styled(Button)(compose(spacing, sizing));

// Not working
// const MyButton = styled(Button)((props) => ({
//   backgroundColor: 'red',
//   ...compose(spacing, sizing)(props)
// }))


export default MyButton;
