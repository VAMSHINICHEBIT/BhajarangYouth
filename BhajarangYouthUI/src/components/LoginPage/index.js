import { useState, useEffect, React, useRef } from "react";
import { usePDF } from "react-to-pdf";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import styled from "styled-components";
import { useReactToPrint } from "react-to-print";

function LoginPage() {
  const token = Cookie.get("jwt_token");
  const navigate = useNavigate();
  const [usernameInp, setUserName] = useState("");
  const [passwordInp, setPassInp] = useState("");
  const [errMsg, setErrorMsg] = useState("");
  const [isPasswordShown, setPasswordVisibility] = useState(false);
  const history = useNavigate();
  const componentRef = useRef();

  //const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  const onSubmitForm = async (event) => {
    event.preventDefault();
    const userDetails = {
      username: usernameInp,
      password: passwordInp,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(
      "http://localhost:7106/api/Login?UserName=vamshi&Password=Vamshi@123"
    );
    //const response = await fetch("https://apis.ccbp.in/login", options);
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      Cookie.set("jwt_token", data.jwt_token, { expires: 1 });
      history("/", { replace: true });
    } else {
      setErrorMsg(data.error_msg);
    }
  };

  const onDownload = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Loginpage",
  });

  const onChangeUsername = (event) => setUserName(event.target.value);

  const onChangePassword = (event) => setPassInp(event.target.value);

  const onClickShowPassword = () => setPasswordVisibility(!isPasswordShown);

  const passType = isPasswordShown ? "text" : "password";

  useEffect(() => {
    if (token) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <LoginBgContainer ref={componentRef}>
      <FormContainer onSubmit={onSubmitForm}>
        <MainHead>Bajarang Youth Association</MainHead>
        <BgInputContainer>
          <InputContainer>
            <Label htmlFor="username">USERNAME</Label>
            <InputEle
              value={usernameInp}
              type="text"
              onChange={onChangeUsername}
              id="username"
              placeholder="Username"
            />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">PASSWORD</Label>
            <InputEle
              value={passwordInp}
              type={passType}
              onChange={onChangePassword}
              id="password"
              placeholder="Password"
            />
          </InputContainer>
          <CheckboxForgetPassContainer>
            <CheckboxContainer>
              <CheckBoxInput
                onClick={onClickShowPassword}
                type="checkbox"
                id="showPassword"
              />
              <CheckLabel htmlFor="showPassword">Show Password</CheckLabel>
            </CheckboxContainer>
            <ForgetPass href="#">forget password?</ForgetPass>
          </CheckboxForgetPassContainer>

          <LoginBtn type="submit">Login</LoginBtn>
          {errMsg !== "" ? <ErrMsg>*{errMsg}</ErrMsg> : null}
        </BgInputContainer>
      </FormContainer>
    </LoginBgContainer>
  );
}

export const LoginBgContainer = styled.div`
  background-color: #f1f5f9;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.form`
  background-color: #f9f9f9;
  padding: 36px;
  border-radius: 12px;
  width: 27%;
  min-width: 320px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("https://i.ibb.co/BssyKsy/hanuman-Img.jpg");
  background-size: 100% 100%;
`;

const BgInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckboxForgetPassContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ForgetPass = styled.a`
  color: grey;
  text-decoration: underline;
`;

export const InputContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: grey;
  margin-bottom: 2px;
`;

export const InputEle = styled.input`
  border: 0.5px solid #94a3b8;
  padding: 12px;
  border-radius: 3px;
  outline: none;
  color: #475569;
  background-color: #ffffff90;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

export const CheckBoxInput = styled(InputEle)``;

export const CheckLabel = styled.label`
  color: grey;
`;

export const LoginBtn = styled.button`
  border-width: 0;
  background-color: #3b82f6;
  color: #ffffff;
  margin-top: 30px;
  padding: 14px;
  border-radius: 6px;
  cursor: pointer;
`;

export const ErrMsg = styled.p`
  color: #ff0000;
  margin-top: 0;
`;

const MainHead = styled.h1`
  color: #fc6904;
  text-align: center;
`;

export default LoginPage;
