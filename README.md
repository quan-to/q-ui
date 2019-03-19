# Quanto UI Toolkit



## Setup

Install dependencies.

```bash
npm install;
```



### Themes
Move the `theme.example.js`file to root of `src`.

```bash
mv src/themes.example.js src/themes.js
```

In the end of theme file you can Input your theme name. Or you can use `default`as well.

```javascript
const current = 'theme name';
```

You will see that our `default` theme it's just a primary element inside the themes object. To add more themes you just need create a copy of the same structure and replace with your own values. Below we'll describe them.



### Typography

Use `typo` to store your setup data only about typography configurations and use our Font Component later to add your fonts families, sizes, styles, etc...

```
typo: {
    directory: <String> Your fonts directory
    base: <Number> Your base typography value
    lineHeight: <Number> Your default lineHeight
    scale: <Array> Insert your 7 typography scales
}
```



### Rythm

Use `rythm` to store your setup data about vertical rhythm (or vertical spacement's between components) and use these informations inside your new component/view.

```
rythm: {
    base: <Number> Primary number to guide your rythm pattern
    scale: <Array> Scales to multiply the base value
}
```



### Grid

There's no relevant informations yet. Working in progress...



### Palette

Use `rythm` to store your palette informations. Use this to create a new component/view



### Icon and Image directory

Use `iconDirectory` and `imageDirectory` to setup where some components will load icons and images




## Components
All components have a self contained style and can be directly imported. Below we'll describe da basic usage for each one.



### Button

```javascript
<Button
  onClick={myHandlerFunc}
  className="my-helper-classname"
  disable={false}
  fluid={true}
  icon={'my-image-name'}
>
  <span>Hi, a can handle a child element as well.</span>
</Button>
```

#### Notes:

- If your button's `disable` prop is `true`, `onClick` function will not be triggered.

- Describe your button's `icon` with the name of the image inside the image folder you've described during the themes setting up.



### Divider

Will render a simple divider between.

```javascript
<Divider />
```



### Flexbox (Grid)

It's a wrapper for flexboxgrid. For more informations about how you can combine values and behaviors, please visit http://flexboxgrid.com/.

```javascript
<Container
  className="my-helper-classname"
  fluid={true}
  style={myStyleObj}
>
	<Row
    className="my-helper-classname"
    start="md"
    end="lg"
    top="sm"
    bottom="md"
    center="sm"
    around="lg"
    between="md"
    reverse={false}
  >
    <Col
      className="my-helper-classname"
      xs="8"
      sm="6"
      md="4"
      lg="2"
      xsOffset="4"
      smOffset="6"
      mdOffset="8"
      lgOffset="10"
      first="md"
      last="lg"
    >
      Content here
    </Col>
  </Row>
</Container>
```



### Form

All these components are self-contained and works properly without any integration with a container, however we suggest you to use a form handler/validator.

```javascript
//Requirements
import {
  Checkbox,
  List as FormList,
  Pin,
  Text
} from './q-ui/Form';

// Checkbox
<Checkbox
  className="my-helper-classname"
  name="myCheckbox"
  value={props.myCheckbox.value}
  id="myCheckbox"
  checked={props.myCheckbox.checked}
/>

//List
const myFormListItem = [
    { key: '', content: ''},
];

<FormList
  className="my-helper-classname"
  items={myFormListItem}
  onClick={myHandlerFunc}
/>

//Pin
<Pin
  className="my-helper-classname"
  length={4}
  onComplete={myPinHandlerFunc}
/>

//Text
<Text
  className="my-helper-classname"
  placeholder="Branch number"
  name="branch"
  mask="9999"
  maskChar=" "
/>

<Text
  className="my-helper-classname"
  placeholder="Password"
  name="password"
/>
```

#### Note:

- Use `ReactDom.createRef()` to access these components values.



### Icon

Will render an icon based on your iconography.

```javascript
<Icon
  className="my-helper-classname"
  size={27}
  name="arrow-back"
/>
```

#### Notes

- Describe your Icon `name`  with the name of the icon inside the icon folder you've described during the themes setting up.
- An Icon component expeted a simetric/squared icon. That's why you describe the size only with one value.



### Image

Will render an icon based on your iconography.

```javascript
<Image
  className="my-helper-classname"
  file="my-image-name.svg"
  width={100}
  height={60}
  position="cover"
/>
```

#### Notes

- Describe your Image `file`  with the name of the image inside the image folder you've described during the themes setting up.



### If

Use this component to feature, component or content switch.

```javascript
<If test={props.isActive}>
  <span>It´s active</span>
</If>
```



### List

Will render a simple list.

```javascript
const myListItem = [
  { key: '', content: '' },
];

<List
  className="my-helper-classname"
  items={myListItem}
/>
```



### Loader

Will render our animated loader.

```javascript
<Loader
  className="my-helper-classname"
  size={81}  
/>
```



### Logo

Will render your application logo.

```javascript
<Logo
  className="my-helper-classname"
  onClick={myHandlerFunc}
  size={81}
/>
```

#### Note:

- This component will search a `logo.png` file inside your images directory.



### Notification

Will render a bottom notification component based in `status` value (boolean).

```javascript
<Notification
  className="my-helper-classname"
  title="Connection Error"
  message="There's something wrong with your internet connection."
  onClose={myHandlerFunc}
  status={props.notificationStatus}
/>
```



### Nucleo

TBD

### Timer

Use this component to put a feature or component inside a time lapse.

```javascript
<Timer seconds={120}>
  <span>Times up</span>
</Timer>
```



### Typo

```javascript
//Requirements
import {
  Setup as Typo,
  Font,
  Title,
  SubTitle,
  Paragraph,
} from './q-ui/Typo';

//Setup
<Typo
  baseLine={16}
  color="#000"
  font="Campton, Helvetica, Arial, sans-serif"
  lineHeight={1.2}
  reactNative={false}
/>

//Font
<Font
  name="Campton"
  url="CamptonBook.otf"
/>

//Title
<Title primary
  className="my-helper-classname"
>H1 title</Title>

<Title secondary
  className="my-helper-classname"
>H2 title</Title>

//SubTitle
<SubTitle primary
  className="my-helper-classname"
>H4 title</Subitle>

<SubTitle secondary
  className="my-helper-classname"
>H5 title</SubTitle>

//Paragraph
<Paragraph
  className="my-helper-classname"
  small={true},
>Content</Paragraph>
```




## Atelier

If you want a view to checkout your themed toolkit, inject the Atelier (view) Component into your React-Router switch.

```javascript
import { Atelier } from './q-ui';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

<Router>
  <Switch>
    <Route exact path="/" component={Index} />
    <Route path="/atelier" component={Atelier} />
  </Switch>
</Router>
```
