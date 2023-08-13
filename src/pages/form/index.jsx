import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/Input';
import React from 'react';
import { ButtonContainer, Container, Content, Row, Button } from './styles';

const Registration = () => {
  
	const initialValues = {
		nome: '',
		sobrenome: '',
		dataNascimento: '',
		naturalidade: '',
		endereco: '',
		cidade: '',
		email: '',
		celular: '',
	};

	const validationSchema = Yup.object({
		nome: Yup.string()
			.min(3, 'O campo dever ter no mínimo 3 caracteres')
			.required('Campo obrigatório'),
		sobrenome: Yup.string().required('Campo obrigatório'),
		email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
		dataNascimento: Yup.date().max(
			new Date(),
			'Não é possível incluir uma data futura'
		),
		celular: Yup.string()
			.max(13, 'O campo deve ter no máximo 13 caracteres')
			.required('Campo obrigatório'),
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
								<Input label="endereço" name="endereco" />
								<Input name="cidade" disabled={!values.endereco} />
							</Row>
							<Row>
								<Input name="email" type="email" required />
								<Input name="celular" type="number" required />
							</Row>

							<ButtonContainer>
								<Button type="submit" disabled={isSubmitting}>
									Salvar
								</Button>
							</ButtonContainer>
						</Form>
					)}
				</Formik>
			</Content>
		</Container>
	);
};

export default Registration;
