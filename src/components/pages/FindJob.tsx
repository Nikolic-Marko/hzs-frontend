import { styled } from "styled-components";
import { NavBar } from "../NavBar";
import { useNavigate } from "react-router";
import { Layout, PageContainer } from "./LandingPage";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Link } from "react-router-dom";

export const FindJob = () => {
    const navigate = useNavigate();
    const jobs = useSelector((state: RootState) => state.jobs.jobs);

    return (
        <Layout>
            <NavBar />
            <PageContainer>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <Row>Ukupno poslova: {jobs.length}</Row>
                    <JobList>
                        {jobs.map((job, index) => (
                            <JobCard key={index}>
                                <h3>{job.title}</h3>
                                <p>{job.salaray}</p>
                                <p>{job.companyName}</p>
                                <Link to={`/prijava/${job.id}`}>Prijavi se</Link>
                            </JobCard>
                        ))}
                    </JobList>
                </div>
            </PageContainer>
        </Layout>
    );
};

const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
`;

const JobCard = styled.div`
    padding: 10px;
    width: 160px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: white;
    margin: 10px;
`;

const JobList = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: flex-start;
`;
