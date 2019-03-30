## A wrapping list of divs

This project is based on [react-list](https://github.com/mdoery/react-list). In that project, a list of names is displayed vertically across the screen, wrapping to the next line if there's not enough room to display them all on one line.

In this project, I'm going to take the same list, and display it vertically, with one name per row.

In this first iteration, though, I'm refactoring the original project so that it takes a list of names, so I'm not copy-pasting line after line for each name. Also, I've introduced a new component, ``RoundedSpan``. I could wait to do this, since I don't really need it right now. But I think it makes the code easier to read.

Here's the vertical list view. It's a bunch of spans which form rows due to html linebreaks (note: ``<br>`` must be written ``<br/>`` in JSX).

![view of spans list](https://github.com/mdoery/react-list-vertical/blob/master/react-list-vertical-example.png "View of spans list")

Also note the use of ``ReactFragment``. "[Fragments let you group a list of children without adding extra nodes to the DOM.]"(https://reactjs.org/docs/fragments.html) If you try to place html linebreaks next to each ``RoundedSpan`` element without using ``ReactFragment``, you get a syntax error, which contains a hint about using fragments:

``
Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?
``

## About

I installed node version 8.10 to run this.

```
nvm install 8.10
nvm use 8.10
npm update
npm start
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

