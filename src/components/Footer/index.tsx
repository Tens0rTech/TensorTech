import Section from "../Section";
import { COLORS } from "../../theme";
import { Content, Foot, ImageFooter, InfoItem, LocationDesc } from "./style";
import Logo from "../../assets/images/logoV.svg";
import Phone from "../../assets/images/phone.svg";
import Mail from "../../assets/images/mail.svg";
import Location from "../../assets/images/location.svg";
import Instagram from "../../assets/images/instagram.svg";
import Linkedin from "../../assets/images/linkedIn.svg";
import YouTube from "../../assets/images/youtube.svg";

export default function Footer() {
  return (
    <Section backgroundColor={COLORS.PRIMARY}>
      <Foot>
        <ImageFooter src={Logo} onClick={() => window.scrollTo(0, 0)} />
        <Content>
          <InfoItem>
            <img src={Phone} />
            <p>+55 (27) 99798-2440</p>
          </InfoItem>
          <InfoItem>
            <img src={Mail} />
            <p>contato@tensortech.com.br</p>
          </InfoItem>
          <div>
            <InfoItem>
              <img src={Location} />
              <p>Localidade:</p>
            </InfoItem>
            <LocationDesc>
              Tensortech - Vila Velha / ES - Brasil
              <br />
              Rua Santiago Dantas, s/n
              <br />
              Nossa Senha da Penha
              <br />
              CEP 29110-230
            </LocationDesc>
          </div>
        </Content>
        <Content>
          <a href="https://www.instagram.com/tensor.tech/" target="_blank">
            <img src={Instagram} />
          </a>
          <a
            href="https://www.linkedin.com/company/tensortech-tecnologia/"
            target="_blank"
          >
            <img src={Linkedin} />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src={YouTube} />
          </a>
        </Content>
      </Foot>
    </Section>
  );
}
