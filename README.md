#simpleCarousel 1.0.1
##The fully-loaded, responsive jQuery carousel slider



Written by: Abdul Raheem C

###License
Released under the MIT license - http://opensource.org/licenses/MIT

Let's get on with it!

##Installation

###Step 1: Link required files

First and most important, the jQuery library needs to be included (no need to download - link directly from Google). Next, download the package from this site and link the bxSlider CSS file (for the theme) and the bxSlider Javascript file.

```html
<!-- jQuery library (served from Google) -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<!-- simpleCarousel Javascript file -->
<script src="simpleCarousel.min.js"></script>
<!-- simpleCarousel CSS file -->
<link href="styles.css" rel="stylesheet" />
```

###Step 2: Create HTML markup

Create a `<div id="container" class="container">` element, with a `<div>` for inner `<div class="sc-slides">` element. 
User can create controlls for the slider based on their intention. But user has to pass the Id's of controlls.

Id's and Class's may not be use same keywords

```html
<div id="container" class="container">
	<div class="sc-slides">
		<img src="1.png" class="sc-inner" />
		<img src="2.jpg" class="sc-inner" />
		<img src="3.png" class="sc-inner" />
		<img src="4.png" class="sc-inner" />
		<img src="5.jpg" class="sc-inner" />
		<img src="6.jpg" class="sc-inner" />
		<img src="7.jpg" class="sc-inner" />
		<img src="8.jpg" class="sc-inner" />
		<img src="9.png" class="sc-inner" />
	</div>
	<div id='sc-left' class='sc-left'>&lt;</div>
	<div id='sc-right' class='sc-right'>&gt;</div>
</div>
```

###Step 3: Call the simpleCarousel

Call #simpleCarousel() on `<div id="container" class="container">`. Note that the call must be made inside of a $(document).ready() call, or the plugin will not work!

```javascript
$(document).ready(function(){
	$("#container").simpleCarousel();
});
```

##Configuration options

###General

####Slider Properties

**slideDuration**
Slide transition duration (in ms)
```
default: 2000
options: integer
```

**slidesCount**
How many slides has to display in container(count)
```
default: 3
options: integer
```

####Autoplay Settings

**autoPlay**
want to Autoplay the slides(in Boolean i.e., true / false)
```
default: true
options: boolean(true / false)
```

**autoPlayDirection**
direction of the autoplay transition
```
default: 'right'
options: 'right', 'left'
```

**autoPlayDuration**
Duration of Autoplay(in ms)
```
default: 5000
options: integer
```

####controlls settings
**controlls**
you want to use controlls for the slider then you can enable it(boolean i.e., true / false)
```
default: true
options: boolean(true / false)
```

If your changing the ID's of controlls you have to call those ID's

**leftNavId**
calling left side controll id
```
default: 'sc-left'
options: jQuery Selector
```

**rightNavId**
calling right side controll id
```
default: 'sc-right'
options: jQuery Selector
```

##Contributing

Everyone is welcome to help contribute and improve this project. There are several ways you can contribute:

 * Reporting issues
 * Suggesting new features
 * Writing or refactoring code
 * Fixing issues

## Changelog

### Version 1.0.1

* First attempt
* Launched the initial version os Simple Carousel
* It has simple and easy option set
* Easy to access these plugin
