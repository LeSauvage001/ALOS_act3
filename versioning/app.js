const express = require('express')
const places = require('./places')
const totoro = require('totoro-node')

var app = express()

app.listen('3000')

app.use('/',totoro.rain({
v1: {
active:true,
deprecated: false,
endpoints: [{
route: "/places",
method: "GET",
active:true,
deprecated: false,
implementation: places.load

}]
 },
v2:{
    active:true,
    deprecated: false,
    endpoints: [{
    route: "/places",
    method: "GET",
    active:true,
    deprecated: false,
    implementation: places.load_v2
    
    }]

}
}))