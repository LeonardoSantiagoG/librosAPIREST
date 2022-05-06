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



router.post('/', (req,res,next)=>{
console.log(req.body);
var libro={
  'id':tablaLibros2[tablaLibros2.length-1]['id']+1,
 'titulo':req.body.titulo,
 'autor':req.body.autor
};
tablaLibros2.push(libro);
res.status(200).json(tablaLibros2[tablaLibros2.length-1]);
});



router.patch('/:idLibro' ,(req,res,next)=>{
  var id=req.params.idLibro;

  tablaLibros2[id-1]['titulo']=req.body.titulo;
  tablaLibros2[id-1]['autor']=req.body.autor;
  res.status(200).json({'mensaje':'actualizado'});
});



module.exports = router;
