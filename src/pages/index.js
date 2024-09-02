import Carousel from "@/components/carousel";

function MyApp() {


  const sampleImages = [
    'https://2.img-dpreview.com/files/p/E~C1000x0S4000x4000T1200x1200~articles/3925134721/0266554465.jpeg',
    'https://via.placeholder.com/800x400?text=Slide+2',
    'https://via.placeholder.com/800x400?text=Slide+3',
    'https://via.placeholder.com/800x400?text=Slide+4',
    'https://via.placeholder.com/800x400?text=Slide+5'
  ];

  return (
    <div>
      <Carousel images={sampleImages} />
    </div>
  );
}

export default MyApp;
