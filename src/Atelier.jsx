import React, { PureComponent } from 'react';
import { Title, SubTitle, Paragraph } from './Typo';
import { Container, Row, Col } from './Flexbox';
import Button from './Button';
import Logo from './Logo';
import {
  Text,
  Pin,
  Checkbox,
  List as FormList
} from './Form';
import Divider from './Divider';
import Loader from './Loader';
import Timer from './Timer';

class Atelier extends PureComponent {
  render() {
    return(<section>
      <Container className="bg--white" fluid>
        <Row>
          <Col sm={12} md={3} className="inner-space--large">
            <Logo size={150} />
          </Col>
          <Col sm={12} md={5} className="inner-space--large">
            <Title primary>Título primário</Title>
            <Title secondary>Título secundário</Title>
            <SubTitle primary>Subtítulo primário</SubTitle>
            <SubTitle secondary>Subtítulo secundário</SubTitle>
            <SubTitle tertiary>Subtítulo terciário</SubTitle>
            <Paragraph>Parágrafo normal</Paragraph>
            <Paragraph small>Parágrafo pequeno</Paragraph>
            <Divider />
            <Paragraph>Outro parágrafo normal</Paragraph>
          </Col>
          <Col sm={12} md={4} className="inner-space--large">
            <Button className="space--bottom">Regular</Button>
            <Button className="space--bottom" fluid>Fluid</Button>
            <Button className="space--bottom" icon="arrow-right" fluid>Fluid with Icon</Button>
            <Button disable={true}>Disable</Button>
          </Col>
          <Col sm={12} md={4} className="inner-space--large">
            <Text
              name="first-name"
              placeholder="Nome"
            />
            <Text
              name="cellphone"
              placeholder="Telefone (com DDD)"
              mask="+55 (99) 99999 9999"
              maskChar=" "
            />
            <Text
              password
              name="password"
              placeholder="Senha"
              className="space--bottom--large"
            />
            <Row className="space--top--large">
              <Col xs={7} sm={5}>
                <label style={{display: 'block', marginTop: '3px'}}
                  className="uppercase"
                  htmlFor="testCheck"
                >
                  Something cool
                </label>
              </Col>
              <Col xs={5} sm={7}>
                <Checkbox id="testCheck" name="test" value="test" />
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={4} className="inner-space--large">
            <FormList
              onClick={(e) => console.log('Welldone', e)}
              items={[
                {
                  id: 'itau-1',
                  content: 'Itau',
                },
                {
                  id: 'bradesco-2',
                  content: 'Bradesco',
                },
                {
                  id: 'hsbc-3',
                  content: 'HSBC',
                },
                {
                  id: 'neon-4',
                  content: 'Neon',
                },
              ]}
            />
          </Col>
          <Col sm={12} md={4} className="inner-space--large">
            <Pin
              length={4}
              onComplete={() => console.log('Well done.')}
            />
          </Col>
        </Row>
        <Col sm={12} md={4} className="inner-space--large">
          <Loader size={90} />
        </Col>
        <Col sm={12} md={4} className="inner-space--large">
          <Timer seconds={10} reset={true}>
            Done :)
          </Timer>
        </Col>
      </Container>
    </section>);
  }
}

export default Atelier;
