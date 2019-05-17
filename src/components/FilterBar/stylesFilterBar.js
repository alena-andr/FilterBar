import styled from 'styled-components';

import search from '../../assets/images/search.svg';
import error from '../../assets/images/error-icon.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 600px;
`

export const FilterBlock = styled.div`
  background: #2e2a3b;
  width: 120px;
  height: 60px;
  margin-right: 10px;
  border-radius: 3px;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
`

export const InputBlock = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: row;
  background: white;
  height: 56px;
  border-radius: 3px;
  align-items: center;
  padding: 0 20px;
  border: ${props => props.error === true ? '2px solid red' : '2px solid rgba(0, 0, 0, 0.15)'};
`

export const IconWrapper = styled.div`
    padding: 10px;
`

export const SearchIcon = styled.div`
  width: 15px;
  height: 15px;
  background-image: url(${search});
  background-size: 15px 15px;
  background-repeat: no-repeat;
  opacity: .6;
`

export const Input = styled.input`
  flex: 1;
  width: 100%;
  height: 44px;
  border: none;

  &:focus {
      outline: none;
  }
`

export const CancelButton = styled.button`
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.15);
  height: 30px;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
    background-color: #eaeaea;
  }

  &:focus {
    outline: none;
  }
`

export const RequiredWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 62px;
  width: 100%;
  background-color: rgba(255, 0, 0, 0.18);
  padding: 5px 0;
  text-align: left;
  font-size: 10px;
  border-radius: 3px;
  color: red;
`

export const RequiredText = styled.span`
  padding-left: 20px;
`

export const ErrorIcon = styled.div`
  width: 15px;
  height: 15px;
  background-image: url(${error});
  background-size: 15px 15px;
  background-repeat: no-repeat;
`
