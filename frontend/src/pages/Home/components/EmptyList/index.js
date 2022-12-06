/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
import emptyBox from '../../../../assets/images/empty-box.svg';

import { Container } from './styles';

export default function EmptyList() {
  return (
    <Container>
      <img src={emptyBox} alt="emptyBox" />
      <p>
        You don't have any registered contacts yet.
        Click on button <strong>"New Contact"</strong> above to create your first contact!
      </p>
    </Container>
  );
}
