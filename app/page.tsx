import { CarouselWithContent } from "./components/carousel"
import { FooterWithLogo } from "./components/footer"
import StickyNavbar from "./components/navbar"

export default function Home() {
  return (
    <main>
      <StickyNavbar/>
      <p>Dashboard Page Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus saepe maxime laudantium error soluta quis dolorum aspernatur nulla illo ducimus? Dicta distinctio amet omnis nulla laboriosam at laudantium cupiditate cum?</p>
      <CarouselWithContent/>
      <FooterWithLogo/>
    </main>
    
  )
};
