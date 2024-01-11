import { CarouselWithContent } from "./components/carousel"
import { FooterWithLogo } from "./components/footer"
import StickyNavbar from "./components/navbar"

export default function Home() {
  return (
    <main>
      <StickyNavbar/>
      <CarouselWithContent/>
      <FooterWithLogo/>
    </main>
    
  )
};
