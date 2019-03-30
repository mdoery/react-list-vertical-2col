## A wrapping list of spans with a div to the right

This project is based on [react-list-vertical](https://github.com/mdoery/react-list-vertical). In that project, a list of names is displayed in a vertical column to the left of the screen.

This project adds a big div to the right of that column. It's used to display a video.

Let's try [flex-box layout](https://dev.to/drews256/ridiculously-easy-row-and-column-layouts-with-flexbox-1k01)! First, I just set one column to have 50% width, and I got this interesting view:

![2 column 50% width](https://github.com/mdoery/react-list-vertical-2col/blob/master/react-list-vertical-2col-example-50-percent.png "2 column 50% width")

It's not really what I want, but it's interesting, so I'm going to commit ([ef65aed](https://github.com/mdoery/react-list-vertical-2col/commit/ef65aed)) that step right now.

Now I've added a YouTube video in an iframe. The left edge of the iframe start at 50% of the screen width, and it occupies a nice big chunk of the screen. I'm checking in the code which did that now ([8423051](https://github.com/mdoery/react-list-vertical-2col/commit/8423051)). Here's the view:

![2 column 50% width using Flexbox](https://github.com/mdoery/react-list-vertical-2col/blob/master/react-list-vertical-2col-example-50-percent-flex.png "Flexbox two-column format")

## About

This uses node 8.10

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

