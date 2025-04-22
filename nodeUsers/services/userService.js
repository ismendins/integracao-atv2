const cliente = require('../config/db');

exports.getAllUsers = async (req, res) => {
    try {
        let { data } = await cliente.supabase.from('usuario').select('*');
        res.send(data);
    } catch(error) {
        console.error(error);
    }
}

exports.getOneUser = async (req, res) => {
    try {
        let { data } = await cliente.supabase.from('usuario').select('*').eq('id', req.params.id);
        res.send(data);
    } catch(error) {
        console.error(error);
    }
}

exports.postNewUser = async (req, res) => {
    try {
        const { nome, email, data_nascimento } = req.body;

        const { error, status } = await cliente.supabase.from('usuario').insert([{ nome, email, data_nascimento }]);
        res.status(201).json({message: "User was registered successfully"});
    } catch (error) {
        console.error(error)
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const { error, status } = await cliente.supabase.from('usuario').delete().eq('id', req.params.id);
        res.status(204).json({message: "User was deleted successfully"});
    } catch (error) {
        console.error(error)
    }
}