// 

const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2')

const app = express()

const port = process.env.PORT || 3000

const sql = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: 3306
})

var precoSalgada = 0
var precoDoce = 0
var precoBebida = 0

sql.query('use pizzabyte')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + 'public/index.html')
})

app.get('/cardapio', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/cardapio.html'))
})

app.get('/pedido.html', (req, res) => {
  res.sendFile(__dirname + '/pedido.html')
})

app.get('/salgada', (req, res) => {
  res.sendFile(__dirname + '/public/salgada.html')
})

app.get('/doce', (req, res) => {
  res.sendFile(__dirname + '/public/doce.html')
})

app.get('/bebida', (req, res) => {
  res.sendFile(__dirname + '/public/bebida.html')
})

app.get('/confirma', (req, res) => {
  res.sendFile(__dirname + '/public/confirma.html')
  sql.query ('select * from pizzaSalgada', (err,results,fields) => {
    res.json(results)
    var tabela = '';
    tabela += `<table>`
    tabela += `<tr><td>idSalgada</td><td>sabor1</td><td>sabor2</td><td>sabor3</td><td>sabor4</td><td>bordaSalgada</td><td>preco</td></tr>`
    for(var x in results) {
      tabela += `<tr><td>${results[x].idSalgada}</td><td>${results[x].sabor1}</td><td>${results[x].sabor2}</td><td>${results[x].sabor3}</td><td>${results[x].sabor4}</td><td>${results[x].borda}</td><td>${results[x].preco}</td></tr>`
    }
    tabela += `</table>`
    console.log(results)
  })
  sql.query ('select * from pizzaDoce', (err,results,fields) => {
    res.json(results)
    var tabela = '';
    tabela += `<table>`
    tabela += `<tr><td>idDoce</td><td>sabor1</td><td>sabor2</td><td>sabor3</td><td>sabor4</td><td>bordaDoce</td><td>preco</td></tr>`
    for(var x in results) {
      tabela += `<tr><td>${results[x].idDoce}</td><td>${results[x].sabor1}</td><td>${results[x].sabor2}</td><td>${results[x].sabor3}</td><td>${results[x].sabor4}</td><td>${results[x].borda}</td><td>${results[x].preco}</td></tr>`
    }
    tabela += `</table>`
    console.log(results)
  })
  sql.query('select * from bebida', (err,results,fields) => {
    res.json(results)
    var tabela = '';
    tabela += `<table>`
    tabela += `<tr><td>idBebida</td><td>nome</td><td>tamanho</td><td>preco</td></tr>`
    for(var x in results) {
      tabela += `<tr><td>${results[x].idBebida}</td><td>${results[x].nome}</td><td>${results[x].tamanho}</td><td>${results[x].preco}</td></tr>`
    }
    tabela += `</table>`
  })

})

app.get('/final.html', (req, res) => {
  res.sendFile(__dirname + '/final.html')
})

app.post('/salgada', (req, res) => {
  precoSalgada = 0;
  let tamanhoSalgada = req.body.tamanhoSalgada
  let bordaSalgada = req.body.bordaSalgada
  
  if (tamanhoSalgada == 'p') {
    precoSalgada += 44.9
  } else if (tamanhoSalgada == 'm') {
    precoSalgada += 74.9
  } else if (tamanhoSalgada == 'g') {
    precoSalgada += 94.9
  } else if (tamanhoSalgada == 'gg') {
    precoSalgada += 124.9
  }
  
  if (bordaSalgada == 'sim') {
    precoSalgada += 8.9
  }
  
  precoSalgada = precoSalgada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 

  if (tamanhoSalgada != 'nenhuma') {
      sql.query('insert into pizzaSalgada (tamanho, borda, sabor1, sabor2, sabor3, sabor4, preco) values(?,?,?,?,?,?,?)',
      [tamanhoSalgada, bordaSalgada, req.body.sabor1, req.body.sabor2, req.body.sabor3, req.body.sabor4, precoSalgada]);
  }

  res.redirect('/doce')
});

app.post('/doce', (req, res) => {
  precoDoce = 0
  let tamanhoDoce = req.body.tamanhoDoce
  let bordaDoce = req.body.bordaDoce

  if (tamanhoDoce == 'p') {
    precoDoce += 44.9
  } else if (tamanhoDoce == 'm') {
    precoDoce += 74.9
  } else if (tamanhoDoce == 'g') {
    precoDoce += 94.9
  } else if (tamanhoDoce == 'gg') {
    precoDoce += 124.9
  }

  if (bordaDoce == 'sim') {
    precoDoce += 8.9
  }

  console.log(precoDoce)

  precoDoce = precoDoce.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); 
  console.log(req.body, precoDoce)

  if (tamanhoDoce != 'nenhuma') {
      sql.query('insert into pizzaDoce (tamanho, borda, sabor1, sabor2, sabor3, sabor4, preco) values(?,?,?,?,?,?,?)',
      [tamanhoDoce, bordaDoce, req.body.sabor1, req.body.sabor2, req.body.sabor3, req.body.sabor4, precoDoce]);
  }

  res.redirect('/bebida')
});

app.post('/bebida', (req,res) => {
  let opcaoAlcoolica = req.body.alcoolica
  let tamanhoAlcoolica = req.body.tamanhoAlcoolica
  
  if (tamanhoAlcoolica == 'long') {
    precoBebida += 11.9
  }

  if (opcaoAlcoolica != 'nenhuma') {
    sql.query('insert into bebida (nome, tamanho, preco) values (?,?,?)',
    [opcaoAlcoolica, tamanhoAlcoolica, precoBebida])
  }
  console.log(req.body)

  let opcaoSoft = req.body.soft
  let tamanhoSoft = req.body.tamanhoSoft

  if (opcaoSoft != 'nenhuma') {
    
    precoBebida = 0

    if (tamanhoSoft == '2l') {
    precoBebida += 12.9
  } else if (tamanhoSoft == '600') {
    precoBebida += 8.9
  } else if (tamanhoSoft == 'lata') {
    precoBebida += 5.9
  }
    sql.query('insert into bebida (nome, tamanho, preco) values (?,?,?)',
    [opcaoSoft, tamanhoSoft, precoBebida])
  }

  console.log(req.body)
  res.redirect('/confirma')
})

app.listen(port, () => {
  console.log(`Peça sua pizza já na porta ${port}!`)
})
