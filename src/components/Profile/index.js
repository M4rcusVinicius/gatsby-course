import React from 'react';
import { graphql, useStaticQuery } from "gatsby"

import Avatar from "../Avatar"
import * as S from "./styled" 


const Profile = () => {
  const {
    site: {
      siteMetadata: { title, description, author },
    }
  } = useStaticQuery(
    graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }`
  )
  return (
  <S.ProfileWrapper>
    <S.Profilelink>
      <Avatar />
      <S.ProfileAuthor>{title}</S.ProfileAuthor>
      <S.ProfileDescription>
        {description}
        <S.ProfilePosition>{author}</S.ProfilePosition>
      </S.ProfileDescription>
    </S.Profilelink>
  </S.ProfileWrapper>
  )
}
 
export default Profile; 