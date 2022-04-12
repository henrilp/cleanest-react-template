import { KaContainer } from "components/Container";
import { KaButton } from "components/Elements/KaButton";

export const Generated = () => {
  return(
  <KaContainer
    code = "k-texte"
  >
    <KaButton
      code = "k-button"
    >
      {"<p>jouez gratuitement dès maintenant</p>"}
    </KaButton>
    <KaButton
      code = "k-button"
    >
      {"<p>&nbsp; regarder la bande annonce</p>"}
    </KaButton>
  </KaContainer>
  );
}