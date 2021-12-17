const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Gabriel Brecci'
    })
})

app.listen(3333)