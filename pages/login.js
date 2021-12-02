import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import { Button } from "@mui/material";
import { auth, provider } from "../firebase";

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    };

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>
            <LoginContainer>
                <Logo>
                    <Image
                        style={{ marginBottom: 50 }}
                        alt="logo"
                        src="/images/logo.png"
                        width={200}
                        height={200}
                    />
                </Logo>

                <Button onClick={signIn} variant="outlined">
                    Sign in with Google
                </Button>
            </LoginContainer>
        </Container>
    );
}

export default Login;

const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: whitesmoke;
`;

const LoginContainer = styled.div`
    padding: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 4px 14px -3px rgba(0, 0, 0, 0.75);
`;

const Logo = styled.div`
    margin-bottom: 2rem;
`;
