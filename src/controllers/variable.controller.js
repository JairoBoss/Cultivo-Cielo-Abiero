const Variable = require("../models/variable.model.js");

exports.create = async (req, res) => {
  try {
    const datos = req.query;

    const nombre = datos.nombre;

    delete datos.nombre;

    const newRecord = new Variable({
      nombre_dispositivo: nombre,
      medicion: datos,
    });

    const recordSaved = await newRecord.save();

    console.log(recordSaved);

    return res.status(200).send(recordSaved);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.findAll = async (req, res) => {
  try {
    const data = await Variable.find();
    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
};
