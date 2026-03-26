I made a section with a grid where I show four different movies. For this, I used a <section> and created movie cards using <a> tags, so the whole card is clickable. Each card has an image and some basic information like the title and the main actors. The images are added with the <img> tag, and the link to the image is written in the src attribute, which tells the browser where to get the image from.

I also made it so that when you click on a movie card, it jumps to a more detailed part of the page. I did this by using links like href="#movie1" and giving each detail section its own ID. This connects the cards with the detailed descriptions below.

For the layout, I used CSS Grid with display: grid. This makes the cards automatically line up in rows and columns. I used grid-template-columns with auto-fit and minmax, which helps the layout adjust depending on the screen size.

I also styled the cards to make them look better. I used border-radius to round the corners and box-shadow to add a shadow so the cards stand out more. I added a hover effect using :hover and transform: scale(1.05), which makes the card slightly bigger when you move the mouse over it.

For the images, I used object-fit: cover so they don’t get stretched and always fill the space nicely.

Under the grid, I added more detailed sections for each movie using <div> elements with IDs. These sections include longer summaries and more information about each film.

At the end, I also added a section about common rom-com tropes to give more background information and make the website more interesting.