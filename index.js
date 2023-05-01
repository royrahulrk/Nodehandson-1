const http = require("http");


const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.write("I AM ON HOME PAGE");
        res.write("We have two routing pages- ABOUT & CONTACT")
        res.write("Node. js (Node) is an open source, cross-platform runtime environment for executing JavaScript code")
        res.end();
    }

    else if(req.method === 'GET' && req.url === '/about'){
        res.write("ABOUT PAGE")
        res.write("Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language")
        res.end();
    }
    else if(req.method === 'GET' && req.url === '/contact'){
        res.write("CONTACT PAGE")
        res.write(JSON.stringify(["Contact",99999999,3535353535,6767676767]));
        res.end();
    }
    
});

server.listen(8000);
console.log("Listening on port 8000")