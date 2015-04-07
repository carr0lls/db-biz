# Revamp of the Dropbox for Business page

[Live demo](http://carrollyu.me/dropbox)

Development stack:
- HTML5
- Javascript
- CSS
- jQuery

Testing Tools (latest browser versions):
- W3C Validator
- Google Chrome
- Mozilla Firefox
- Internet Explorer
- Safari
- Opera
- OS X Yosemite
- Windows 7/8
- Android (Moto X)
- iOS (iPhone 4/5s/6)
- Windows mobile (Nokia Lumia)

Features to be added in the future:
- Implement column offsets ability in the 12 column grid
- Use SASS to dynamically change font color and weight according to its size

Exercise requirements:

1. Page should load with the header having a plain blue background color, and after a small delay the background image should slide in from the bottom while fading in from 0% to 100% opacity.

2. For the “Why Dropbox for Business” section, the three illustrations should animate in from left to right with a slight overlap between their timelines. The animation should start only when this section scrolls into view, or if it was already on screen then it should animate after 200px vertical scrolling. Each should begin at 50% of its size to the left, 0% opacity and a slight blur. Each should animate in quickly with a slight elastic bounce at the end before coming to rest.

3. The image carousel has 3 images that can be navigated to from either the arrows on the side or the markers below. There should be a pleasant transitioning between each image and the carousel should wrap around when it reaches the last/first image.

4. The full width image at the bottom should always cover the entire size and preserve it’s aspect ratio of its container as the browser window width changes. The container never changes in height. Scaling of the image should be avoided as much as possible. Video should play in-line with the player settings of your choice. Black boxed sides are fine.

5. The the desktop page should be laid out with a 12 column grid. 55px columns, 30px gutters as specified in the style guide.

6. Create a responsive version of the page for mobile browsers. You have creative independence on how you determine this page should look.

Constraints:
You may not use any third party code with the exception of jQuery. You are allowed (and encouraged) to use preprocessor tools such as SASS for the CSS. The Javascript should be hand coded.