const houses = require('./db.json')
let houseId = 4
module.exports = {
getHouses: (req,res)=>
    res.status(200).send(houses)
,
deleteHouse: (req,res) => {
    let {id} = req.params

    let index = houses.findIndex(elem => +elem.id === +id)
    houses.splice(index, 1)
    res.status(200).send(houses)
    
},
createHouse: (req,res)=>{
 const {address,price,imageURL} = req.body
    let newHouse = {
        address,
        price,
        imageURL,
        id : houseId,
    }
    houses.push(newHouse)
    res.status(200).send(houses)
    houseId++
},
updateHouse: (req,res)=>{
    let {id} = req.params
    let {type} = req.body
    let index = houses.findIndex(elem => +elem.id === +id)
    if (houses[index].price <= 10000 && type === "minus"){
        houses[index].price = 0
        res.status(200).send(houses)
    } else if (type === "plus"){
        houses[index].price += 10000
        res.status(200).send(houses)
    } else if (type === "minus"){
        houses[index].price -= 10000
        res.status(200).send(houses)
    }
},
}