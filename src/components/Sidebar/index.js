import React from 'react';
import * as S from "./styled" 

import Profile from "../Profile"
import SocialLinks from "../SocialLinks"

const Sidebar = () => (
  <S.SidebarWrapper>
    <Profile />
    <SocialLinks />
  </S.SidebarWrapper>
)
 
export default Sidebar; 