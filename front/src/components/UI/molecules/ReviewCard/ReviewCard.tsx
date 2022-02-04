import React, { memo } from "react";
import styled from "styled-components";
import HeartIcon from "@icons/HeartIcon";

const StyledContainer = styled.li`
  max-width: 1100px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  background-color: #f6f6f6;
  padding: 30px;
  justify-content: center;
`;

const StyledProfileContainer = styled.div`
  padding: 10px;
  flex-basis: 10%;
  text-align: center;
`;

const StyledProfile = styled.a`
  & img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  & .author {
    font-weight: bold;
  }
`;

const StyledProfileIconBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const StyledReviewCard = styled.div`
  flex-basis: 70%;
  padding: 10px;
`;

const StyledReviewContents = styled.div`
  & .createAt {
    color: #757575;
  }
  & .description {
    padding: 5px;
  }
`;

const StyledReviewPhotos = styled.div`
  display: flex;
  gap: 20px;
  & img {
    width: 30%;
  }
`;

const StyledReviewLikeBox = styled.div`
  display: flex;
  justify-content: end;
  padding: 6px;
`;

const StyledReviewLike = styled.div`
  transition: color 0.1s;
  padding: 5px;
  :hover {
    color: #f29f05;
    cursor: pointer;
  }
`;

const StyledReviewIconBox = styled.button`
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: darkgray;
  background-color: transparent;

  & svg {
    fill: darkgray;
    width: 20px;
    height: 20px;
    transition: all 0.15s;
  }

  :hover {
    & svg {
      fill: #bd1e1e;
    }
  }

  div + span {
    font-size: 14px;
  }
`;

const StyledPostIconBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: darkgray;
`;

const ReviewCard = () => {
  // 테스트용 데이터
  const review = {
    _id: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum corporis dignissimos ducimus cum earum ipsa magnam! Obcaecati nemo, voluptatibus, deleniti nesciunt molestiae, debitis suscipit corporis perspiciatis enim impedit architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum corporis dignissimos ducimus cum earum ipsa magnam! Obcaecati nemo, voluptatibus, deleniti nesciunt molestiae, debitis suscipit corporis perspiciatis enim impedit architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum corporis dignissimos ducimus cum earum ipsa magnam! Obcaecati nemo, voluptatibus, deleniti nesciunt molestiae, debitis suscipit corporis perspiciatis enim impedit architecto. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa illum corporis dignissimos ducimus cum earum ipsa magnam! Obcaecati nemo, voluptatibus, deleniti nesciunt molestiae, debitis suscipit corporis perspiciatis enim impedit architecto.",
    photos: [
      "https://images.unsplash.com/photo-1594495894542-a46cc73e081a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      "https://images.unsplash.com/photo-1563299796-17596ed6b017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    author: "김불멍",
    createAt: "2022-01-28",
    likes: 173,
  };

  const user = {
    profile:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    likes: 123,
    posts: 13,
  };

  // 테스트용 데이터
  const { _id, content, photos, author, createAt } = review;
  const { profile, likes, posts } = user;
  const subContent = content.substring(0, 1000) + "...더보기";

  return (
    <StyledContainer>
      <StyledProfileContainer>
        <StyledProfile href="#">
          <img src={profile} alt="asd" />
          <p className="author">{author}</p>
        </StyledProfile>
        <StyledProfileIconBox>
          <StyledPostIconBox href="#">
            <div>글</div>
            {posts}
          </StyledPostIconBox>
          <StyledReviewIconBox>
            <HeartIcon></HeartIcon>
            {likes}
          </StyledReviewIconBox>
        </StyledProfileIconBox>
      </StyledProfileContainer>
      <StyledReviewCard>
        <StyledReviewContents>
          <p className="createAt">{createAt}</p>
          <p className="description">{subContent}</p>
          <StyledReviewLikeBox>
            <StyledReviewLike>괜찮아요</StyledReviewLike>
            <StyledReviewLike>신고하기</StyledReviewLike>
          </StyledReviewLikeBox>
        </StyledReviewContents>
        <StyledReviewPhotos>
          {photos.map((photo) => (
            <img key={1} src={photo} alt="reviewPhoto" />
          ))}
        </StyledReviewPhotos>
      </StyledReviewCard>
    </StyledContainer>
  );
};

export default memo(ReviewCard);
