import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import AboutPreview from '@/components/home/AboutPreview';
import ProjectsPreview from '@/components/home/ProjectsPreview';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <ProjectsPreview />
    </Layout>
  );
};

export default Home;