import HeroSection from '../components/home/HeroSection'
import FeaturedCourses from '../components/home/FeaturedCourses'
import PromptCategories from '../components/home/PromptCategories'
import LatestBlogs from '../components/home/LatestBlogs'
import EbookShowcase from '../components/home/EbookShowcase'
import { NewsletterSection, FAQPreview } from '../components/home/NewsletterFAQ'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCourses />
      <PromptCategories />
      <LatestBlogs />
      <EbookShowcase />
      <NewsletterSection />
      <FAQPreview />
    </>
  )
}
