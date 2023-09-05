const lesson = {
  title: `Learn Coding!`,
  overview:
    `Hi! This project will help you learn this topic!`,
  prerequisites: `Here are some prerequisites and links to them`,
  steps: [
    {
      intro: `Here is a generic intro to the topic`,
      code: `let code = true;`,
      guess: `What do you think this code will do? 🤔`,
      run: `Try it! Copy the code into the script..`,
      explore: `Yay! you ran the code, look at it again to find out how.. 👀
* It did one thing
* Then another
* And another`,
      change: `🚧 OK, now make this change...`,
      recap: `🎉 Recap of what we learned, building back up to abstraction level by referencing how you'd use it or what other techniques are related...`,
      ran: () => {
        try {
          // Check the code
          return true;//just for demo
        } catch (error) {
          return false;
        }
      },
      done: () => {
        try {
          // Check the code has been changed
          return true;//just for demo
        } catch (error) {
          return false;
        }
      },
    },{
      intro: `Here is a generic intro to the topic`,
      code: `let code = true;`,
      guess: `What do you think this code will do? 🤔`,
      run: `Try it! Copy the code into the script..`,
      explore: `Yay! you ran the code, look at it again to find out how.. 👀
* It did one thing
* Then another
* And another`,
      change: `🚧 OK, now make this change...`,
      recap: `🎉 Recap of what we learned, building back up to abstraction level by referencing how you'd use it or what other techniques are related...`,
      ran: () => {
        try {
          // Check the code
          return true;//just for demo
        } catch (error) {
          return false;
        }
      },
      done: () => {
        try {
          // Check the code has been changed
          return false;//just for demo
        } catch (error) {
          return false;
        }
      },
    },{
      intro: `Here is a generic intro to the topic`,
      code: `let code = true;`,
      guess: `What do you think this code will do? 🤔`,
      run: `Try it! Copy the code into the script..`,
      explore: `Yay! you ran the code, look at it again to find out how.. 👀
* It did one thing
* Then another
* And another`,
      change: `🚧 OK, now make this change...`,
      recap: `🎉 Recap of what we learned, building back up to abstraction level by referencing how you'd use it or what other techniques are related...`,
      ran: () => {
        try {
          // Check the code
          return false;//just for demo
        } catch (error) {
          return false;
        }
      },
      done: () => {
        try {
          // Check the code has been changed
          return false;//just for demo
        } catch (error) {
          return false;
        }
      },
    },
  ],
  project: {
    name: `Cool project`,
    intro: `Here is what this project does, and you have your own remix of it you can mess around with!`,
    code: `project/project.js`,
    extend: `Try extending the project to do these things that use techniques you learned in the steps...`,
    done: () => { return true; },
    recap: `💡 You can continue developing it in any way you like!`
  },
  synthesis: {
    reflect: `💭 What did you find hardest about this lesson? What was most fun about it? What else would you use it for?`,
    connect: `📣 [Share on the community forum](https://support.glitch.com)`,
    link: `Here are some links to further learning and ecosystem resources:

* link 1
* link 2
* link 3`
  },
};
export default lesson;
