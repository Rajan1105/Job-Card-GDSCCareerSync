import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const JobTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
`;

const CompanyName = styled.h3`
  font-size: 1.1rem;
  color: #777;
  margin-top: 8px;
`;

const Location = styled.p`
  font-size: 0.9rem;
  color: #555;
  margin: 4px 0 16px;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #444;
`;

const ApplyButton = styled.button`
  padding: 10px 16px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const JobCard = ({ title, company, location, description }) => {
  return (
    <Card>
      <JobTitle>{title}</JobTitle>
      <CompanyName>{company}</CompanyName>
      <Location>{location}</Location>
      <Description>{description}</Description>
      <ApplyButton>Apply Now</ApplyButton>
    </Card>
  );
};

export default JobCard;

