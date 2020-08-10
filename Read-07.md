# Refresher (What Google Learned from its quest to build the perfect team)

1. This is an article we read before, so this is just a refresher. 

1. The article touches on team collaboration and what it takes to be successful when working in groups. 

1. Juliia Rozovsky created a project that evaluated groups throughout Google, which included collecting surveys, conducting interviews and analyzing statistics for almost three years.

# Rest

This read is a lightly edited version of an article that was written by Ryan Tomayko and it is turned into a conversation between two brothers.

1. HTTP is the part that tells the browser what protocol to use.
    - One of the most important breakthroughs in the history of computing, because it is capable of describing the location of something anywhere in the world from anywhere in the world. It's the foundation of the web. Think of it as the GPS coordinates for knowledge and information.

1. The whole world wide web is built on an architectural style called "REST". Rest provides a definition of a "resource" which is what those things point to.

# SuperAgent

SuperAgent is light-weight progressive ajax API crafted for flexibility, readability, and a low learning curve after being frustrated with many of the existing request APIs. It also works with Node.js

1. Request Basics
    - A request can be initiated by invoking the appropriate method on the request object, then calling .then() or .end() or await to send the request.
    - HTTP method may also be passed as a string  
        request('GET', '/search').then(success, failure);
    - DELETE can be also called as .del() for compatibility with old IE where delete is a reserved word.  
    The HTTP method defaults to GET, so if you wish, the following is valid:  
    
    request('/search', (err, res) => {
    });

1. Setting header fields
    - Setting header fields is simple, invoke .set() with a field name and value  
    request

   .get('/search')  
   .set('API-Key', 'foobar')  
   .set('Accept', 'application/json')  
   .then(callback);

1. GET Requests
    - the .query() method accepts objects, which when used with the GET method will form a query-string. The following will produce the path

     /search?query=Manny&range=1..5&order=desc

1. HEAD requests
    - you can also use the .query() method for HEAD requests. The following will produce the path /users?email=joe@smith.com  

    request  
    .head('/users')  
    .query({ email: 'joe@smith.com' })  
    .then(res => {  

    });

1. Post/Put requests
    - A typical JSON POST request might look a little like the following, where we set the Content-Type header field apporopriately, and "write" some data, in this case just a JSON string.

1. Setting the content-type
    - The obvious solution is to use the .set() method.  
    request.post('/user')  
        .set('Content-Type', 'application/json')