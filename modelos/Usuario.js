class Usuario {
    constructor(id, data) {
        this.bandera = 0;
        this.id = id;
        this.nombre = data.nombre;
        this.usuario = data.usuario;
        this.password = data.password;
        this.foto = data.foto;
        this.salt = data.salt;
    }

    set id(id) {
        if (id != null) id.length > 0 ? (this._id = id) : (this.bandera = 1);
    }

    set nombre(nombre) {
        nombre.length > 0 ? (this._nombre = nombre) : (this.bandera = 1);
    }

    set usuario(usuario) {
        usuario.length > 0 ? (this._usuario = usuario) : (this.bandera = 1);
    }

    set password(password) {
        password.length > 0 ? (this._password = password) : (this.bandera = 1);
    }

    set foto(foto) {
        foto.length > 0 ? (this._foto = foto) : (this.bandera = 1);
    }

    set salt(salt) { 
        salt.length > 0 ? (this._salt = salt) : (this.bandera = 1);
     
    }

    get id() {
        return this._id;
    }

    get nombre() {
        return this._nombre;
    }

    get usuario() {
        return this._usuario;
    }

    get password() {
        return this._password;
    }

    get foto() {
        return this._foto;
    }

    get salt() {
        return this._salt;
    }

    get obtenerDatos() {
        if (this._id != null)
            return {
                id: this.id,
                nombre: this.nombre,
                usuario: this.usuario,
                password: this.password,
                foto: this.foto,
                salt: this.salt,
            };
        else {
            return {
                nombre: this.nombre,
                usuario: this.usuario,
                password: this.password,
                foto: this.foto,
                salt: this.salt,
            };
        }
    }
}

module.exports = Usuario;