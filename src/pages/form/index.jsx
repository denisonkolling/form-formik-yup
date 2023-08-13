import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/Input';
import React from 'react';
import { Container, Content, Row } from './styles';

const Registration = () => {
	const initialValues = {};

	const validationSchema = Yup.object({
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    naturalidade: '',
    endereco: '',
    cidade: '',
    email: '',
    celular: '',
  });

	const handleSubmit = (values, { setSubmitting }) => {
		console.log(values);
		setSubmitting(false);
	};

	return (
		<Container>
			<Content>
				<Formik
					onSubmit={handleSubmit}
					initialValues={initialValues}
					validationSchema={validationSchema}>
					{({ values, isSubmitting }) => (
						<Form style={{ width: '90%' }}>
							<Row>
								<Input name="nome" required />
								<Input name="sobrenome" required />
							</Row>
							<Row>
								<Input
									name="dataNascimento"
									type="date"
									label="Data de Nascimento"
									required
								/>
								<Input name="naturalidade" />
							</Row>
							<Row>
								<Input label='endereço'name="endereco" />
								<Input name="cidade" disabled={!values.endereço}/>
							</Row>
							<Row>
								<Input name="email" type='email' required />
								<Input name="sobrenome" type='number' required />
							</Row>
						</Form>
					)}
				</Formik>
			</Content>
		</Container>
	);
};

export default Registration;
