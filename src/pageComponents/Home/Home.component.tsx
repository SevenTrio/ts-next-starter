import React from 'react';
import { PageTitle } from '@/pageComponents/Home/Home.styles';
import MainLayout from '@/layouts/MainLayout/MainLayout.component';

const HomePageComponent: React.FC = () => (
  <MainLayout title="Next.js + TypeScript Example">
    <PageTitle>Hello World</PageTitle>
  </MainLayout>
);

export default HomePageComponent;
