//importaciones
import express from 'express';
import cors from 'cors';

//express
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    //funciona para hacer log nomas
    console.log(new Date().toISOString() + ' ' + req.method + ' ' + req.path);
    next();
})


//rutas
app.get('/', (req, res) => {

    res.send('Hello hola mundo');
});

app.get('/profile', (req, res) => {
    res.send('soy Acner');
});

app.get('/usuarios', (req, res) => {
    res.json([
        { name: 'Acner', age: 30, city: 'Medellin' },
        { name: 'Juan', age: 25, city: 'Bogota' },
        { name: 'Maria', age: 28, city: 'Cali' }
    ]);
});

app.get('/about/param/:id/:numero', (req, res) => {
    res.json({
        name: 'Acner',
        age: 30,
        city: 'Medellin',
        id: req.params.id,
        numero: req.params.numero,
        consulta: req.query.consulta
    });
});

export default app;
