import React from 'react';
import JobCard from './JobCard';

function App() {
  const job = {
    title: 'Frontend Developer',
    company: 'Amazon',
    location: 'San Francisco, CA',
    description:
      'We are looking for a skilled frontend developer with experience in JavaScript and React to join our team. The ideal candidate has a passion for UI/UX and building great web applications.',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '40px' }}>
      <JobCard
        title={job.title}
        company={job.company}
        location={job.location}
        description={job.description}
      />
    </div>
  );
}

export default App;