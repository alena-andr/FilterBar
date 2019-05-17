import React, {useState} from 'react';

import Filter from '../../assets/images/Filter';
import {
	Container,
	FilterBlock,
	InputBlock,
	IconWrapper,
	SearchIcon,
	Input,
	CancelButton,
	RequiredWrapper,
	RequiredText,
	ErrorIcon,
} from './stylesFilterBar';


export default function FilterBar() {
	const [text, changeText] = useState('');
	const [error, setError] = useState(false);

	function changeTextHandler(e) {
		if (error) setError(false);
		changeText(e.target.value);
	}

	function clearTextHandler() {
		changeText('');
	}

	function filterHandler() {
		if (text.trim()) {
			console.log('Input text:', text);
			clearTextHandler();
		} else {
			setError(true);
			clearTextHandler();
		}
	}

	return (
		<Container>
			<FilterBlock onClick={filterHandler}>
				<Filter />
				<span>Filter</span>
			</FilterBlock>
			<InputBlock error={error}>
				<IconWrapper>
					<SearchIcon />
				</IconWrapper>
				<Input
					type="text"
					placeholder="Search for quotation..."
					value={text}
					onChange={changeTextHandler}
				/>
				{
					text.length ? (
						<CancelButton onClick={clearTextHandler}>
							CANCEL
						</CancelButton>
					): null
				}
				{error ? <ErrorIcon /> : null}
				{
					error ? (
						<RequiredWrapper>
							<RequiredText>Required</RequiredText>
						</RequiredWrapper>
					) : null
				}
			</InputBlock>
		</Container>
	);
}
