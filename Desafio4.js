class ChatRoom {
    constructor() {
      this.usuarios = [];
    }
  
    agregarUsuario(usuario) {
      this.usuarios.push(usuario);
    }
  
    enviarMensaje(mensaje, emisor) {
      this.usuarios.forEach(user => {
        if (user !== emisor) {
          user.recibir(mensaje, emisor);
        }
      });
    }
  }
  
  class Usuario {
    constructor(nombre, chat) {
      this.nombre = nombre;
      this.chat = chat;
    }
  
    enviar(mensaje) {
      this.chat.enviarMensaje(mensaje, this);
    }
  
    recibir(mensaje, emisor) {
      console.log(`${emisor.nombre} dice: ${mensaje}`);
    }
  }
  
  // Uso
  const chat = new ChatRoom();
  
  const claudio = new Usuario("claudio", chat);
  const alejandro = new Usuario("alejandro", chat);
  
  chat.agregarUsuario(claudio);
  chat.agregarUsuario(alejandro);
  
  claudio.enviar("Hola!");
  