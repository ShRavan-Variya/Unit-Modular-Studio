import React, {FC} from 'react';
import ProjectItem from './ProjectItem';
import {projects} from '@/constants/Theme';

interface ProjectListProps {
  filter: string;
}

const ProjectList: FC<ProjectListProps> = (props) => {
  const filteredProjects = props.filter === "All"
    ? projects
    : projects.filter((item) => item.category === props.filter);

  return (
    <div className="w-full mx-auto overflow-y-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {filteredProjects.map((item: any, index: number) => (
          <ProjectItem
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            mainImage={item.mainImage}
            previewImage={item.previewImage}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;