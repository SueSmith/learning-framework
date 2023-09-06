const lesson = {
  title: "Learn Coding!",
  overview: "This app will help you learn to code websites!",
  prerequisites: `Here are some prerequisites:

* [Basic HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
* [Basic CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
* [Basic JS like creating variables](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)`,
  steps: [
    {
      intro: "We can use JavaScript to store values like text and numbers in variables and include them in the page HTML elements.",
      code: `let coder = 'your name';
document.querySelector("#greeting").textContent=coder;`,
      guess: "What do you think this code will do? 🤔",
      run: "Try it! Copy the code into the script..",
      explore: `The variable appeared in the page, but how? Look at the code again.. 👀
* It created a variable named \`coder\`
* Gave the variable the value \`your name\`
* Grabbed a page element with \`greeting\` as its ID
* Set the element content to the variable value`,
      change: `🚧 OK, now change the value of the variable to your own name instead of \`your name\``,
      recap: "🎉 In this step you wrote a text variable into the page – we can also store more complex types of data and build the page elements based on them...",
      ran: () => {
        try {
          // Check the var has been declared and is a non-empty string
          return typeof coder == "string" && coder.length > 0;
        } catch (error) {
          return false;
        }
      },
      done: () => {
        try {
          // Check the var has been changed
          return coder != "your name";
        } catch (error) {
          return false;
        }
      },
    },
    {
      intro: "We can create arrays to store collections of values and also include them in page elements.",
      code: `let languages = ["HTML", "CSS", "JavaScript"];
languages.forEach((lang) => {
  let button = document.createElement("button");
  button.textContent=lang;
  document.querySelector("#buttons")
    .appendChild(button);
});`,
      guess: "What do you think this code will do? 🤔",
      run: "Try it! Copy the code into the script..",
      explore: `A button for each language we listed appeared in the page, but how? Take another look at the code.. 👀
* It created an array with three coding language names
* Looped through the array, creating a button for each 
* Set the button text to the current array element and added it to the page`,
      change: `🚧 Add another element to the array, this time for \`Python\``,
      recap: "🎉 This time we included a series of values in the page as buttons. If we wanted more complex data we would probably connect the website to a database!",
      ran: () => {
        try {
          // Check the var has been declared and is non-empty
          return (
            typeof languages == "object" &&
            languages.length > 0 &&
            document.querySelectorAll("#buttons button").length > 0
          );
        } catch (error) {
          return false;
        }
      },
      done: () => {
        try {
          // Check the var has been extended
          return languages.includes("Python");
        } catch (error) {
          return false;
        }
      },
    },
    {
      intro: "Once our data values are built into the page, we can use them interactively to update the content dynamically.",
      code: `let buttons = document.querySelectorAll("#buttons button");
buttons.forEach((btn) => {
  btn.onclick = () => {
    document.querySelector("#greeting").textContent =
      coder + " ♥️ " + btn.textContent;
  };
});`,
      guess: "What do you think this code will do? 🤔",
      run: "Try it! Copy the code into the script..",
      explore: `When we click, a button the page updates with the value we selected.. Take a look again 👀
* It grabbed all of the buttons from the section
* Added a function to respond to clicks on each one
* Included the value of the clicked button alongside the name variable`,
      change:
        '🚧 Maybe we love more than one language! Change the code in the `onclick` function to add the selected language to the existing text instead of replacing it, you can use the plus equals operator `+=` on the `textContent` property.',
      recap: "🎉 Make sure you hit the buttons a few times! We can build data values all over our website functionality..",
      ran: () => {
        try {
          // Check the code
          return document.querySelector("#buttons button").onclick != null;
        } catch (error) {
          return false;
        }
      },
      done: () => {
        try {
          // Check the code has been changed
          return (
            document
              .querySelector("#buttons button")
              .onclick.toString()
              .indexOf("+=") >= 0
          );
        } catch (error) {
          return false;
        }
      },
    },
  ],
  project: {
    name: "Cool project",
    intro: "Look at the code and comments to learn what this project does – you have your own remix of it you can mess around with!",
    code: "project/project.js",
    extend: `Edit the script to display the user's guesses in the page:
    
* Add code inside the \`onclick\` function
* Append another new child element on each click
* Add the text value of the user's guess in a "p" element

⚠️ _If you get stuck look back at your \`script.js\` code..._`,
    done: () => {
      return document
        .querySelector("#game button")
        .onclick.toString().indexOf("appendChild") > -1
    },
    recap: "💡 You'll see lots of fancy frameworks for building websites with JavaScript, but what we learned in this project works in the browser without installing anything!"
  },
  synthesis: {
    reflect: "💭 What did you find hardest about this lesson? What was most fun about it? What else would you use it for?",
    connect: `📣 [Share on the community forum](https://support.glitch.com)`,
    link: `Keep developing your project to do whatever you like! Here are some links to try next:

* [MDN: Manipulating Documents](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
* [MDN: Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
* [MDN: Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)`
  },
};
export default lesson;
