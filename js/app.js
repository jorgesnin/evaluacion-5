// Clase rubrica
class UsersService {
  constructor() {
    this.users = [];
  }

  // traer los datos try catch para no perder Srecargar
  async init() {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!respuesta.ok) {
        throw new Error('Error al obtener usuarios');
      }
      
      this.users = await respuesta.json();
      console.log('Usuarios cargados correctamente');
      
    } catch (error) {
      console.log('Error de conexión. Intenta más tarde.');
      console.error(error);
    }
  }

  // usuarios lista todos
  listarNombres() {
    try {
      if (this.users.length === 0) {
        console.log('No hay usuarios cargados');
        return;
      }
      
      console.log('LISTA DE NOMBRES:\n');
      this.users.forEach(user => console.log(user.name));
      
    } catch (error) {
      console.log('Error al listar nombres');
      console.error(error);
    }
  }


  // info por nombre
  mostrarInfoBasicaPorNombre() {
    
    const nombreIngresado = prompt('Ingresa el nombre exacto del usuario:');
    console.log('Metodo en desarrollo');
  }





  // direcc x nombre
  mostrarDireccionPorNombre() {
    
    console.log('Metodo en desarrollo');
  }




  // fono web compañia
  mostrarInfoAvanzadaPorNombre() {
    
  }




  // lista compañia frases
  listarCompaniasYCatchphrase() {
    
  }




  // nombres x orden alafa
  listarNombresOrdenados() {
  
    
  }
}

// cargar
const svc = new UsersService();

// eventos de btns
svc.init().then(() => {
  document.querySelector('#btnNombres').onclick = () => svc.listarNombres();
  document.querySelector('#btnBasica').onclick = () => svc.mostrarInfoBasicaPorNombre();
  document.querySelector('#btnDireccion').onclick = () => svc.mostrarDireccionPorNombre();
  document.querySelector('#btnAvanzada').onclick = () => svc.mostrarInfoAvanzadaPorNombre();
  document.querySelector('#btnCompanias').onclick = () => svc.listarCompaniasYCatchphrase();
  document.querySelector('#btnOrdenados').onclick = () => svc.listarNombresOrdenados();
});
