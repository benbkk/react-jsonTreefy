import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from 'variables';

const ButtonStyled = styled.button`
    background: ${palette.green};
    color: ${palette.offWhite};
    opacity: 0.9;
    transition: opacity 0.2s, transform 0.2 ease-in-out;

    &.green {
        background: ${palette.green};
        color: ${palette.midnightBlue};
    }

    &.linkBlue {
        background: ${palette.linkBlue};
    }

    &:disabled {
        background: initial;
        opacity: 0.5;
    }

    &.concrete {
        background: ${palette.concrete};
        color: ${palette.midnightBlue};
    }

    &:hover,
    &:active {
        opacity: 1;
        transform: translateY(0);
    }

    &:active {
        transform: translateY(2px);
    }
`;

const Button = props => {
    return (
        <ButtonStyled 
            className={`${props.className} ${props.color}`} 
            disabled={props.disabled}
            onClick={props.onClick}>
            {props.children}
        </ButtonStyled>
    )
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}

export default Button;