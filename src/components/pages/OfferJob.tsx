import { styled } from "styled-components";
import { NavBar } from "../NavBar";
import { useNavigate } from "react-router";
import { Layout, PageContainer } from "./LandingPage";
import { useState } from "react";
import { Job, addJob } from "../../store/jobsSlice";
import { useDispatch } from "react-redux";

export const OfferJob = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [job, setJob] = useState<Job>({ title: "", salaray: "", companyName: "" });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setJob((prevJob) => ({
            ...prevJob,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        dispatch(addJob(job));
        setJob({ title: "", salaray: "", companyName: "" });
        navigate("/");
    };

    return (
        <Layout>
            <NavBar />
            <PageContainer>
                <Form>
                    <Input type="text" placeholder="Job Title" name="title" value={job.title} onChange={handleInputChange} />
                    <Input type="text" placeholder="Salary" name="salaray" value={job.salaray} onChange={handleInputChange} />
                    <Input type="text" placeholder="Company Name" name="companyName" value={job.companyName} onChange={handleInputChange} />

                    <Button onClick={handleSubmit}>Kreiraj oglas</Button>
                </Form>
            </PageContainer>
        </Layout>
    );
};

const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    margin: auto;
`;

const Input = styled.input`
    padding: 10px;
    border-radius: 4px;
    margin: 5px;
    border: 1px solid #ccc;
`;

const Button = styled.div`
    padding: 5px 15px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background-color: white;
    cursor: pointer;
`;
