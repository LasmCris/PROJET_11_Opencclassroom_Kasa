import AproposItems from "../Components/AproposItems.jsx"
import dataAPropos from "../data/objetAPropoItem.jsx"
import "../styles/about.css"

export default function About() {

    const arrayDitemsApropo = dataAPropos.map(item => {
        return (
          <AproposItems
            titreApropos={item.aPropoDeQuoi}
            detailApropos={item.texte}
          />
        );
    });
    
  return (
    <div className="aboutContainer">
      <section className="aboutContainer__img"></section>

      <section className="aboutContainer__aboutItems">
        {arrayDitemsApropo}
      </section>
    </div>
  );
}
