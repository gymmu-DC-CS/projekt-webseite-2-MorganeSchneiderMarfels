
I created a section with a grid where I show four different movies. For this, I used a <section> and made movie cards using <a> tags, so the whole card is clickable. Each card has an image and some basic information like the title and the main actors. The images are added with the <img> tag, and the link is written in the src attribute, which tells the browser where to get the image from. We already learned this before, but I also used Khan Academy to refresh it.

At first, I had some problems with the images because even though I added the link, they didn’t show up. After trying a bit and looking it up, I realised that I used the wrong kind of link. With help from ChatGPT, I understood that I needed direct image links. After changing them, it worked.

I also made it so that when you click on a movie card, it jumps to a more detailed part of the page. I did this by using links like href="#movie1" and giving each detail section its own ID. This connects the cards with the descriptions below. I looked this up again on Khan Academy and also watched some YouTube videos to understand it better.

Before starting, I had a clear idea of how my website should look. I first drew some ideas on my iPad. Because of the theme, I wanted it to look aesthetic and clean. I knew it would be more than what we learned in class, but I still wanted to try it.

For the layout, I used CSS Grid with display: grid, so the cards are in rows and columns. I also used grid-template-columns with auto-fit and minmax so the layout changes depending on the screen size. I didn’t know how to do this before or that it was even a possibility but ChatGPT recommended it to me and helped me to understand how it works and then to built it on my own website.
One problem I realised a little to late was that I didn't use diffrent files for my CSS and HTML. That was a problem on my part because I didn't read the instructions that carefully. So I then had to copy it out and put is in the folder for CSS and then link it together. that was also something I first didn't know how to do.

I also styled the cards to make them look nicer. I used border-radius to make the corners round and box-shadow so they stand out more. I added a hover effect using :hover and transform: scale(1.05), so the cards get a bit bigger when you move the mouse over them. Some of these things were new to me, so I looked them up and tested them. It was difficult to decide how they should look because I didn't know that so many effects were a possibility. But I also didn't want to make it to complicated for me so I chose those effects who spoke to me the most.

For the images, I used object-fit: cover so they don’t get stretched and always fill the space. I found this was a possibilitie while fixing my image problem.

Below the grid, I added more detailed sections for each movie using <div> elements with IDs. These include longer summaries and more information. It was important to me that clicking on a card scrolls to the right section. The cards should only be an input so that when you look at them you would want to know more about the movie. It was also important to me that I could put in a good and throughout summary and with only the cards that wasn't possible.

At the end, I also added a section about common rom-com tropes to make the website more interesting. There I used normal text with headings.

For JavaScript, I first looked up what it is and what it can do. Then I used ChatGPT to help me understand an example and added it to my website. The fist thing that was recommended to me was a simple button where some type of information would appear. I chose then to use some funny and interestring facts about Rom-coms in generall. I think understanding the whole jawa script part was the most difficult part because it was all very new to me. Also all these diffrent commands were a little bit overwhelming to understand and also to use correctly. They were all very diffrent and had a lot of puposes i would have never thought about. For example making it able to alweays choose random ones and not just the arration it was standing on in the index. So i definetly learned how comlex just one button with random information is.

Most of this was new to me, so I used different websites, YouTube, and ChatGPT to understand it and then tried to use it on my own website.