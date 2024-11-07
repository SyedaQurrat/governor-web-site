 import HeroSection from "@/components/HeroSection";
import AdditionalSection from "@/components/AdditionalSection";
import ImageGridSection from "@/components/ImageGridSection";
import SliderSection from "@/components/SliderSection";
import CourseSection from "@/components/CourseSection";
import Footer from "@/components/Footer";

const HomePage: React.FC = () => {
  const images = [
    '/images/slide-1.jpg',
    '/images/slide-2.jpg',
    '/images/slide-3.jpg',
    '/images/slide-4.jpg',
    '/images/slide-5.jpg',
    '/images/slide-6.jpg',
    '/images/slide-7.jpg',
    '/images/slide-8.jpg',
  ];

  return (
    <div className="bg-white">
      <HeroSection />
      <AdditionalSection />
      <ImageGridSection />
      <SliderSection images={images} />
      <CourseSection />
      <Footer />
    </div>
  );
};

export default HomePage;







