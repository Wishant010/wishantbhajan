'use client';

import dynamic from 'next/dynamic';

const ProjectDetailPage = dynamic(
  () => import('../../../src/pages-components/ProjectDetail/ProjectDetailPage'),
  { ssr: false }
);

export default function ProjectDetailClient() {
  return <ProjectDetailPage />;
}
