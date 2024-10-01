import Hero_Section from "@/Components/Sections/Hero_Section/Hero_Section"
import Services_Section from "@/Components/Sections/Services_Section/Services_Section";
import About_Section from "@/Components/Sections/About_Section/About_Section";
import Portfolio_Section from "@/Components/Sections/Portfolio_Section/Portfolio_Section";
import  Scrolling_Text from "@/Components/ScrollingText/Scrolling_Text";

export default function Home() {
  return ( 
  <main>
    <Hero_Section />
    < Services_Section />
    < About_Section/>
    <div className="py-10 border-y-2">
      <Scrolling_Text direction="left"/>
      <Scrolling_Text/>
    </div>
    < Portfolio_Section/>
  </main>
  );
}
