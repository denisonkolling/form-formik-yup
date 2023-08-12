import { Field, ErrorMessage } from 'formik';
import { styled } from 'styled-components';
import { Container, FieldStyled  } from './styles';

import React from 'react';

const Input = ({ name, type = '', label, required, ...props }) => {
	return (
    <Container> 
      <Field as={FieldStyled} name={name} type={type} required={required} {...props} />
      </Container>
  )
};

export default Input;
