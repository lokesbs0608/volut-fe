import Carousel from "@/components/carousel";
import DisplayCards from "@/components/dispalyCards";
import Blogs from "./events/[id]";
import OrgCards from "@/components/orgCards";

function MyApp() {
  const blogData = {
    image: "https://flowbite.com/docs/images/blog/image-1.jpg",
    title: "Understanding React Components",
    description: `
        <p>React components are the building blocks of any React application.</p>
        <p>They can be <strong>functional</strong> or <em>class-based</em>, and they allow you to split the UI into independent, reusable pieces.</p>
        <ul>
            <li>Functional Components</li>
            <li>Class Components</li>
            <li>Higher-Order Components</li>
        </ul>
        <p>By understanding components, you can build more complex and maintainable user interfaces.</p>
    `,
  };

  const sampleImages = [
    "https://img.freepik.com/free-vector/hand-drawn-charity-event-twitch-banner_23-2149404991.jpg?semt=ais_hybrid",
    "https://img.freepik.com/free-vector/flat-minimal-charity-event-twitter-header_23-2149497660.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724716800&semt=ais_hybrid",
  ];

  return (
    <div>
      <Carousel images={sampleImages} />
      <div>
        <OrgCards />
        <DisplayCards />
        <Blogs blog={blogData} />
      </div>
    </div>
  );
}

export default MyApp;
