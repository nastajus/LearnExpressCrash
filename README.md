# ExpressJS practice

Adding new skill set experience of ExpressJS, and general NPM-fu, by following this  [YouTube ExpressJS Crash Course]( https://www.youtube.com/watch?v=gnsO8-xJ8rs), done by Brad Traversy of Traversy Media. 


## What I did

I coded alongside the video, pausing often and retyping myself. This allows me to reflect upon the code, solidifying the knowledge & understanding of this skill.

In my typical Ian-fashion, I've performed git commits at conceptual landmarks (visible [here](https://github.com/nastajus/LearnExpressCrash/commits/master)) as the video progressed. These allow easy review of concepts on subsequent sessions, ensuring I have a high quality of understanding & retention. 

I decided some workflows early on. For personal projects like this, I try to minimize commiting other's libaries. I like meaningful statistics on myself, so when I see github's breakdown that this project is "JavaScript 74.1%,  HTML 25.9%", I want to know it's all mine and not overshadowed by the large libraries I imported. 


## Learned 

### how and why I excluded other's libraries

So as JavaScript libraries are proliferant and are necessary dependencies, I came up with the following solution to keep my github statistics purely my own typed code.

\<nerdy-stuff\>

I made sure to learn to use `npm install <lib> `**`-g`** (the `-g` flag is for globally-installing a single copy on your system), combined with `npm link <lib>` (which makes symlink in your project folder to point to that library), and finally combined to customize the `.gitignore` file to specifically ignore that link (without which would've pulled all that stuff back into the commit, defeating my goal). Also, I discovered I couldn't use npm's **`--save`** flag simultaneously with the -g flag, so I manually updated the `package.json` file with each required package as I progressed through the content, with the dependencies used with the various `require`s.

\</nerdy-stuff\>


### what I want to do next after this

The author chose to use *ejs* due to it's lightweight syntax requiring little extra knowledge beyond basic HTML. In the future I want to avoid duplicating the field names so much in both the front-end and back-end by exploring different templating frameworks, or alternatively I will learn how to configure better IDE-support for interlinking declarations from each end bidirectionally. I want that perfect syntax highlighting of all embedded templating languages.


### merging two git repositories into one is straightforward

I started the project on a desktop computer with a brief commit history, but didn't push to github. Then at another session I decided to restart at a coffee shop, once I confirmed there exists a simple workflow to merge two separate git repositories, [here](https://stackoverflow.com/a/10548919). 


 ## Result

 ![Image of form](https://github.com/nastajus/LearnExpressCrash/raw/master/readme/Capture.PNG "Image of form")
