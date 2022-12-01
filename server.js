// const = constant = varabile that cannot be change once set. 
//Let = varaible that can be change
const express = require('express')
const cors = require('cors')

const app = express()

//Var = let - Do not use Var, use let. Var could cause leak code where the define value is outside a bracket structure
let corsOptions = {
    origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({ extended: true}))

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Matt Lau Test Application"})
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => [
    console.log(`Server is running on port ${PORT}`)
])
