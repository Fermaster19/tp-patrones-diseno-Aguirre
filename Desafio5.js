// Modelo (datos)
class UsuarioModel {
    constructor() {
      this.usuarios = ["Claudio", "Julieta", "Cristhian"];
    }
  
    obtenerUsuarios() {
      return this.usuarios;
    }
  }
  
  // Lógica (filtro)
  class UsuarioService {
    filtrarUsuarios(usuarios, filtro) {
      return usuarios.filter(u => u.includes(filtro));
    }
  }
  
  // Vista (mostrar)
  class UsuarioView {
    mostrar(usuarios) {
      console.log("Usuarios:");
      usuarios.forEach(u => console.log(u));
    }
  }
  
  // Uso
  const model = new UsuarioModel();
  const service = new UsuarioService();
  const view = new UsuarioView();
  
  const usuarios = model.obtenerUsuarios();
  const filtrados = service.filtrarUsuarios(usuarios, "a");
  
  view.mostrar(filtrados);
  