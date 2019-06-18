import styled from "styled-components";

export const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 30px;
`;

export const Form = styled.form`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  width: 300px;
  padding: 20px 30px;
`;

export const Input = styled.input`
  font-size: 24px;
  height: 40px;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #00000040;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const SubmitHidden = styled.input`
  display: none;
`;

export const Submit = styled.label`
  font-size: 18px;
  width: 120px;
  height: 40px;
  color: #ffffff;
  text-align: center;
  line-height: 40px;
  border: none;
  margin-top: 50px;
  border-radius: 3px;
  margin-left: 240px;
  background-image: -webkit-linear-gradient(
    0deg,
    rgb(242, 113, 33) 0%,
    rgb(233, 64, 87) 50%,
    rgb(138, 35, 135) 100%
  );
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

export const Error = styled<any>("div")`
  position: absolute;
  margin-top: 130px;
  display: ${props => (props.error ? "block" : "none")};
  color: red;
`;
