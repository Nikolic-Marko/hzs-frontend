import { styled } from "styled-components";
import { NavBar } from "../NavBar";
import { useNavigate } from "react-router";

export const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <Layout>
            <NavBar />
            <PageContainer>
                <Button
                    onClick={() => {
                        navigate("/pretraziOglase");
                    }}
                >
                    Pretrazi Oglase
                </Button>
                <Button
                    onClick={() => {
                        navigate("/postaviOglas");
                    }}
                >
                    Postavi Oglas
                </Button>
            </PageContainer>
        </Layout>
    );
};

export const Layout = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: antiquewhite;
`;

export const PageContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    padding: 20px;
    border: none;
    background-color: #423f3c;
    color: white;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
`;
