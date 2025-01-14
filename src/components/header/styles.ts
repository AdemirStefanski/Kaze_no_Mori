import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin-top: 5px;
  padding: 5px 20px 5px 20px;
`;

export const Logo = styled.img`
  height: 38px;
  margin-right: 30px;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 40px 0 10px;
  border: 2px solid #f0f0f0;
  border-radius: 20px;
  outline: none;
  background-color: #f0f0f0;

  &:focus {
    border-color: #517970;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 10px;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;

  svg {
    color: #999;
    font-size: 16px;
  }

  &:hover svg {
    color: #a07c5a;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

export const UserPhoto = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.6);
`;

export const UserName = styled.span`
  margin-right: 20px;
  font-weight: 600;
  color: #517970;
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

export const CartIconWrapper = styled.div`
  position: relative;
`;

export const CartIcon = styled.button`
  font-size: 32px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: #a07c5a;
  }
`;

export const CartBadge = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #f0f0f0;
  color: #a07c5a;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  border: none;
  overflow: hidden;
  white-space: nowrap;
`;

export const CartValue = styled.span`
  margin-left: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #517970;
`;

export const BottomLine = styled.div`
  background-color: #a17c5b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
`;

export const DropdownMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Category = styled.div`
  position: relative;
  padding: 10px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;

  &:hover .sub-categories {
    display: block;
  }

  /* Mudança de cor quando o mouse passa sobre o texto "Pots" */
  &:hover {
    color: #e4d7c6; /* Cor ao passar o mouse */
  }
`;

export const SubCategories = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px 5px; /* 15px nas laterais superior e inferior, 5px nas laterais esquerda e direita */
  width: auto; /* A largura será ajustada automaticamente ao conteúdo */
  min-width: 100px;
  border-radius: 8px;
  white-space: nowrap;
`;

export const CategoryItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: #a8c686; /* Cor inicial do texto das categorias */

  &:hover {
    color: #517970; /* Cor quando o mouse passa sobre a categoria */
  }
`;
