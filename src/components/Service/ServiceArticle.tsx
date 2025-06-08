// src/components/ServiceArticle.tsx
"use client";
import React from "react";
import type { ServiceItem } from "@src/home/service/Component/servicesTypes";

type Props = { service: ServiceItem };

const ServiceArticle: React.FC<Props> = ({ service }) => (
  <article className="pck-Ct" id={service.id}>
    <div className="margin-srv" />

    <div className="srvP_C-tle">
      <div className="srvP-img">
        <img src={service.imgSrc} alt={service.imgAlt} />
      </div>
      <div className="srvP-h3">
        <h3>{service.title}</h3>
      </div>
    </div>

    <div className="srvP_bull-card">
      <div className="bull-bd">
        <img
          src="/img/utils/bulle-bd.svg"
          alt="Puces"
          width={24}
          height={25}
        />
      </div>
      <p className="srv-desrib">{service.description}</p>
    </div>
  </article>
);

export default ServiceArticle;
