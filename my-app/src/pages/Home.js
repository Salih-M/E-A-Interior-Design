import HeroSection from "../components/HomePage/HeroSection";
import ProjectSection from "../components/HomePage/ProjectSection";
import SteperComponent from "../components/HomePage/SteperComponenet";
import CustomerReview from "../components/CustomerReview/CustomerReview"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectSection />
      <SteperComponent />
      <CustomerReview />
    </>
  );
}
