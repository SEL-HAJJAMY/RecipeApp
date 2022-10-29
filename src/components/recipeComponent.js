import styled from "styled-components";



export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
  border-radius: 20px 0px;
  margin-bottom: 20px;


`;

export const CoverImage = styled.img`
  height: 200px;
  object-fit: cover;
  border-radius: 20px 0px;

`;
export const RecipeName = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
  margin: 10px 0;
  font-family: Heebo;
  text-align: center;

`;

export const IngredientText = styled.span`
  font-size: 18px;
  border: solid 1px #F89447;
  color: black;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 50px;
  color: #F89447;
  text-align: center;
  font-family: Heebo;
  margin-bottom: 12px;
`;

export const SeemoreText = styled(IngredientText)`
  border: solid 1px #4C3320;
  color: #4C3320;
`;