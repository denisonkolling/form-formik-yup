import { Field, ErrorMessage } from 'formik';
import { styled } from 'styled-components';
import { Container, FieldStyled, Label, RequiredLabel, ErrorStyled  } from './styles';

import React from 'react';

const Input = ({ name, type = '', label, required, ...props }) => {
	return (
    <Container> 
      <Label>
        {label || name}
        {required && <RequiredLabel>*</RequiredLabel>}
      </Label>
      <Field as={FieldStyled} name={name} type={type} required={required} {...props} />
      <ErrorMessage name={name} component={ErrorStyled} />
      </Container>
  )
};

export default Input;
