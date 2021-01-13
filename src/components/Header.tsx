import React from "react";
import styled from "styled-components";

const HeaderSy = styled.header`
  width: 100%;
  border: 1px solid red;
  display: felx;
  justify-content: center;
  align-items: center;
`;

const HeaderWrapper = styled.div`
  border: 1px solid blue;
  min-width: 65%;
  display: flex;
  justify-content: space-between;
`;

const HeaderColum = styled.div`
  display: flex;
  border: 2px solid green;
`;

const AColum = styled.a`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: rgb(102, 102, 102);
  padding: 0px 15px;
  position: relative;
  line-height: 1.4;
`;
const ButtonColum = styled.button`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: rgb(102, 102, 102);
  padding: 0px 15px;
  position: relative;
  line-height: 1.4;
  border: 0;
  outline: 0;
`;

export const Header = () => {
  return (
    <>
      <HeaderSy>
        <HeaderWrapper>
          <HeaderColum>
            <AColum>로그인/회원가입</AColum>
            <ButtonColum>내상점</ButtonColum>
          </HeaderColum>
          <HeaderColum>
            <ButtonColum>즐겨찾기</ButtonColum>
            <ButtonColum>내상점</ButtonColum>
          </HeaderColum>
        </HeaderWrapper>
      </HeaderSy>
    </>
  );
};
