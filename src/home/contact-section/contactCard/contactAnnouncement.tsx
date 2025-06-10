import React from "react";
import Image from "next/image";

interface ContactAnnouncementProps {
    message: string;
}

const ContactAnnouncement: React.FC<ContactAnnouncementProps> = ({
    message,
}) => {
    return (
        <div className="flx-c ctc-announcement">
            <div className="announcement-wrapper">
                <Image
                    src="https://s3.eu-west-3.amazonaws.com/assets.peur-de-la-conduite.fr/img/contact/icon/announcement.svg"
                    alt="announcement"
                    width={45}
                    height={45}
                    className="announcement-icon"
                    loading="lazy"
                />
                <p
                    className="announcement-text"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            </div>
        </div>
    );
};

export default React.memo(ContactAnnouncement);
