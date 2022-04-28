const express = require('express')
const places = require('./places');
var app = express()
const auth = require("./authenticateToken");
var totoro = require('totoro-node');
const { body, validationResult } = require('express-validator');

app.use(express.json())

app.use("/auth", require("./authentication"));

app.use('/', auth,totoro.rain({

    v1: {
        active: true,
        deprecated: false,
        endpoints: [
            {
                route: "/",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: places.home_v1
            },
            

            {
                route: "/places",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: places.list_v1
            },
            

            {
                route: "/places/:id",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: places.id_list_v1
            },

            {
                route: "/places/",
                method: "POST",
                active: true,
                deprecated: false,
                implementation: places.add_place_v1
            },

            {
                route: "/places/:id",
                method: "PUT",
                active: true,
                deprecated: false,
                implementation: places.modify_place_v1
            },

            {
                route: "/places/:id",
                method: "DELETE",
                active: true,
                deprecated: false,
                implementation: places.delete
            },

         
        ]
    }
    ,
    v2: {
        endpoints: [
            {
                route: "/",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: places.home_v2
            },
            

            {
                route: "/places",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: places.list_v2
            },
            

            {
                route: "/places/:id",
                method: "GET",
                active: true,
                deprecated: false,
                implementation: places.id_list_v2
            },

            {
                route: "/places",
                method: "POST",
                active: true,
                deprecated: false,
                implementation: places.add_place_id_v2w
            },

            {
                route: "/places/:id",
                method: "PUT",
                active: true,
                deprecated: false,
                implementation: places.modify_place_v2
            },

            {
                route: "/places/:id",
                method: "DELETE",
                active: true,
                deprecated: false,
                implementation: places.delete_v2
            },


        ]
    }
}));


 
app.listen(3000, () => {
    console.log("Serveur à l'écoute")
})

module.exports = app;