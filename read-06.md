# An Introduction to Node.js on sitepoint

1. What is Node and when should I use it? Node.js® is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google’s V8 JavaScript engine and libuv library. This means that Node.js is a program we can use to execute JavaScript on our computers.
1. The V8 engine is the open-source JavaScript engine that runs in Google Chrome and other Chromium-based web browsers, including Brave, Opera, and Vivaldi.
1. You can check that Node is installed on your system by opening a terminal and typing node -v.

1. npm init -y  
This will create and auto-populate a package.json file in the same folder.

1. These build tools come in all shapes and sizes, and you won’t get far in a modern JavaScript landscape without bumping into them. They can be used for anything from bundling your JavaScript files and dependencies into static assets, to running tests, or automatic code linting and style checking.

1. And if you want to start developing apps with any modern JavaScript framework (for example, React or Angular), you’ll be expected to have a working knowledge of Node and npm (or maybe Yarn).

1. Node.js Lets Us Run JavaScript on the Server

1. In very simplistic terms, when you connect to a traditional server, such as Apache, it will spawn a new thread to handle the request.

1. It’s also event-driven, which means that everything that happens in Node is in reaction to an event.

1. Node’s execution model causes the server very little overhead, and consequently it’s capable of handling a large number of simultaneous connections.

1. Node is particularly suited to building applications that require some form of real-time interaction or collaboration — for example, chat sites, or apps such as CodeShare, where you can watch a document being edited live by someone else.

1. It’s also a good fit for building APIs where you’re handling lots of requests that are I/O driven (such as those needing to perform operations on a database), or for sites involving data streaming, as Node makes it possible to process files while they’re still being uploaded.

1. Aside from speed and scalability, an often-touted advantage of using JavaScript on a web server — as well as in the browser — is that your brain no longer needs to switch modes.

1. Another of Node’s big pluses is that it speaks JSON. JSON is probably the most important data exchange format on the Web, and the lingua franca for interacting with object databases (such as MongoDB).

1. And it doesn’t stop at the server. There are many other exciting and varied uses of Node.js!  
For example it can be used as a scripting language to automate repetitive or error prone tasks on your PC. It can also be used to write your own command line tool, such as this Yeoman-Style generator to scaffold out new projects.

1. JavaScript is everywhere, and Node is a vast and expansive subject
 
1. Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google’s V8 JavaScript engine and libuv library.