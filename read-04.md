# MDN URLSearchParams Built-in class
The URLSearchParams interface defines utility methods to work with the query string of a URL.

- URLSearchParams.append()
Appends a specified key/value pair as a new search parameter.  
- URLSearchParams.delete()
Deletes the given search parameter, and its associated value, from the list of all search parameters.  
- URLSearchParams.entries()
Returns an iterator allowing iteration through all key/value pairs contained in this object.  
- URLSearchParams.forEach()
Allows iteration through all values contained in this object via a callback function.  
- URLSearchParams.get()
Returns the first value associated with the given search parameter.  
- URLSearchParams.getAll()
Returns all the values associated with a given search parameter.  
- URLSearchParams.has()
Returns a Boolean indicating if such a given parameter exists.  
- URLSearchParams.keys()
Returns an iterator allowing iteration through all keys of the key/value pairs contained in this object.  
- URLSearchParams.set()
Sets the value associated with a given search parameter to the given value. If there are several values, the others are deleted.  
- URLSearchParams.sort()
Sorts all key/value pairs, if any, by their keys.  
- URLSearchParams.toString()
Returns a string containing a query string suitable for use in a URL.  
- URLSearchParams.values()
Returns an iterator allowing iteration through all values of the key/value pairs contained in this object.  

## toString() returns query string
- The toString() method of the URLSearchParams interface returns a query string suitable for use in a URL.

## Built-in Location Object
- The Location interface represents the location (URL) of the object it is linked to. Changes done on it are reflected on the object it relates to. Both the Document and Window interface have such a linked Location, accessible via Document.location and Window.location respectively.

### Properties
- Location.ancestorOrigins
Is a static DOMStringList containing, in reverse order, the origins of all ancestor browsing contexts of the document associated with the given Location object.
- Location.href
Is a stringifier that returns a USVString containing the entire URL. If changed, the associated document navigates to the new page. It can be set from a different origin than the associated document.
- Location.protocol
Is a USVString containing the protocol scheme of the URL, including the final ':'.
- Location.host
Is a USVString containing the host, that is the hostname, a ':', and the port of the URL.
- Location.hostname
Is a USVString containing the domain of the URL.
- Location.port
Is a USVString containing the port number of the URL.
- Location.pathname
Is a USVString containing an initial '/' followed by the path of the URL.
- Location.search
Is a USVString containing a '?' followed by the parameters or "querystring" of the URL. Modern browsers provide URLSearchParams and URL.searchParams to make it easy to parse out the parameters from the querystring.
- Location.hash
Is a USVString containing a '#' followed by the fragment identifier of the URL.
- Location.origin Read only
Returns a USVString containing the canonical form of the origin of the specific location.

### Methods

- Location.assign()
Loads the resource at the URL provided in parameter.
- Location.reload()
Reloads the current URL, like the Refresh button.
- Location.replace()
Replaces the current resource with the one at the provided URL (redirects to the provided URL). The difference from the assign() method and setting the href property is that after using replace() the current page will not be saved in session History, meaning the user won't be able to use the back button to navigate to it.
- Location.toString()
Returns a USVString containing the whole URL. It is a synonym for HTMLHyperlinkElementUtils.href, though it can't be used to modify the value.

### HashChange Event
- The hashchange event is fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the # symbol).
- You can use the hashchange event in an addEventListener method:

[window.addEventListener('hashchange', function() {
  console.log('The hash has changed!')
}, false);]

# Read 4b
## RegExr - CheatSheet

1. Character classes
- .	any character except newline
- \w\d\s	word, digit, whitespace
- \W\D\S	not word, digit, whitespace
- [abc]	any of a, b, or c
- [^abc]	not a, b, or c
- [a-g]	character between a & g

1. Anchors
- ^abc$	start / end of the string
- \b\B	word, not-word boundary

1. Escaped characters
- \.\*\\	escaped special characters
- \t\n\r	tab, linefeed, carriage return

1. Groups & Lookaround
- (abc)	capture group
- \1	backreference to group #1
- (?:abc)	non-capturing group
- (?=abc)	positive lookahead
- (?!abc)	negative lookahead

1. Quantifiers & Alternation
- a*a+a?	0 or more, 1 or more, 0 or 1
- a{5}a{2,}	exactly five, two or more
- a{1,3}	between one & three
- a+?a{2,}?	match as few as possible
- ab|cd	match ab or cd

## RegEx Tutorial

1. Regular expressions (regex or regexp) are extremely useful in extracting information from any text by searching for one or more matches of a specific search pattern (i.e. a specific sequence of ASCII or unicode characters).

1. Fields of application range from validation to parsing/replacing strings, passing through translating data to other formats and web scraping.

1. Basic topics Anchors — ^ and $ Quantifiers — * + ? and {} OR operator — | or [] Character classes — \d \w \s and . Use the . operator carefully since often class or negated character class (which we’ll cover next) are faster and more precise. Flags

-  g (global) does not return after the first match, restarting the subsequent searches from the end of the previous match
- m (multi-line) when enabled ^ and $ will match the start and end of a line, instead of the whole string
- i (insensitive) makes the whole expression case-insensitive (for instance /aBc/i would match AbC)

1. Intermediate topics Grouping and capturing — () This operator is very useful when we need to extract information from strings or data using your preferred programming language. Any multiple occurrences captured by several groups will be exposed in the form of a classical array: we will access their values specifying using an index on the result of the match.

1. Bracket expressions — [] Remember that inside bracket expressions all special characters (including the backslash ) lose their special powers: thus we will not apply the “escape rule”.

1. Advanced Topics Boundaries — \b and \B \b represents an anchor like caret (it is similar to $ and ^) matching positions where one side is a word character (like \w) and the other side is not a word character (for instance it may be the beginning of the string or a space character).

1. Back-references — \1 Look-ahead and Look-behind — (?=) and (?<=)

## RegEx 101.com
- This website allows you to insert a regular expression into an input field and to insert a test string as well

# Read 4c
## On Callbacks and Promises
1. JavaScript is synchronous by default, and is single threaded. This means that code cannot create new threads and run in parallel. Computers are asynchronous by design. Asynchronous means that things can happen independently of the main program flow. But JavaScript was born inside the browser, its main job, in the beginning, was to respond to user actions, like onClick, onMouseOver, onChange, onSubmit and so on. The browser provides a way to do it by providing a set of APIs that can handle this kind of functionality.

1. You can’t know when a user is going to click a button, so what you do is, you define an event handler for the click event. This event handler accepts a function, which will be called when the event is triggered: This is the so-called callback.

1. A callback is a simple function that’s passed as a value to another function, and will only be executed when the event happens.

1. How do you handle errors with callbacks? One very common strategy is to use what Node.js adopted: the first parameter in any callback function is the error object: error-first callbacks

## MDN on Asynchronous

1. In this module we take a look at asynchronous JavaScript, why it is important, and how it can be used to effectively handle potential blocking operations such as fetching resources from a server.

## Promises

1. A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.

1. Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

1. Guarantees Unlike old-fashioned passed-in callbacks, a promise comes with some guarantees: - Callbacks will never be called before the completion of the current run of the JavaScript event loop. - Callbacks added with then(), as above, will be called even after the success or failure of the asynchronous operation. - Multiple callbacks may be added by calling then() several times. Each callback is executed one after another, in the order in which they were inserted. - One of the great things about using promises is chaining.

1. Chaining A common need is to execute two or more asynchronous operations back to back, where each subsequent operation starts when the previous operation succeeds, with the result from the previous step. We accomplish this by creating a promise chain.

1. Promise rejection events Whenever a promise is rejected, one of two events is sent to the global scope (generally, this is either the window or, if being used in a web worker, it's the Worker or other worker-based interface).

1. Creating a Promise around an old callback API A Promise can be created from scratch using its constructor. This should be needed only to wrap old APIs.

1. Composition Promise.resolve() and Promise.reject() are shortcuts to manually create an already resolved or rejected promise respectively. This can be useful at times. Promise.all() and Promise.race() are two composition tools for running asynchronous operations in parallel.

1. Timing To avoid surprises, functions passed to then() will never be called synchronously.

1. Nesting Simple promise chains are best kept flat without nesting, as nesting can be a result of careless composition

## Promises in 20 minutes

1. JavaScript is a single-threaded language, which means that it can only do one thing at a time.

1. The A+ specification defines a promise this way: A promise represents the eventual result of an asynchronous operation. The primary way of interaction with a promise is through its then method, which registers callbacks to receive either a promise’s eventual value or the reason why the promise cannot be fulfilled.

1. A promise is basically a container for an asynchronous action — what this tells us is that, at a minimum, promises have to give us everything in terms of capability that vanilla async callbacks give us, because a promise is something that is taking a vanilla async callback and putting it into a format that will be less heinous to actually implement.

1. Promises don’t rely on anything other than basic JavaScript.

1. A promise takes an executor.

1. A promise has an internal state (which we cannot access or alter directly). Every promise starts out having a state of “pending.” Only once, in it’s whole “lifespan” can it change.

1. A promise has a value. This value in a success case will be the data we want, or an error (or a “reason”) if things go wrong.

1. Finally, for a promise to be a promise, it has to have access to a “then” method (and we’re going to talk about this in more depth in a sec).

1. There are two main ways we’ll encounter promises in the wild. In JavaScript, we do have access to the promise constructor, so we can instantiate a new Promise, and pass it our executor and callbacks ourselves.

1. By passing this array to the JavaScript Promise’s all method, we will return a single promise that will either resolve when every promise has resolved, or reject with the reason of the first value in the array that reject.

## Google develpoer on Promises

1. The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

1. Fetch provides a better alternative that can be easily used by other technologies such as Service Workers.

1. The fetch specification differs from jQuery.ajax() in three main ways: - The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with ok status set to false), and it will only reject on network failure or if anything prevented the request from completing. - fetch() won't can receive cross-site cookies; you can’t can establish a cross site session using fetch. Set-Cookie headers from other sites are silently ignored. - fetch won’t send cookies, unless you set the credentials init option. (Since Aug 25, 2017. The spec changed the default credentials policy to same-origin. Firefox changed since 61.0b13.)

1. The fetch() method can optionally accept a second parameter, an init object that allows you to control a number of different settings:

1. To cause browsers to send a request with credentials included, even for a cross-origin call, add credentials: 'include' to the init object you pass to the fetch() method.

## Fetching Data

1. fetch() is not the only way JS can deal with data from servers, but it might be the easiest.

- fetch() makes network request to a url and returns a promise.
- That promise resolves with a response object when the remote server responds with headers.
- To read the response body, we have to call a response method on it, like text() or json(), which will return another promise whose resolve value is the body of the response.
fetch() creates a promise that resolves with a response object.

1. Our apps would hardly be dynamic if they could only read data, so fetch() can take a second argument, a request. You simply pass in an object to fetch() that specifies the type of request you want to make, along with the headers and body and whatever else you need.

1. fetch() can go to any url, including your own server. To visit your site’s own files, just give a relative path name instead of a URL.