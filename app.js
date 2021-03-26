const express = require("express");
const app = express();

const contatos = ['Jade','Kelly', 'Maria'];

//


app.use(express.json()); //Lendo e escrevendo coisas no formato Json

 
app.get("/", (req, res) => {
res.send("Olá Mundo.");
});

app.get("/testes", (req, res) => {
    res.send("Mari Teste ");
    });
 
    
app.get("/mari/:id", (req, res) => {
       const {id}= req.params.id;
       const {sit} = req.query;
       

        return res.json({ id,
        nome: "Mari",
        idade: 12,
        nome1: "Algum nome",
        sit    //POR QUE ESTÁ DANDO ERRO? 


        })});

        app.get("/maisumteste", (req, res) => {
             return res.json(contatos);
            });

        app.post("/contapost",(req,res) =>{
         const { posnome1 } =req.body;  //Se tivesse sem parêntesis ia fazer a inclusão de um novo objeto. 

         contatos.push(posnome1)

         return res.json(contatos);
         // Fazendo a inclusão de uma alocação de memória no array  deu erro
        });





// Fazendo conexão com as portas e colocando o servidor online  
app.listen(8080,() => {
console.log("Servidor online");
});