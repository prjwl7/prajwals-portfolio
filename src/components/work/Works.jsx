import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItem from './WorkItem';

const Works = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => project.category === item.name);
      setProjects(newProjects);
    }
  }, [item]);

  const handleFilterClick = (name, index) => {
    setItem({ name });
    setActive(index);
  };

  return (
    <div>
      <div className='work__filters'>
        {projectsNav.map((navItem, index) => (
          <span
            key={index}
            className={`work__item ${active === index ? 'active' : ''}`}
            onClick={() => handleFilterClick(navItem.name, index)}
          >
            {navItem.name}
          </span>
        ))}
      </div>
      <div className='work__container container flex '>
        {projects.map((project) => (
          <WorkItem item={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Works;
