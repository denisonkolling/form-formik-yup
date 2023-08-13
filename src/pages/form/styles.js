import { styled } from 'styled-components';

export const Container = styled.div`
	padding: 60px;
	display: flex;
	justify-content: center;
`;

export const Content = styled.div`
	width: 80%;
	max-width: 600px;
	display: flex;
	justify-content: center;
	box-shadow: 0 1px 2px;
	padding: 30px 0;
`;

export const Row = styled.div`
	display: flex;
	gap: 20px;

	@media (max-width: 550px) {
		display: block;
	}
`;
