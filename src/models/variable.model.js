const mongoose = require("mongoose");
const VariableSchema = mongoose.Schema(
  {
    nombre_dispositivo: {
      type: String,
      required: false,
    },
    medicion: {
      type: Object,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Variable", VariableSchema);
