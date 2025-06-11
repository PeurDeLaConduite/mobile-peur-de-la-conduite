import React from "react";
import ButtonLink from "../../components/button/ButtonLink";

const AboutCard = ({ cardIdentity, cardContent }) => {
    return (
        <div className="sgm">
            <div className="card_H flx-c">
                <h3>
                    {cardIdentity.firstName}
                    <span>{cardIdentity.name}</span>
                </h3>
                <img
                    className="ab-img_head"
                    src="https://s3.eu-west-3.amazonaws.com/assets.peur-de-la-conduite.fr/img/about/avatar.webp"
                    alt={`avatar de ${cardIdentity.firstName}`}
                    width={225}
                    height={225}
                    // priority={false}
                />
                <p className="profession">{cardIdentity.profession}</p>
            </div>
            <div className="card_cnt">
                {cardContent.description.map((line, i) => (
                    <p
                        key={i + "ab"}
                        dangerouslySetInnerHTML={{ __html: line }}
                    />
                ))}
            </div>
            <ButtonLink href="/contact">Contactez-moi</ButtonLink>
        </div>
    );
};

export default AboutCard;
