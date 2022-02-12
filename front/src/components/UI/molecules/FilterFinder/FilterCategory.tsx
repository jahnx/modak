import React from "react";
import styled from "styled-components";
import StyledCheckbox from "./CheckButton";

const FilterCategory = ({ category }) => {
  return (
    <StyledFilterList>
      <FilterName id="mobile-toggle" onClick={clickHandler}>
        {category.name}
        <div id="burger">
          <div id="line1"></div>
          <div id="line2"></div>
        </div>
      </FilterName>
      <ul>
        {category.options.map((option) => (
          <StyledCheckbox option={option} key={option} />
        ))}
      </ul>
    </StyledFilterList>
  );
};

export default FilterCategory;

const StyledFilterList = styled.div`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    display: block;

    ul {
      width: 100%;
      height: 0;
      visibility: hidden;
      opacity: 0;
      transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    & > #mobile-toggle.active + ul {
      height: auto;
      visibility: visible;
      opacity: 100%;
    }

    #mobile-toggle.active > #burger > #line2 {
      transform: rotate(0deg);
    }
  }
`;

const FilterName = styled.div`
  width: 100px;
  font-size: 20px;

  .burger {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.BP.TABLET}) {
    display: flex;
    justify-content: space-between;
    width: 100%;

    #burger {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      position: relative;
      pointer-events: none;

      div {
        position: absolute;
        width: 50%;
        height: 2px;
        background-color: #c0c0c0;
      }

      #line2 {
        transition: 0.3s all;
        transform: rotate(90deg);
      }
    }
  }
`;

const clickHandler = (e) => {
  e.target.classList.toggle("active");
};
