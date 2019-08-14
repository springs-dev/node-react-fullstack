import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  Wrapper,
  Button,
  GreenSpan,
  MiddleTitle
} from "../index";
import { bigTitle, greenBtn } from "../../themes";

export const LinkBlock = (props) => (
  <Wrapper wrapMargin=" 0 0 100px">
    <MiddleTitle theme={bigTitle} bold className="link_block_title">
      <GreenSpan>
        {props.title}
      </GreenSpan>
    </MiddleTitle>
    {props.children}
    <Button theme={greenBtn}>
      <NavLink to={props.linkPath} >
        {props.linkText}
      </NavLink>
    </Button>
  </Wrapper>
);
