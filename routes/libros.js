var express = require('express');
var router = express.Router();
var tablaLibros={'id':1 , 'titulo':'el perfume', 'autor':'Patrik Sûskind'};
var tablaLibros2=[
                    {'id':1 , 'Titulo':'el perfume', 'Autor':'Patrik Sûskind'},
                    {'id':2, 'Titulo':'El Hobbit', 'Autor':'Tolkien'},
                    {'id':3 , 'Titulo':'La biblia', 'Autor':'Los apostoles'}
];

router.get('/', function(req, res, next) {
  //aqui se realizaria la consulta a base de datos
  res.status(200).json(tablaLibros2);
});

router.get('/:idLibro', (req,res,next)=>{
  var id = req.params.idLibro;
  res.status(200).json(tablaLibros2[id-1]);
} );

router.post('/:idLibro',(req,res, next)=>{
  res.status(400).json({'Error': 'Operacion no permitida'});
});



module.exports = router;
