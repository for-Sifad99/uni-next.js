import CoursesSection from '@/components/CoursesSection';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <div className="container max-w-7xl mx-auto">
      <HeroSection />
      <CoursesSection />
    </div>
  );
}
