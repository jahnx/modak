import React from "react";
import styled from "styled-components";

import FilterCategory from "./FilterCategory";

interface CategoryInfoProps {
  name: string;
  options: string[];
}

interface Props {
  categories: CategoryInfoProps[];
}

const FilterFinder = ({ categories }: Props) => {
  return (
    <FinderContainer>
      {categories.map((category) => {
        return <FilterCategory key={category.name} category={category} />;
      })}
      <ButtonContainer>
        <StyledButton>초기화</StyledButton>
        <StyledButton>검색</StyledButton>
      </ButtonContainer>
    </FinderContainer>
  );
};

FilterFinder.defaultProps = {
  categories: [
    {
      name: "지역",
      options: [
        "서울시",
        "부산시",
        "대구시",
        "인천시",
        "광주시",
        "대전시",
        "울산시",
        "세종시",
        "경기도",
        "강원도",
      ],
    },
    {
      name: "주변환경",
      options: ["해변", "산", "숲", "계곡", "강", "호수", "도심"],
    },
    {
      name: "바닥",
      options: ["파쇄석", "데크", "잔디"],
    },
    {
      name: "부대시설",
      options: ["전기", "wifi", "온수", "수영장", "산책로", "편의점"],
    },
    {
      name: "테마",
      options: ["낚시", "일출명소", "일몰명소", "물놀이", "액티비티"],
    },
  ],
};

export default FilterFinder;

const FinderContainer = styled.div`
  margin-top: 1em;
  border: 1px solid #ebebeb;
  border-radius: 10px;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.1);
  padding: 30px 50px;
  color: ${({ theme }) => theme.FONT_COLOR.PRIMARY_COLOR};
`;

const ButtonContainer = styled.div`
  text-align: right;
`;

const StyledButton = styled.button`
  border: none;
  padding: 10px 20px;

  &:hover {
    cursor: pointer;
  }

  & + button {
    margin-left: 20px;
  }
`;