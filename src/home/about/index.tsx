import { aboutContent } from "../../assets/data/content/about";
import AboutCard from "./AboutCard";
import Image from "next/image";
const About = () => {
    return (
        <div className="about content-wrapper flx-c">
            <div className="ab-img_info">
                <Image
                    src="https://assets.peur-de-la-conduite.fr/img/about/INFO.svg"
                    alt="Info Icon"
                    width="540"
                    height="540"
                />
            </div>
            {aboutContent.map((content, index) => (
                <AboutCard
                    key={index + "aboutContent"}
                    cardIdentity={content.cardIdentity}
                    cardContent={content.cardContent}
                />
            ))}
        </div>
    );
};

export default About;
