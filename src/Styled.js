import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { spacing, sizing, compose, css } from "@material-ui/system";

const MyButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border: 0;
  border-radius: 3;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  color: white;
  height: 48px;
  padding: 0 30px;
  ${css(compose(spacing, sizing))}
`;

export default MyButton;
