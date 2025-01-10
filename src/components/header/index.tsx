import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

const TopLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const Logo = styled.img`
  height: 40px; // Ajuste conforme o tamanho do seu logotipo
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const SearchInput = styled.input`
  height: 30px;
  width: 100%;
  border: none;
  border-radius: 15px;
  padding-left: 10px;
  background-color: #f0f0f0;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const UserPhoto = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const UserName = styled.span`
  margin-right: 20px;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CartIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;

const BottomLine = styled.div`
  background-color: #a17c5b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 20px;
`;

const DropdownMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Category = styled.div`
  position: relative;
  padding: 10px;
  cursor: pointer;
  &:hover .sub-categories {
    display: block;
  }
`;

const SubCategories = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  width: 100%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const CategoryItem = styled.div`
  padding: 10px;
  cursor: pointer;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <TopLine>
        <Logo src="logo.png" alt="Logo" />
        <SearchContainer>
          <SearchInput placeholder="Procurar produto..." />
        </SearchContainer>
        <UserContainer>
          <UserPhoto src="user.jpg" alt="Foto do usuário" />
          <UserName>Nome do Usuário</UserName>
        </UserContainer>
        <CartContainer>
          <CartIcon src="cart-icon.png" alt="Carrinho de Compras" />
          <span>R$ 100,00</span>
        </CartContainer>
      </TopLine>
      <BottomLine>
        <DropdownMenu>
          <Category>
            Categoria 1
            <SubCategories className="sub-categories">
              <CategoryItem>Subcategoria 1</CategoryItem>
              <CategoryItem>Subcategoria 2</CategoryItem>
            </SubCategories>
          </Category>
          <Category>
            Categoria 2
            <SubCategories className="sub-categories">
              <CategoryItem>Subcategoria 1</CategoryItem>
              <CategoryItem>Subcategoria 2</CategoryItem>
            </SubCategories>
          </Category>
          <Category>
            Categoria 3
            <SubCategories className="sub-categories">
              <CategoryItem>Subcategoria 1</CategoryItem>
              <CategoryItem>Subcategoria 2</CategoryItem>
            </SubCategories>
          </Category>
          <Category>
            Categoria 4
            <SubCategories className="sub-categories">
              <CategoryItem>Subcategoria 1</CategoryItem>
              <CategoryItem>Subcategoria 2</CategoryItem>
            </SubCategories>
          </Category>
          <Category>
            Categoria 5
            <SubCategories className="sub-categories">
              <CategoryItem>Subcategoria 1</CategoryItem>
              <CategoryItem>Subcategoria 2</CategoryItem>
            </SubCategories>
          </Category>
        </DropdownMenu>
      </BottomLine>
    </HeaderContainer>
  );
};

export default Header;
