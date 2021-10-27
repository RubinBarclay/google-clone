import { TopBar, Wrapper, Logo } from "./ResultStyles";
import logoSM from "../../assets/google-logo-sm.png";

function Results() {
  return (
    <Wrapper>
      <TopBar>
        <Logo src={logoSM} />
      </TopBar>
    </Wrapper>
  );
}

export default Results;
