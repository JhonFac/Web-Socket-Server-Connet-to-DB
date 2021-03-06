import { Usuario } from './usuario';
import { Pool } from 'pg'

new Pool({
        user: "srumuhjyotqsqk",
        host: "ec2-18-204-170-75.compute-1.amazonaws.com",
        password: "3f28df075fd74623e0a76f2250e61d5068ade49337dccd73dc878cecbf20233b",
        database: "ddinpub5ps5ks",
        port: 5432
});

export class UsuariosLista{
    private lista: Usuario[] = [];

    constructor() {}
    // Agregar un usuario
    public agregar(usuario: Usuario){
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }

    // Actualizar el nombre con el ID
    public actualizarNombre(id: string, nombre: string){
        for(let usuario of this.lista){
            if(usuario.id === id){
                usuario.nombre = nombre;
                break;
            }
        }
        console.log('==== Actualizando Usuario ====');
        console.log(this.lista);
    }

    // Obtener lista de usuarios
    public getLista(){
        return this.lista.filter(usuario => usuario.nombre !== 'sin-nombre');
    }

    // Obtener un usuario
    public getUsuario(id: string){
        return this.lista.find(usuario => usuario.id === id);
    }

    // Obtener usuarios en una sala en particular
    public getUsuariosEnSala(sala: string){
        return this.lista.filter(usuario => usuario.sala === sala);
    }

    // Borrar usuario
    public borrarUsuario(id: string){
        const tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(usuario => usuario.id !== id);
        return tempUsuario;
    }
}