import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

import {
  HeaderContainer,
  TopLine,
  Logo,
  SearchContainer,
  SearchInput,
  UserContainer,
  UserPhoto,
  UserName,
  CartContainer,
  CartIcon,
  BottomLine,
  DropdownMenu,
  Category,
  SubCategories,
  CategoryItem,
  SearchButton,
  CartIconWrapper,
  CartBadge,
  CartValue,
} from "./styles";

import LogoBonsai from "../../assets/logos/logo_bonsai_name.png";
import UserImage from "../../assets/images/20210227_111716.jpg";

const Header: React.FC = () => {
  const itemCount = 13; // Número de itens no carrinho (temporário)
  const totalValue = "R$ 372,47";
  const userName = "Ademir Stefanski";

  return (
    <HeaderContainer>
      <TopLine>
        <Logo src={LogoBonsai} alt="Logo" />
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Procurar produto..."
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* <SearchButton onClick={handleSearch}> */}
          <SearchButton>
            <FaSearch />
          </SearchButton>
        </SearchContainer>
        <UserContainer>
          <UserPhoto src={UserImage} alt="Foto do usuário" />
          <UserName>{userName}</UserName>
        </UserContainer>
        <CartContainer>
          <CartIconWrapper>
            <CartIcon>
              <LuShoppingCart />
            </CartIcon>
            <CartBadge>{itemCount}</CartBadge>
          </CartIconWrapper>
          <CartValue>{totalValue}</CartValue>
        </CartContainer>
      </TopLine>
      <BottomLine>
        <DropdownMenu>
          <Category>
            Bonsais
            <SubCategories className="sub-categories">
              <CategoryItem>Subcategoria 1</CategoryItem>
              <CategoryItem>Subcategoria 2</CategoryItem>
              <CategoryItem>Subcategoria 2</CategoryItem>
            </SubCategories>
          </Category>
          <Category>
            Tools
            <SubCategories className="sub-categories">
              <CategoryItem>Subcategoria 1</CategoryItem>
              <CategoryItem>Subcategoria 2</CategoryItem>
            </SubCategories>
          </Category>
          <Category>
            Supplies
            <SubCategories className="sub-categories">
              <CategoryItem>Subcategoria 1</CategoryItem>
              <CategoryItem>Subcategoria 2</CategoryItem>
            </SubCategories>
          </Category>
          <Category>
            Accessories
            <SubCategories className="sub-categories">
              <CategoryItem>Subcategoria 1</CategoryItem>
              <CategoryItem>Subcategoria 2</CategoryItem>
            </SubCategories>
          </Category>
          <Category>
            Pots
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
