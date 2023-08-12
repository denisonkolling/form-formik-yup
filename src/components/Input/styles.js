import { styled } from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px;
	margin-bottom: 15px;
	width: 100%;
`;

export const FieldStyled = styled.input`
	padding: 10px;
	border-radius: 5px;
	border: 1px solid #ccc;
	outline: none;
	font-size: 18px;
	width: 90%;
`;

export const Label = styled.label`
	text-transform: capitalize;
`;

export const RequiredLabel = styled.span`
	color: red;
`;
