// AJAX :- Asynchronous Javascript And XML.

// Fetch() API:-
// The Fetch API provides a fetch() method defined on the window object, which you can use to perform requests.

// This method returns a promise that you can use to retrieve the response of the request.

fetch('https://api.covid19api.com/summary').then((apidata)=>{
    console.log(apidata);
})

