import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { palette } from 'variables';

export const Container = styled.div`
    width: 96%;
    max-width: 1170px;
    margin: auto;
`;

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
            value={props.value}
        />
    </TextAreaWrapper>
);

TextArea.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.any,
    label: PropTypes.string,
    labelIsHidden: PropTypes.bool,
}

export const UL = styled.ul`
    margin-left: 27px;
    padding-left: 0;
    list-style: none;
    position: relative;
`;

export const LI = styled.li`
    margin: 5px 0;

    &.type-object,
    &.type-array {
        &:before {
            content: '+';
            display: inline-block;
            margin-left: -22px;
            margin-right: 9px;
            border: 1px solid ${palette.concrete};
            text-align: center;
            font-size: 10px;
            width: 10px;
            opacity: 0.5;
        }

        &.expanded {
            &:before {
                content: '-';
            }
        }
    }
`;

export const DL = styled.dl`
`;

export const DT = styled.dt`
    display: inline-block;
    vertical-align: top;
`;

export const DD = styled.dd`
    display: inline-block;
    vertical-align: top;
`;

export const Property = styled.span`
    display: inline-block;
    vertical-align: top;
    color: ${palette.linkBlue};

    &.type-object,
    &.type-array {
        cursor: pointer;
    }

    & .open-array,
    & .open-object {
        color: ${palette.concrete};
        cursor: pointer;
        display: inline-block;
    }
`;

export const Value = styled.span`
    display: inline-block;
    vertical-align: top;
    white-space: normal;
    color: ${palette.green};

    &.collapsed {
        & .placeholder {
            color: ${palette.concrete};
            cursor: pointer;
            display: inline-block;
            margin-left: 8px;
        }
        & .unit-value {
            color: ${palette.green};
            cursor: pointer;
        }
    }
    
`;