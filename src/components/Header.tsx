import React from "react";
import { Div, Header, Img, Wrapper, A, Button, Input } from "../styles/style";

export const HeaderTop = () => {
  return (
    <>
      <Header>
        <Wrapper
          height={"40px"}
          display={"flex"}
          justifyContent={"center"}
          borderbottem={"1px solid rgb(238, 238, 238)"}
        >
          <Div
            width={"1024px"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            <Div display={"flex"} alignItems={"center"}>
              <A padding={"0px 15px"}>앱 다운로드</A>
              <Button padding={"0px 15px"}>즐겨찾기</Button>
            </Div>
            <Div display={"flex"} alignItems={"center"}>
              <Button padding={"0px 15px"}>로그인/회원가입</Button>
              <Button padding={"0px 15px"}>내상점</Button>
            </Div>
          </Div>
        </Wrapper>
        {/* ----- */}
        <Wrapper
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={"35px 0 35px 0"}
          borderbottem={"1px solid rgb(238, 238, 238)"}
        >
          <Div>
            <Div
              display={"flex"}
              width={"1024px"}
              height={"50px"}
              alignItems={"center"}
            >
              <Img
                margin={"0 100px 0 0"}
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjM1IiB2aWV3Qm94PSIwIDAgMTI4IDM1Ij4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNMCAzNC4wMzZoMTQyVi4wOTJIMHoiLz4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggc3Ryb2tlPSIjQ0NDIiBkPSJNLTEwLjUtNy41aDE0OXY0OWgtMTQ5eiIvPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03KSI+CiAgICAgICAgICAgIDxwYXRoIGZpbGw9IiNGNzAwMDAiIGQ9Ik0yOS4wMjUgMTYuNzAxTDE5Ljk0IDI2Ljc5N2EuNTA1LjUwNSAwIDAgMS0uNjI3LjEuNDgzLjQ4MyAwIDAgMS0uMjMtLjU3NWwyLjA2MS02LjM5MWgtMy41OThhLjUyNi41MjYgMCAwIDEtLjQwMi0uMjE1LjUyNy41MjcgMCAwIDEtLjA4NS0uNDVsMi43NzYtMTAuMDYzYy4wNjItLjIxOC4yNi0uMzM4LjQ4OC0uMzM4aDYuNTYxYy4xNyAwIC4zMjkuMDQ5LjQyMi4xOS4wOTQuMTQyLjEwOS4zOC4wNDIuNTM1bC0yLjcyNiA2LjQyMmg0LjAzYy4xOTggMCAuMzguMDQuNDYuMjIzLjA4MS4xOC4wNDcuMzE3LS4wODYuNDY2bTcuMzI2LTguODEyTDIzLjUyNC40MTRjLS41NTItLjMyLTEuMzk2LS4zMi0xLjk0OCAwTDguNTA0IDcuODg5Yy0uNTUzLjMyLTEuMTI4IDEuMTAxLTEuMTI4IDEuNzRWMjQuNThjMCAuNjM4LjYwNSAxLjQyMSAxLjE1NyAxLjc0bDEzLjAyNiA3LjQ3NWMuNTUzLjMyIDEuNDk2LjMyIDIuMDQ4IDBsMTIuNzI1LTcuNDc1Yy41NTItLjMxOS43OC0xLjEwMi43OC0xLjc0VjkuNjI4YzAtLjYzOC0uMjA4LTEuNDItLjc2LTEuNzM5TTEwMy40NTMgMjYuOTQ5Yy0xLjc3NyAwLTMuMjIyLTEuMjAzLTMuMjIyLTIuNjggMC0xLjQ2MyAxLjQ0NS0yLjY1NSAzLjIyMi0yLjY1NSAxLjgzOCAwIDMuMjc2IDEuMTY4IDMuMjc2IDIuNjU1IDAgMS41MDMtMS40MzggMi42OC0zLjI3NiAyLjY4bTAtOC4xMzVjLTMuNjEgMC02LjY2MiAyLjQ5OC02LjY2MiA1LjQ1NSAwIDMuMDIyIDIuOTkgNS40OCA2LjY2MiA1LjQ4IDMuNzE4IDAgNi43NDItMi40NTggNi43NDItNS40OCAwLTMuMDA4LTMuMDI0LTUuNDU1LTYuNzQyLTUuNDU1Ii8+CiAgICAgICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRjcwMDAwIiBkPSJNNDkuNTYxIDE2LjAxMmg1LjA3MnYtMy4yMjhINDkuNTZ2My4yMjh6bTguMy0yLjA3NWg0LjE1djguMjk5aDMuMjI2VjQuOTQ2SDYyLjAxdjYuMjI0aC00LjE1VjYuMWgtMy4yMjd2My45Mkg0OS41NnYtMy45MmgtMy4yMjd2MTIuNjc4SDU3Ljg2di00Ljg0ek02OC4wMDQgOS43ODhoNi40NTR2Mi4wMDJjMCAuOTQtLjExNCAxLjc2Ni0uMjYzIDIuNDU2LS4xNS42ODctLjQ4NCAxLjM1OC0uOTU4IDEuOTk0LS40NzUuNjM4LTEuMTg5IDEuMzE1LTIuMTA0IDIuMDEzLS45MTcuNy0yLjE2MyAxLjU0OS0zLjY5NiAyLjUyNGwtLjAyOS4wMTcgMS45NDggMi40ODQuMDIyLS4wMTZjMS43NjctMS4xNjQgMy4yMTEtMi4xODUgNC4yOTItMy4wMzQgMS4wODYtLjg1MSAxLjkzNy0xLjY4NiAyLjUzLTIuNDguNTkzLS43OTUuOTg2LTEuNjI3IDEuMTktMi40NzQuMjAzLS44NDUuMjk1LTEuODQ3LjI5NS0yLjk3NlY2Ljc5aC05LjY4MXYyLjk5OHpNOTguMzcyIDE0LjI4OGMuMDcuMTQzLjI2LjM0NC41NzguNjE0LjMzNy4yODYuNzk0LjYzMiAxLjM1NiAxLjAyOGE3OS4zOTIgNzkuMzkyIDAgMCAwIDMuMjcyIDIuMjA3bC4wMi4wMTUgMS44MTctMi4zNTgtLjAyNy0uMDE2YTU3Ljg5IDU3Ljg5IDAgMCAxLTMuNzctMi41NDQgNS44MTYgNS44MTYgMCAwIDEtLjg2LS43NDggNC4wMjMgNC4wMjMgMCAwIDEtLjUzLS43MWMtLjEzLS4yMy0uMjYtLjQ4LS4zMDMtLjc0My0uMDQ1LS4yNjUtLjExLS41NTYtLjExLS44NjRWOC44NjVoNC42MTFWNi4wOTlIOTEuNzQ4djIuNzY2aDQuODR2MS4zMDRjMCAuNjMxLS4xNzUgMS4xOTgtLjQyOCAxLjY4NS0uMjU1LjQ5LS42MzcuOTM2LTEuMDkzIDEuMzNhNDUuMjAyIDQ1LjIwMiAwIDAgMS00LjM5OCAzLjI2OWwtLjAzLjAxNyAyLjAwMSAyLjQzNS4wMjEtLjAxNWMuNjctLjQ0NyAxLjMwOS0uODk3IDEuOTAyLTEuMzM4LjU5NS0uNDQzIDEuMTgtLjg5MyAxLjczOS0xLjMzN2ExNi45OSAxNi45OSAwIDAgMCAxLjQ2NS0xLjIxYy4zMzYtLjMyLjUzNS0uNTU2LjYwNS0uNzE3TTEyOC40OTEgMTkuNjEyYy0xLjI1LjE2OC0yLjYxNy4zNDItNC4wNjIuNC0xLjQ0LjA2LTIuODE3LjE1LTQuMDkuMTVoLTEuODUxdi0zLjkyaDcuMzc3di0yLjc2NmgtNy4zNzdWOS41NTdoOC4yOThWNi43OWgtMTEuNzU1djE2LjEzN2g0LjUxYy44MzkgMCAxLjY3MS0uMDYgMi40Ny0uMDY4LjgzNy0uMDA4IDEuNjY0LS4wNTYgMi40Ni0uMDlhNjMuMzUgNjMuMzUgMCAwIDAgMi4zMjYtLjE1NGMuNzQtLjA2IDEuNDI5LS4xNDggMi4wNDgtLjI1bC4wMjktLjAwNi0uMzU0LTIuNzUtLjAyOS4wMDN6TTUzLjcxIDIwLjYyMmgtMy42ODhWMjkuMTUyaDE1LjQ0NXYtMi43NjdINTMuNzExek04NS4yOTMgNS4wODZ2Ny4yMzdoLTIuMDc0VjQuOTQ3SDc5Ljc2djIzLjEzOGwzLjQ1OS0uODJWMTUuMzE5aDIuMDc0djEyLjc2NmwzLjQ1Ny0uODJWNC45NDdoLTMuNDU3eiIgbWFzaz0idXJsKCNiKSIvPgogICAgICAgICAgICA8cGF0aCBmaWxsPSIjRjcwMDAwIiBkPSJNMTMwLjkzNiA0Ljk0N3Y4LjUyOWgtNC4xNVYxNi40NzRoNC4xNXYxMS42MTJsMy42ODktLjg3OVY0Ljk0N3pNMTEwLjQyIDQuOTQ3aC0zLjY4OXYxMy44MzFoMy42ODh2LTUuMzAxaDMuMjI3di0yLjc2OGgtMy4yMjd6IiBtYXNrPSJ1cmwoI2IpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K"
              />
              <Div
                width={"460px"}
                height={"40px"}
                position={"relative"}
                display={"flex"}
                alignItems={"center"}
              >
                <Input
                  width={"100%"}
                  height={"90%"}
                  placeholder="상품명,지역명,@상점명입력"
                ></Input>
              </Div>
              <Div display={"flex"} alignItems={"center"} margin={"0 0 0 60px"}>
                <A margin={"0 0 0 30px"}>판매하기</A>
                <A margin={"0 0 0 30px"}>내상점</A>
                <Button margin={"0 0 0 30px"}>번개톡</Button>
              </Div>
            </Div>
          </Div>
        </Wrapper>
      </Header>
    </>
  );
};
