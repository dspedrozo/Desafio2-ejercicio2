const http = require('http');

const server = http.createServer((req,res)=>{
    //res.end('Servidor creado')

    let url = req.url;
    let method = req.method;

    if(method == 'GET'){
        if(url == '/'){
            res.writeHead(200,{'content-type':'text/html'}); 
            res.write('<h2 style="color:blue;">Hola mundo</h2>');
            res.end(); 
        } else if (url == '/fyh'){
            res.writeHead(200,{'content-type':'text/html'}); 
            res.write('<h2 style="color:blue;">LA FECHA ACTUAL ES</h2>');
            res.write(`<h3 style="color:blue;">${new Date().toLocaleString()}</h3>`);
            res.end(); 
        } else {
            res.writeHead(500,{'content-type':'text/html'}); 
            res.end(`<h2 style="color:red;">ERROR 500. Ruta <span style="color:orange;">${url}</span> no encontrado</h2>`); 
        }
    } else {
        res.writeHead(500,{'content-type':'text/html'}); 
            res.end(`<h2 style="color:red;">ERROR 500. Método <span style="color:orange;">${method}</span> no implementado</h2>`);
    }

})
const PORT = 8080;

server.listen(PORT, err => {
    if(err) return console.log(`Error en servidor: ${err}`)
    console.log(`Servidor http escuchando en el puerto ${PORT}`)
});




