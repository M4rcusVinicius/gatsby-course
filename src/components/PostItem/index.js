import React from "react"
import PropType from "prop-types"

import * as S from "./styled"

const PostItem = ({
  slug,
  background,
  category,
  date,
  timeToRead,
  title,
  description,
}) => (
  <S.PostItemLink to={slug}>
    <S.PostItemWrapper>
      <S.PostItemTag background={background}>{category}</S.PostItemTag>
      <S.PostItemInfo>
        <S.PostItemDate>
          {date} • {timeToRead}
        </S.PostItemDate>
        <S.PostItemTitle>{title}</S.PostItemTitle>
        <S.PostItemDescription>{description}</S.PostItemDescription>
      </S.PostItemInfo>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propType = {
  slug: PropType.string.inRequiride,
  background: PropType.string,
  category: PropType.inRequiride,
  date: PropType.inRequiride,
  timeToRead: PropType.inRequiride,
  title: PropType.inRequiride,
  description: PropType.inRequiride,
}

export default PostItem
