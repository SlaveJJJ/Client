import React from "react";
import { Form, Span, Wrapper } from "../styles/style";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(-0.5),
            width: "35ch",
        },
    },
}));

export const Header = () => {
    const classes = useStyles();
    return (
        <>
            <Wrapper
                width={"100%"}
                height={"70px"}
                borderbottem={"1px solid rgba(34,90,89,0.2);"}
                margin={"10px 0 0 0"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Wrapper width={"1000px"} height={"70px"} display={"flex"} margin={"10px 0 0 0"}>
                    <Wrapper>
                        <img src={"/image/logo.png"} style={{ width: "43px" }} />
                        <img src={"/image/logoTitle.png"} style={{ width: "130px" }} />
                    </Wrapper>
                    <Form className={classes.root} noValidate autoComplete="off">
                        <TextField
                            id="standard-basic"
                            label="상품명,지역명,@상점명 입력"
                            size="medium"
                            style={{ marginLeft: "200px" }}
                        />
                    </Form>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ marginLeft: "200px", width: "120px", height: "50px" }}
                    >
                        <Span fontsize={"20px"} fontwe={"600"}>
                            로그인
                        </Span>
                    </Button>
                </Wrapper>
            </Wrapper>
        </>
    );
};
