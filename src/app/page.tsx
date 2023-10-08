import Navbar from '@/components/Navbar/Navbar'
import './page.css'
import Slider from '@/components/Slider/Slider'
import CategorySlider from '@/components/Category/CategorySlider'
import BlogSlider from '@/components/Blogcard/BlogSlider'

export default function Home() {
  return (
    <>
    <Navbar />
    <Slider />
    <CategorySlider />
    <BlogSlider />
    </>
  )
}
