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

```react
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

```react
<Divider />
```



### Flexbox (Grid)

It's a wrapper for flexboxgrid. For more informations about how you can combine values and behaviors, please visit http://flexboxgrid.com/.

```react
<Container
	fluid={true}
	className="my-helper-classname"
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
        </Col>
    </Row>
</Container>
```



### Form




### Icon


### Image


### If


### List


### Loader


### Logo


### Notification


### Nucleo


### Timer


### Typo


## Atelier
