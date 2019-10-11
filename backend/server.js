const express = require('express');
const app = express ();
const path = require('path');
const bodyParser = require ('body-parser');
const morgan = require ('morgan');
const {mongoose } =require('./database');

//setting
app.set('port',process.env.PORT || 3000); /**Indicando que use el puerto que usa el sistema operativo */

//middelwares
app.use(morgan('dev')); /**mostrar por consola lo enviado por angular , dev me indica como lo muestra por consola*/
app.use(express.json()); /**configuracion del servidor para que entienda formatos json */

//routes
app.use('/productos', require('./routes/producto-routes'));
app.use('/sucursales', require('./routes/sucursal-routes'));
app.use('/users', require('./routes/user-routes'));

//archivos estatic
app.use(express.static(path.join(__dirname, '/public/dist/catire-hot-dog'))); /**recomendable para multiplataforma */


//staring the server   //enviar todos los archivos de angular al navegador
app.listen(app.set('port'), ()=> {
    console.log(process.env.PORT);
    console.log('Server on port', app.get('port'));
});