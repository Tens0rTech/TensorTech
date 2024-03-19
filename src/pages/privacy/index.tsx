import ContentText from "../../components/ContentText";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Newsletter from "../home/Newsletter";

export default function Privacy() {
  return (
    <>
      <Header notMenu />
      <ContentText title="POLÍTICA DE PRIVACIDADE E TRATAMENTO DE DADOS">
        <p>
          A Tensortech está comprometida em proteger a privacidade dos nossos
          usuários. Esta Política de Privacidade descreve como coletamos,
          usamos, compartilhamos e protegemos as informações pessoais dos nossos
          usuários.
        </p>
        <p>
          Informações que Coletamos:
          <ul>
            <li>
              Informações Pessoais: Podemos coletar informações pessoais
              identificáveis, como nome, endereço de e-mail, número de telefone
              e informações de pagamento, apenas quando fornecidas
              voluntariamente pelos usuários.
            </li>
            <li>
              Informações de Navegação: Podemos coletar informações sobre o
              dispositivo do usuário, incluindo endereço IP, tipo de navegador,
              páginas visitadas e horários de acesso.
            </li>
          </ul>
        </p>
        <p>
          Uso das Informações:
          <ul>
            <li>
              As informações pessoais fornecidas pelos usuários serão usadas
              para fornecer os serviços solicitados, processar transações,
              responder a consultas e enviar comunicações relacionadas à
              empresa.
            </li>
            <li>
              As informações de navegação podem ser usadas para melhorar a
              experiência do usuário, personalizar conteúdo, analisar tendências
              e administrar o site.
            </li>
          </ul>
        </p>
        <p>
          Compartilhamento de Informações:
          <ul>
            <li>
              Não compartilhamos informações pessoais dos nossos usuários com
              terceiros, exceto quando necessário para fornecer serviços
              solicitados ou conforme exigido por lei.
            </li>
            <li>
              Podemos compartilhar informações agregadas ou anonimizadas que não
              identificam individualmente os usuários para fins de análise de
              dados, marketing ou outros fins comerciais.
            </li>
          </ul>
        </p>
        <p>
          Segurança das Informações:
          <ul>
            <li>
              Implementamos medidas de segurança para proteger as informações
              pessoais dos nossos usuários contra acesso não autorizado, uso
              indevido ou alteração.
            </li>
            <li>
              No entanto, nenhuma transmissão de dados pela internet ou
              armazenamento eletrônico é totalmente segura, e não podemos
              garantir a segurança absoluta das informações.
            </li>
          </ul>
        </p>
        <p>
          Alterações nesta Política:
          <ul>
            <li>
              Esta Política de Privacidade pode ser atualizada periodicamente
              para refletir mudanças nas práticas de privacidade. Recomendamos
              que os usuários revisem esta página regularmente para se manterem
              informados sobre como protegemos suas informações.
            </li>
          </ul>
        </p>
        <p>
          Contato:
          <ul>
            <li>
              Se você tiver alguma dúvida sobre esta Política de Privacidade ou
              sobre as práticas de privacidade da Tensortech, entre em contato
              conosco através do e-mail [endereço de e-mail de contato].
            </li>
          </ul>
        </p>
        <p>
          Ao usar o nosso site, você concorda com os termos desta Política de
          Privacidade. Se não concordar com estes termos, por favor, não use o
          nosso site.
        </p>
        <p>
          <small>Atualizado em 19/03/2024.</small>
        </p>
      </ContentText>
      <Newsletter />
      <Footer />
    </>
  );
}
