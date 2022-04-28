const places1 = require('./data_v1.json');
const places2 = require('./data_v2.json')
const { body, validationResult } = require('express-validator');

//v1

module.exports.home_v1 = function(apiVersion, req, res){

  return res.json({ status: "success", message: "Welcome To tourism API Version 1" });


}

//affichage de la liste des endroits 

module.exports.list_v1 = function(apiVersion, req, res){

  return res.status(200).json(places1)

}

//affichage de la liste des endroits  par id


module.exports.id_list_v1 = function (apiVersion,req , res){
  const id = parseInt(req.params.id)
  const place = places1.find(place => place.id === id)
  res.status(200).json(places1)

}


// ajout d'un endroit 

module.exports.add_place_id_v1 = function (apiVersion,req,res){

  
  body('id').isDecimal({ min: 0 }),
  body('name').isAlpha(),
  body('about').isAlpha(),
  body('longitude').isFloat,
  body('latitude').isFloat,




  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions :

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }else{
    places1.push(req.body)
     return res.status(200).json(places1)
}}

//modif endroit

module.exports.modify_place_v1= function(apiVersion,req,res){

  const id = parseInt(req.params.id)
  let place = places1.find(place=> place.id === id)
  place.name =req.body.name
      place.address =req.body.address
      place.about =req.body.about
      place.latitude =req.body.latitude
      place.longitude =req.body.longitude
      res.status(200).json(place)

}



// supprimer un endroit 

module.exports.delete = function(apiVersion,req,res){

  const id = parseInt(req.params.id)
    let place = places1.find(place => place.id === id)
    places1.splice(places1.indexOf(place),1)
    res.status(200).json(places1)

}
//ERROR HANDLING

module.exports.errors = function (apiVersion,req,res){

  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`
   
  });
  
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.status = 'fail';
  err.statusCode = 404;
  
  next(err);
}
}

// v2 


module.exports.home_v2 = function(apiVersion, req, res){

  return res.json({ status: "success", message: "Welcome To tourism API Version 2" });


}

//affichage de la liste des endroits 

module.exports.list_v2 = function(apiVersion, req, res){

  return res.status(200).json(places2)

}

//affichage de la liste des endroits  par id


module.exports.id_list_v2 = function (apiVersion,req , res){
  const id = parseInt(req.params.id)
  const place = places2.find(place => place.id === id)
  res.status(200).json(places2)

}


// ajout d'un endroit 

module.exports.add_place_v2 = function (apiVersion,req,res){

  
  body('id').isDecimal({ min: 0 }),
  body('name').isAlpha(),
  body('about').isAlpha(),
  body('longitude').isFloat,
  body('latitude').isFloat,
  body('rating').isAlpha({max:4}),




  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions :

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }else{
    places1.push(req.body)
     return res.status(200).json(places2)
}}

//modif endroit

module.exports.modify_place_v2= function(apiVersion,req,res){

  const id = parseInt(req.params.id)
  let place = places2.find(place=> place.id === id)
  place.name =req.body.name
      place.address =req.body.address
      place.about =req.body.about
      place.latitude =req.body.latitude
      place.longitude =req.body.longitude
      place.rating = req.body.rating
      res.status(200).json(place)

}



// supprimer un endroit 

module.exports.delete_v2 = function(apiVersion,req,res){

  const id = parseInt(req.params.id)
    let place = places2.find(place => place.id === id)
    places2.splice(places1.indexOf(place),1)
    res.status(200).json(places2)

}
//ERROR HANDLING

module.exports.errors_v2 = function (apiVersion,req,res){

  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`
   
  });
  
  const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  err.status = 'fail';
  err.statusCode = 404;
  
  next(err);
}
}