import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Informations-légales",
};
import PrivacyPolicy from "../../src/components/Legal/PrivacyPolicy";
import TermsOfUse from "../../src/components/Legal/TermsOfUse";
export default async function Page() {
    return (
        <section className="section" id="s1">
            <div className="fixed-menu"></div>
            <div className="s1">
                <h1 className="pp_title">Informations légales</h1>
                <TermsOfUse />
                <PrivacyPolicy />
            </div>
        </section>
    );
}
