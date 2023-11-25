import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../store"; 
import { styled } from "styled-components";
import { applyForJob } from "../../store/jobsSlice";

export const ApplicationForm = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const job = useSelector((state: RootState) => state.jobs.jobs.find((job) => job.id === id));
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        cvFile: null as File | null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setFormData((prevData) => ({
            ...prevData,
            cvFile: file,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (job) {
            const updatedJob = {
                ...job,
                applicants: [...(job.applicants || []), formData.name],
            };
            dispatch(applyForJob(updatedJob));
        }
        setFormData({
            name: "",
            email: "",
            phoneNumber: "",
            cvFile: null,
        });
        navigate("/");
    };

    return (
        <FormContainer>
            {job ? (
                <div>
                    <h2>Apply for Job</h2>
                    <p>Title: {job.title}</p>
                    <p>Salary: {job.salaray}</p>
                    <p>Company: {job.companyName}</p>
                    <Form onSubmit={handleSubmit}>
                        <Label>
                            Name:
                            <Input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                        </Label>
                        <Label>
                            Upload CV:
                            <Input type="file" name="cvFile" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
                        </Label>
                        <Button type="submit">Apply</Button>
                    </Form>
                </div>
            ) : (
                <p>Job not found</p>
            )}
        </FormContainer>
    );
};

const FormContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 10px;
    font-weight: bold;
`;

const Input = styled.input`
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 4px;
    border: 1px solid #ccc;
`;

const Button = styled.button`
    padding: 10px 15px;
    border-radius: 4px;
    border: none;
    outline: none;
    background-color: #1b1702;
    color: wheat;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #021d14;
    }
`;
