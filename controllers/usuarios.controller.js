const {Usuarios} = require('../models/usuarios.models');

async function nuevoUsuario(req, res){
    const body = req.body;

    if(body.nom && body.ape && body.email && body.contra){
        try{
            const usuario = await Usuarios({
                nombre: body.nom,
                apellido: body.ape,
                email: body.email,
                contraseña: body.contra
            }).save();

            if(usuario) {
                res.json({
                    'data': usuario
                });
            } else {
                res.status(500).send("ERROR GUARDANDO EL USUARIO.")
            }

        }catch(err){
            console.log(err);
            res.status(500).send("ERROR GUARDANDO EL USUARIO.")
        }
    } else {
        res.status(402).send("PARAMETROS ERRONEOS")
    }
};

/**
 * Función que muestra una lista de usuarios.
 */
async function usuariosList(req, res){
    try{
        const list = await Usuarios.find({});
        if(list){
            res.json({
                'data': list
            });
        } else {
            res.json({
                'data': {}
            });
        }
    }catch(err){
        console.log(err);
        res.json({
            'data': {}
        });
    }
};

module.exports = {
    nuevoUsuario,
    usuariosList
};