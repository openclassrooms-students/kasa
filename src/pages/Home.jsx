import Banner from "../components/ui/Banner";
import bannerHome from "../assets/banner-home.jpg";
import Gallery from "../components/home/Gallery";

const Home = () => {
  return (
    <>
      <Banner background={bannerHome}>
        <p>
          <span>Chez vous, </span> partout et ailleurs
        </p>
      </Banner>
      <Gallery/>
    </>
  );
};

export default Home;
