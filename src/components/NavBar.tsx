import { useNavigate } from "react-router";
import { styled } from "styled-components";

export const NavBar = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Logo
                onClick={() => {
                    navigate("/");
                }}
            >
                Job Aplication
            </Logo>
        </Container>
    );
};

const Logo = styled.div`
    margin-left: 20px;
    cursor: pointer;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    background-color: #edeaea;
    width: 100%;
    height: 100px;
`;
