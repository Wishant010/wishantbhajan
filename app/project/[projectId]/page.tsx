import { portfolioData } from '../../../src/data/portfolioData';
import ProjectDetailClient from './ProjectDetailClient';

// Generate static params for all projects
export async function generateStaticParams() {
  // Extract all project IDs from all categories
  const projectIds = portfolioData.flatMap(category => 
    category.projects.map(project => ({
      projectId: project.id
    }))
  );
  
  return projectIds;
}

export default function ProjectDetail() {
  return <ProjectDetailClient />;
}
