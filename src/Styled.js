import React from 'react'
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { spacing, sizing } from "@material-ui/system";

const allowedProps = ({props, system}) => {
    const notAllowedProps = filterProps({props, system})
    const allowedProps = Object.entries(props).reduce((acc, [key, value]) => {
        if (!notAllowedProps.includes(key)) {
            return {...acc, [key]: value}
        }
        return acc
    }, {})
    return allowedProps
}

const filterProps = ({props, system}) => {
    const objSystem = system.reduce((acc, element) => ({
        ...acc,
        ...element(props)
    }), {})
    return Object.keys(objSystem)
}

const ButtonBase = (props) => <Button {...allowedProps({props, system: [spacing, sizing]})} />

const MyButton = styled(ButtonBase)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border: 0;
  border-radius: 3;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  color: white;
  height: 48px;
  padding: 0 30px;
  ${spacing}
  ${sizing}
`;
export default MyButton;