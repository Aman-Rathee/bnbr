import Navbar from "@/components/Navbar";
import Page from "./components/page";
import { Marquee } from "@/registry/bnbr/ui/marquee-animation";
import { Marquee2 } from "@/registry/bnbr/ui/marquee-animation2";
import Hero from "@/components/Hero";

const cardsData = [
  {
    heading: "Responsive",
    paragraph: "Learn how to create responsive layouts that adapt seamlessly to various devices and screen sizes."
  },
  {
    heading: "Animations",
    paragraph: "Discover techniques to implement smooth animations and transitions to enhance user interactions."
  },
  {
    heading: "Accessibility",
    paragraph: "Explore the best practices to ensure your web applications are accessible to all users and devices."
  },
  {
    heading: "State",
    paragraph: "Master state management patterns that simplify data flow and ensure a maintainable codebase."
  },
  {
    heading: "Styling",
    paragraph: "Understand modern approaches to component styling for scalable, consistent design systems."
  },
  {
    heading: "Server-Side",
    paragraph: "Learn the benefits of server-side rendering and how it improves performance and SEO."
  },
  {
    heading: "API",
    paragraph: "Explore techniques for integrating APIs seamlessly into your web applications with ease."
  },
  {
    heading: "Testing",
    paragraph: "Understand different testing strategies to improve code quality and user experience consistently."
  }
];
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
