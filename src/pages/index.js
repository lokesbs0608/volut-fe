import Carousel from "@/components/carousel";

function MyApp() {


  const sampleImages = [
    'https://img.freepik.com/free-vector/hand-drawn-charity-event-twitch-banner_23-2149404991.jpg?semt=ais_hybrid',
    'https://img.freepik.com/free-vector/flat-minimal-charity-event-twitter-header_23-2149497660.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724716800&semt=ais_hybrid',
  ];

  return (
    <div>
      <Carousel images={sampleImages} />
    </div>
  );
}

export default MyApp;
