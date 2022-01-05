import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar Contato" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <a href="/"> Novo Contato</a>
      </Header>

      <ListContainer>
        <Header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </Header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contactName">
            <strong>Ana Rafaela</strong>
            <small>Instagram</small>
          </div>
          <span>anarrcosta@hotmail.com</span>
          <span>(81) 99999-9999</span>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>
      <Card>
        <div className="info">
          <div className="contactName">
            <strong>Ana Rafaela</strong>
            <small>Instagram</small>
          </div>
          <span>anarrcosta@hotmail.com</span>
          <span>(81) 99999-9999</span>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>
      <Card>
        <div className="info">
          <div className="contactName">
            <strong>Ana Rafaela</strong>
            <small>Instagram</small>
          </div>
          <span>anarrcosta@hotmail.com</span>
          <span>(81) 99999-9999</span>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="Edit" />
          </a>
          <button type="button">
            <img src={trash} alt="Delete" />
          </button>
        </div>
      </Card>

    </Container>
  );
}
