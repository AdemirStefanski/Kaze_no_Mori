import React, { useState, useEffect } from "react";
import bonsaiData from "../../data/bonsai.json"; // Importa os dados do JSON

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
  const itemCount = 13;
  const totalValue = "R$ 372,47";
  const userName = "Ademir Stefanski";

  const [speciesList, setSpeciesList] = useState<string[]>([]);
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  useEffect(() => {
    const speciesSet = new Set(bonsaiData.map((bonsai) => bonsai.species));
    setSpeciesList(Array.from(speciesSet));
  }, []);

  // Fecha o menu quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".category-menu")) {
        setOpenCategory(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <HeaderContainer>
      <TopLine>
        <Logo src={LogoBonsai} alt="Logo" />
        <SearchContainer>
          <SearchInput type="text" placeholder="Procurar produto..." />
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
          {/* Categoria Bonsais */}
          <Category
            className="category-menu"
            onMouseEnter={() => setOpenCategory("bonsais")}
            onMouseLeave={() => setOpenCategory(null)}
          >
            Bonsais
            <SubCategories isOpen={openCategory === "bonsais"}>
              {speciesList.map((species, index) => (
                <CategoryItem key={index}>{species}</CategoryItem>
              ))}
            </SubCategories>
          </Category>

          {/* Outras categorias */}
          {["Tools", "Supplies", "Accessories", "Pots"].map((category) => (
            <Category
              key={category}
              className="category-menu"
              onMouseEnter={() => setOpenCategory(category)}
              onMouseLeave={() => setOpenCategory(null)}
            >
              {category}
              <SubCategories isOpen={openCategory === category}>
                <CategoryItem>Subcategoria 1</CategoryItem>
                <CategoryItem>Subcategoria 2</CategoryItem>
              </SubCategories>
            </Category>
          ))}
        </DropdownMenu>
      </BottomLine>
    </HeaderContainer>
  );
};

export default Header;
