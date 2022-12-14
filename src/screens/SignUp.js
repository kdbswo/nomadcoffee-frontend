import { gql, useMutation } from "@apollo/client";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { darkModeVar } from "../apollo";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Separator from "../components/auth/Separator";
import PageTitle from "../components/PageTitle";
import { FatLink } from "../components/shared";
import routes from "../routes";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Subtitle = styled(FatLink)`
  margin-top: 10px;
  font-size: 17px;
  text-align: center;
`;
const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $name: String
    $password: String!
  ) {
    createAccount(
      username: $username
      email: $email
      name: $name
      password: $password
    ) {
      ok
      error
    }
  }
`;

function SignUp() {
  const history = useHistory();
  const onCompleted = (data) => {
    const { username, password } = getValues();
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      return;
    }
    history.push(routes.home, {
      message: "Account created. Please Log in",
      username,
      password,
    });
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  const { register, handleSubmit, errors, formState, getValues } = useForm({
    mode: "onChange",
  });
  const onSubmitValid = (data) => {
    if (loading) {
      return;
    }
    createAccount({
      variables: {
        ...data,
      },
    });
  };
  return (
    <AuthLayout>
      <PageTitle title="Sign up" />
      <FormBox>
        <HeaderContainer>
          <FontAwesomeIcon icon={faInstagram} size="3x" />
          <Subtitle>???????????? ????????? ???????????? ????????? ???????????????.</Subtitle>
        </HeaderContainer>
        <Button type="submit" value="Facebook?????? ?????????" />
        <Separator />
        <form onSubmit={handleSubmit(onSubmitValid)} style={{ marginTop: -15 }}>
          <Input
            ref={register({
              required: "????????? ?????? is required",
            })}
            name="email"
            type="text"
            placeholder="????????? ??????"
          />
          <Input
            ref={register({
              required: "?????? is required",
            })}
            name="name"
            type="text"
            placeholder="??????"
          />
          <Input
            ref={register({})}
            name="username"
            type="text"
            placeholder="???????????????"
          />
          <Input
            ref={register({
              required: "???????????? is requierd",
            })}
            name="password"
            type="password"
            placeholder="????????????"
          />
          <Button
            type="submit"
            value={loading ? "Loading..." : "??????"}
            disabled={!formState.isValid || loading}
          />
        </form>
      </FormBox>
      <BottomBox
        cta="????????? ????????????????"
        link={routes.home}
        linkText="?????????"
      />
    </AuthLayout>
  );
}

export default SignUp;
