import styled from "@emotion/styled";

const SignDiv = styled.div`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  .login-logo {
    width: 8rem;
    margin: 30px auto 60px;
    vertical-align: middle;
  }
  h2 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    color: #fa0050;
    padding: 10px 0px;
  }
  form {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03);
    label {
      display: inline-block;
      width: 150px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    input {
      width: 75%;
      border-radius: 10px;
      border: 1px solid #c6c6c6;
      padding: 5px 20px;
      margin-bottom: 15px;
      &:active,
      &:focus {
        outline-color: #fa0050;
      }
    }
    button {
      width: 200px;
      margin: 0 auto;
      padding: 10px 15px;
      background-color: #fa0050;
      border: 1px solid #fff;
      color: #fff;
      margin-bottom: 10px;
      border-radius: 25px;
      font-weight: 600;
      &:hover {
        background-color: #fff;
        color: #fa0050;
        border: 1px solid #fa0050;
      }
    }
    .idcheck {
      position: absolute;
      top: 50%;
      right: 5%;
      transform: translateY(-76%);
      width: 80px;
      font-size: 0.6rem;
      padding: 5px;
    }
  }
`;

export default SignDiv;
