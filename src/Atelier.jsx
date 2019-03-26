import './Atelier.css';
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
import Qymbol from './Qymbol';
import _theme from './theme';

class Atelier extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSelectComponent = this.handleSelectComponent.bind(this);
    this.handleHoverComponent = this.handleHoverComponent.bind(this);
  }

  state = {
    currentSection: 'welcome',
    hoveredSection: 'welcome',
    sections:
      {
      welcome: {
        name: '',
        content: (
          <section>
            <Title className="uppercase color--blue t--bold">Welcome</Title>
            <div className="desc-card">
              <SubTitle secondary className="uppercase color--blue t--bold">
                Choose a component to start.
              </SubTitle>
            </div>
          </section>
        ),
      },
      setup: {
        name: 'Setup',
        content: (
          <section>
            <Title className="uppercase color--blue t--bold">Setup</Title>
            <div className="desc-card">
              <SubTitle secondary className="uppercase color--blue t--bold space--bottom">
                A quickguide to Setup
              </SubTitle>
              <Paragraph>Install dependencies with <pre>npm install;</pre></Paragraph>
            </div>
          </section>
        ),
      },
      themes: {
        name: 'Themes',
        content: (
          <section>
            <Title className="uppercase color--blue t--bold">Themes</Title>
            <div className="desc-card">
              <SubTitle secondary className="uppercase color--blue t--bold space--bottom">
                Basic theme configuration
              </SubTitle>
              <Paragraph>
              Move the <strong>theme.example.js</strong> file to root of <strong>src</strong>.

<pre>mv src/themes.example.js src/themes.js</pre>
In the end of theme file you can Input your theme name. Or you can use default as well.

<pre>const current = 'theme name';</pre>
You will see that our default theme it's just a primary element inside the themes object. To add more themes you just need create a copy of the same structure and replace with your own values. Below we'll describe them.

<SubTitle secondary className="uppercase color--blue t--bold space--bottom space--top--large">
  Typography configuration
</SubTitle>
Use typo to store your setup data only about typography configurations and use our Font Component later to add your fonts families, sizes, styles, etc...
<pre>
{`typo: {
  directory: <String> Your fonts directory
  base: <Number> Your base typography value
  lineHeight: <Number> Your default lineHeight
  scale: <Array> Insert your 7 typography scales
}`}
</pre>

<SubTitle secondary className="uppercase color--blue t--bold space--bottom space--top--large">
  Rythm configuration
</SubTitle>
Use rythm to store your setup data about vertical rhythm (or vertical spacement's between components) and use these informations inside your new component/view.

<pre>
{`rythm: {
  base: <Number> Primary number to guide your vertical rythm
  scale: <Array> Scales to multiply the base value
}`}
</pre>
              </Paragraph>
            </div>
          </section>
        ),
      },
      typography: {
        name: 'Typography',
        content: (
          <section>
            <Title className="uppercase color--blue t--bold">Typography</Title>
            <div className="desc-card">
              <SubTitle secondary className="uppercase color--blue t--bold space--bottom">
                Titles
              </SubTitle>
              <Title primary>Primary title</Title>
              <Title secondary>Secondary title</Title>
              <pre>
              {`<Title primary>Primary title</Title>
<Title secondary>Secondary title</Title>`}
              </pre>
              <SubTitle secondary className="uppercase color--blue t--bold space--bottom space--top--large">
                Subtitles
              </SubTitle>
              <SubTitle primary>Primary subtitle</SubTitle>
              <SubTitle secondary>Secondary subtitle</SubTitle>
              <SubTitle tertiary>Tertiary subtitle</SubTitle>
              <pre>
              {`<SubTitle primary>Primary subtitle</SubTitle>
<SubTitle secondary>Secondary subtitle</SubTitle>
<SubTitle tertiary>Tertiary subtitle</SubTitle>`}
              </pre>
              <SubTitle secondary className="uppercase color--blue t--bold space--bottom space--top--large">
                Paragraph
              </SubTitle>
              <Paragraph>Regular paragraph</Paragraph>
              <Paragraph small>Small paragraph</Paragraph>
              <pre>
                {`<Paragraph>Regular paragraph</Paragraph>
<Paragraph small>Small paragraph</Paragraph>`}
              </pre>
            </div>
          </section>
        ),
      },
      loader: {
        name: 'Loader',
        content: (
          <section>
            <Title className="uppercase color--blue t--bold">Typography</Title>
            <div className="desc-card">
              <Row>
                <Col xs={12}>
                  It's basically an animated component.
                  We suggest you use him with strict size container around.
                  <pre className="margin--bottom--large">{`<Loader size={50} />`}</pre>
                  <Loader size={50} />
                </Col>
              </Row>
            </div>
          </section>),
      },
      flexbox: {
        name: 'Flexbox',
        content: (
          <section>
            <Title className="uppercase color--blue t--bold">Flexbox</Title>
            <div className="desc-card">
              <Row>
                <Col xs={12}>
                  We're using the most popular Flexbox grid library, the
                  <a href="http://flexboxgrid.com/" target="_blank"> Flexboxgrid</a>.

                  Below you'll see how to use our components to create a great
                  fluid and responsive views.

                  <SubTitle secondary className="uppercase color--blue t--bold space--bottom space--top--large">
                    Container
                  </SubTitle>
                  <pre className="margin--bottom--large">{`import { Container } from 'q-ui/Flexbox';

<Container>
  Content here...
</Container>

<Container fluid>
  Fluid content here...
</Container>`}</pre>
                </Col>
              </Row>
            </div>
          </section>),
      },
      button: {
        name: 'Button',
        content: (
          <div>...</div>
        )
      },
    },
  }

  handleSelectComponent(currentSection) {
    this.setState({ currentSection });
  }

  handleHoverComponent(hoveredSection) {
    this.setState({ hoveredSection });
  }

  render() {
    return(<section>
      <Container fluid>
        <Row className="space--top--large">
          <Col xs={6} sm={6} md={6} className="fixed">

          <Qymbol
            className="space--right--large space--bottom--large"
            background={_theme.palette.sandGrey}
            foreground={_theme.palette.blue}
            blockSize={34}
            blocks={[
              [1, 1, 1],
              [1, 0, 1],
              [1, 1, 0],
              [0, 0, 1],
            ]}
          />
          <Qymbol
            className="space--right--large space--bottom--large"
            background={_theme.palette.sandGrey}
            foreground={_theme.palette.blue}
            blockSize={34}
            blocks={[
              [1, 0, 1],
              [1, 0, 1],
              [1, 0, 1],
              [0, 1, 1],
            ]}
          />
          <Qymbol
            className="space--bottom--large"
            onClick={() => this.handleSelectComponent('welcome')}
            background={_theme.palette.sandGrey}
            foreground={_theme.palette.blue}
            blockSize={34}
            blocks={[
              [0, 1, 0],
              [0, 0, 0],
              [0, 1, 0],
              [0, 1, 0],
            ]}
          />

          <Row className="space--bottom space--top">
            <Col sm={12}>
              <Qymbol
                className="space--right--large"
                onClick={() => this.handleSelectComponent('setup')}
                onMouseEnter={() => this.handleHoverComponent('setup')}
                onMouseLeave={() => this.handleHoverComponent('welcome')}
                background={_theme.palette.sandGrey}
                foreground={_theme.palette.blue}
                blockSize={20}
                blocks={[
                  [0, 1, 0],
                  [0, 0, 0],
                  [1, 0, 1],
                  [1, 1, 1],
                ]}
              />
              <Qymbol
                className="space--right--large"
                onClick={() => this.handleSelectComponent('themes')}
                onMouseEnter={() => this.handleHoverComponent('themes')}
                onMouseLeave={() => this.handleHoverComponent('welcome')}
                background={_theme.palette.sandGrey}
                foreground={_theme.palette.blue}
                blockSize={20}
                blocks={[
                  [1, 1, 1],
                  [0, 1, 0],
                  [0, 1, 0],
                  [0, 1, 0],
                ]}
              />
              <Qymbol
                className="space--right--large"
                onClick={() => this.handleSelectComponent('typography')}
                onMouseEnter={() => this.handleHoverComponent('typography')}
                onMouseLeave={() => this.handleHoverComponent('welcome')}
                background={_theme.palette.sandGrey}
                foreground={_theme.palette.blue}
                blockSize={20}
                blocks={[
                  [0, 1, 0],
                  [1, 0, 1],
                  [1, 1, 1],
                  [1, 0, 1],
                ]}
              />
              <Qymbol
                className="space--right--large"
                onClick={() => this.handleSelectComponent('loader')}
                onMouseEnter={() => this.handleHoverComponent('loader')}
                onMouseLeave={() => this.handleHoverComponent('welcome')}
                background={_theme.palette.sandGrey}
                foreground={_theme.palette.blue}
                blockSize={20}
                blocks={[
                  [1, 1, 1],
                  [1, 0, 1],
                  [0, 0, 1],
                  [1, 1, 1],
                ]}
              />
            </Col>
          </Row>
          <Row className="space--bottom">
            <Col sm={12}>
            <Qymbol
              className="space--right--large"
              onClick={() => this.handleSelectComponent('flexbox')}
              onMouseEnter={() => this.handleHoverComponent('flexbox')}
              onMouseLeave={() => this.handleHoverComponent('welcome')}
              background={_theme.palette.sandGrey}
              foreground={_theme.palette.blue}
              blockSize={20}
              blocks={[
                [1, 0, 1],
                [1, 0, 1],
                [1, 0, 1],
                [1, 0, 1],
              ]}
            />
            <Qymbol
              className="space--right--large"
              onClick={() => this.handleSelectComponent('button')}
              onMouseEnter={() => this.handleHoverComponent('button')}
              onMouseLeave={() => this.handleHoverComponent('welcome')}
              background={_theme.palette.sandGrey}
              foreground={_theme.palette.blue}
              blockSize={20}
              blocks={[
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1],
                [1, 1, 1],
              ]}
            />
            <Qymbol
              className="space--right--large"
              onClick={() => this.handleSelectComponent('divider')}
              onMouseEnter={() => this.handleHoverComponent('divider')}
              onMouseLeave={() => this.handleHoverComponent('welcome')}
              background={_theme.palette.sandGrey}
              foreground={_theme.palette.blue}
              blockSize={20}
              blocks={[
                [1, 0, 0],
                [1, 0, 0],
                [0, 1, 1],
                [1, 0, 0],
              ]}
            />
            <Qymbol
              className="space--right--large"
              onClick={() => this.handleSelectComponent('form')}
              onMouseEnter={() => this.handleHoverComponent('form')}
              onMouseLeave={() => this.handleHoverComponent('welcome')}
              background={_theme.palette.sandGrey}
              foreground={_theme.palette.blue}
              blockSize={20}
              blocks={[
                [1, 1, 1],
                [1, 0, 1],
                [1, 0, 1],
                [1, 1, 1],
              ]}
            />
            </Col>
          </Row>
          <Row className="space--bottom">
            <Col sm={12}>
              <Qymbol
                className="space--right--large"
                onClick={() => this.handleSelectComponent('icon')}
                onMouseEnter={() => this.handleHoverComponent('icon')}
                onMouseLeave={() => this.handleHoverComponent('welcome')}
                background={_theme.palette.sandGrey}
                foreground={_theme.palette.blue}
                blockSize={20}
                blocks={[
                  [0, 1, 0],
                  [0, 0, 0],
                  [0, 1, 0],
                  [0, 1, 0],
                ]}
              />
              <Qymbol
                className="space--right--large"
                onClick={() => this.handleSelectComponent('list')}
                onMouseEnter={() => this.handleHoverComponent('list')}
                onMouseLeave={() => this.handleHoverComponent('welcome')}
                background={_theme.palette.sandGrey}
                foreground={_theme.palette.blue}
                blockSize={20}
                blocks={[
                  [0, 0, 0],
                  [1, 1, 1],
                  [0, 0, 0],
                  [1, 1, 1],
                ]}
              />
              <Qymbol
                className="space--right--large"
                onClick={() => this.handleSelectComponent('image')}
                onMouseEnter={() => this.handleHoverComponent('image')}
                onMouseLeave={() => this.handleHoverComponent('welcome')}
                background={_theme.palette.sandGrey}
                foreground={_theme.palette.blue}
                blockSize={20}
                blocks={[
                  [1, 0, 1],
                  [0, 1, 0],
                  [1, 0, 1],
                  [0, 1, 0],
                ]}
              />
              <Qymbol
                className="space--right--large"
                onClick={() => this.handleSelectComponent('if')}
                onMouseEnter={() => this.handleHoverComponent('if')}
                onMouseLeave={() => this.handleHoverComponent('welcome')}
                background={_theme.palette.sandGrey}
                foreground={_theme.palette.blue}
                blockSize={20}
                blocks={[
                  [0, 0, 0],
                  [0, 1, 0],
                  [1, 1, 1],
                  [1, 0, 1],
                ]}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Qymbol
                className="space--right--large"
                onClick={() => this.handleSelectComponent('qymbol')}
                onMouseEnter={() => this.handleHoverComponent('qymbol')}
                onMouseLeave={() => this.handleHoverComponent('welcome')}
                background={_theme.palette.sandGrey}
                foreground={_theme.palette.blue}
                blockSize={20}
                blocks={[
                  [1, 1, 1],
                  [1, 0, 1],
                  [1, 1, 0],
                  [0, 0, 1],
                ]}
              />
              <Qymbol
                className="space--right--large"
                onClick={() => this.handleSelectComponent('qymbol')}
                onMouseEnter={() => this.handleHoverComponent('qymbol')}
                onMouseLeave={() => this.handleHoverComponent('welcome')}
                background={_theme.palette.sandGrey}
                foreground={_theme.palette.blue}
                blockSize={20}
                blocks={[
                  [0, 0, 1],
                  [0, 1, 0],
                  [1, 0, 0],
                  [0, 0, 1],
                ]}
              />
            </Col>
          </Row>


          <div className="space--top">
            <SubTitle tertiary className="uppercase color--blue t--bold q-symbol-name">
              {this.state.sections[this.state.hoveredSection].name}
            </SubTitle>
          </div>
          </Col>
          <Col xs={6} sm={6} md={6} mdOffset={6} >
            { this.state.sections[this.state.currentSection].content }
          </Col>
        </Row>
        <Row className="hidden">
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
        <Col sm={12} md={4} className="inner-space--large hidden">
          <Timer seconds={10} reset={true}>
            Done :)
          </Timer>
        </Col>
      </Container>
    </section>);
  }
}

export default Atelier;
