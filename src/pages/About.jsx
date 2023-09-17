import Banner from "../components/ui/Banner";
import bannerAbout from "../assets/banner-about.jpg";
import Collapse from "../components/ui/Collapse";
import { DATA } from "../mockData/about";

const About = () => {
  return (
    <>
      <Banner background={bannerAbout} />

      <div className="about-collapse-container">
        {DATA.map(({ title, content }) => (
          <Collapse title={title}>
            <p>{content}</p>
          </Collapse>
        ))}
      </div>
    </>
  );
};

export default About;
