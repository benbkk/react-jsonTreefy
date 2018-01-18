import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from 'variables';

const FormWrapper = styled.form`
    position: relative;

    &:after {
        display: table;
        width: 100%;
        clear: both;
    }
`;

export const Form = props => (
    <FormWrapper>
        {props.children}
    </FormWrapper>
);

Form.propTypes = {
    children: PropTypes.node,
}


const TextAreaWrapper = styled.div`
    min-height: 300px;
`;

const TextAreaInput = styled.textarea`
    width: 100%;
    min-height: inherit;
`;

const InputLabel = styled.label`
    display: block;
`;

export const TextArea = props => (
    <TextAreaWrapper
        className={props.className}
    >
        <InputLabel
            className={props.labelIsHidden ? 'SR' : 'label-textarea'}
            htmlFor={props.id}
            isHidden={props.labelIsHidden}
            label={props.label}
        >
            {props.label}
        </InputLabel>
        <TextAreaInput
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    </TextAreaWrapper>
);

TextArea.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,

    label: PropTypes.string,
    labelIsHidden: PropTypes.bool,


}
