var admin=require("firebase-admin");
var keys=require("../keys.json");

admin.initializeApp({
    credential:admin.credential.cert(keys)
});
var bd=admin.firestore();
var conexionUsuarios=bd.collection("usuariosBD");
var conexionProductos=bd.collection("productosBD");

module.exports={
    conexionUsuarios,
    conexionProductos
};