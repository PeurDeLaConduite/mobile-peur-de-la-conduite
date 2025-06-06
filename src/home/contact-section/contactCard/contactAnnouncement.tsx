import Image from "next/image";
import React from "react";

const ContactAnnouncement = ({ message }) => {
    return (
        <div className="flx-c ctc-announcement">
            <div className="announcement-wrapper">
                <Image
                    src="/img/contact/icon/announcement.svg"
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

export default ContactAnnouncement;
