import HeroSection from "../HeroSection";

export default function HeroSectionExample() {
  return (
    <HeroSection onViewProducts={() => console.log('View products clicked')} />
  );
}
