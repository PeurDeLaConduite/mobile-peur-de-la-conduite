import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="pp_politique-container">
            <h1 className="pp_title">Politique de Confidentialité</h1>

            <section>
                <h2 className="pp_section-title">
                    🔒 Aucune transmission à des tiers
                </h2>
                <p>
                    Les informations que vous renseignez (nom, prénom, email,
                    téléphone, etc.){" "}
                    <strong>
                        ne sont jamais partagées avec des fournisseurs tiers
                    </strong>
                    . Elles sont utilisées uniquement pour vous contacter si
                    vous en avez fait la demande.
                </p>
            </section>

            <section>
                <h2 className="pp_section-title">🔐 Sécurité maximale</h2>
                <p>
                    Vos données sont stockées de manière sécurisée avec des
                    mesures techniques et organisationnelles destinées à{" "}
                    <strong>empêcher tout accès non autorisé</strong>.
                </p>
            </section>

            <section>
                <h2 className="pp_section-title">✅ Consentement clair</h2>
                <ul className="pp_list">
                    <li>
                        En cochant la case{" "}
                        <em>
                            "J'ai lu et accepté les conditions d'utilisation"
                        </em>
                        , vous acceptez notre politique de confidentialité.
                    </li>
                    <li>
                        L’inscription aux notifications d’événements est{" "}
                        <strong>facultative</strong> : vous ne recevrez
                        d’informations que si vous avez donné votre accord
                        explicite.
                    </li>
                </ul>
                <p></p>
            </section>

            <section>
                <h2 className="pp_section-title">📬 Vos droits</h2>
                <p>
                    Vous pouvez à tout moment demander la{" "}
                    <strong>modification ou la suppression</strong> de vos
                    données en nous contactant via le formulaire prévu à cet
                    effet.
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
