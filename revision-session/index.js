console.log("Hello World");
function getData(url){{
    data = fetch(url).then(function(response)
    return response.json();
}).then(function(jsonBody)){
    console.log(jsonBody)
    return jsonBody;
}
    // console.log(fetch(url));
    // console.log(fetch(url));
}

url = "https://fakestoreapi.com/products/l";
getData(url);