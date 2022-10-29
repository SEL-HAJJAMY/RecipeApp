import styled from 'styled-components';

 

export const Header = styled.div`
  color: white;
  background-color: #62452F;
  display : flex;
  flex-direction: row;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;
`;

export const AppNameComponent = styled.div`
  display: flex;
  align-items: center;
  
`;
export const AppIcon = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;

`;

export const SearchComponent = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 10px;
  border-radius: 50px;
  width: 50%;


`;
export const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
export const SearchInput = styled.input`
  border: none;
  outline: none;
  margin-left: 15px;
  font-size: 16px;
`;