import styled from "styled-components";

interface Istyle {
  width?: string;
  height?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  borderbottem?: string;
  margin?: string;
  padding?: string;
  fontfamily?: string;
  fontsize?: string;
  fontwe?: string;
  position?: string;
  flexdirection?: string;
}

export const Header = styled.header``;

export const Wrapper = styled.div`
  width: ${(props: Istyle) => (props.width ? props.width : null)};
  height: ${(props: Istyle) => (props.height ? props.height : null)};
  display: ${(props: Istyle) => (props.display ? props.display : null)};
  justify-content: ${(props: Istyle) =>
    props.justifyContent ? props.justifyContent : null};
  align-items: ${(props: Istyle) =>
    props.alignItems ? props.alignItems : null};
  border-bottom: ${(props: Istyle) =>
    props.borderbottem ? props.borderbottem : null};
  padding: ${(props: Istyle) => (props.padding ? props.padding : null)};
`;

export const Div = styled.div`
  width: ${(props: Istyle) => (props.width ? props.width : null)};
  height: ${(props: Istyle) => (props.height ? props.height : null)};
  display: ${(props: Istyle) => (props.display ? props.display : null)};
  justify-content: ${(props: Istyle) =>
    props.justifyContent ? props.justifyContent : null};
  align-items: ${(props: Istyle) =>
    props.alignItems ? props.alignItems : null};
  margin: ${(props: Istyle) => (props.margin ? props.margin : null)};
  padding: ${(props: Istyle) => (props.padding ? props.padding : null)};
  position: ${(props: Istyle) => (props.position ? props.position : null)};
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  font-size: 16px;
  width: ${(props: Istyle) => (props.width ? props.width : null)};
  height: ${(props: Istyle) => (props.height ? props.height : null)};
  margin: ${(props: Istyle) => (props.margin ? props.margin : null)};
  padding: ${(props: Istyle) => (props.padding ? props.padding : null)};
`;
export const A = styled.a`
  padding: ${(props: Istyle) => (props.padding ? props.padding : null)};
  margin: ${(props: Istyle) => (props.margin ? props.margin : null)};
`;

export const Img = styled.img`
  margin: ${(props: Istyle) => (props.margin ? props.margin : null)};
`;
export const Form = styled.form``;
export const Input = styled.input`
  width: ${(props: Istyle) => (props.width ? props.width : null)};
  height: ${(props: Istyle) => (props.height ? props.height : null)};
`;
export const Span = styled.span`
  font-size: ${(props: Istyle) => (props.fontsize ? props.fontsize : null)};
  font-weight: ${(props: Istyle) => (props.fontwe ? props.fontwe : null)};
`;
