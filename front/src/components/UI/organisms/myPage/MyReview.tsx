import React from "react";
import HeartIcon from "@icons/HeartIcon";
import { IReview } from "@type/reducers/review";
import SubTitle from "@atoms/SubTitle";
import { url } from "@apis/.";
import Style from "./styles";

interface Props {
  review: IReview;
}

const HeartIconComponent = ({ likes }: Pick<IReview, "likes">) => (
  <Style.IconBox>
    <Style.Icons>
      <HeartIcon size={13} /> {likes.length}
    </Style.Icons>
  </Style.IconBox>
);

const MyReview = ({ review }: Props) => {
  const { createdAt, content, photos, location, likes } = review;
  return (
    <Style.Review>
      <Style.CampInfo>
        <SubTitle size={14}>{createdAt}</SubTitle>
        <Style.CampLink href={`/camp/${location._id}`}>
          <a>@{location.name}</a>
        </Style.CampLink>
        <HeartIconComponent likes={likes} />
      </Style.CampInfo>
      <Style.ReviewPost>{content}</Style.ReviewPost>
      <Style.PhotoBox>
        {photos.map((photo, idx) => (
          <img key={idx} src={`${url}/${photo}`} alt="reviewPhoto" />
        ))}
      </Style.PhotoBox>
    </Style.Review>
  );
};

export default MyReview;