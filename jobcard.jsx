import React from 'react';
import './JobCard.css'; // Optional: for styling

const JobCard = ({ job }) => {
  return (
    <div className="job-card">
      <h2 className="job-title">{job.title}</h2>
      <p className="company-name">{job.company}</p>
      <p className="job-description">{job.description}</p>
      <div className="job-skills">
        {job.skills.map((skill, index) => (
          <span key={index} claconstssName="skill-badge">
            {skill}
          </span>
        ))}
      </div>
      <button className="apply-button">Apply Now</button>
    </div>
  );
};

export default JobCard;
