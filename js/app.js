//  manejar usuarios

class UsersService {
  constructor() {
    this.users = [];
  }

  // iniciar y traer datos

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

  // nombres de los usuarios

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

  // info x nombre / user email

  mostrarInfoBasicaPorNombre() {
    try {
      const nombreIngresado = prompt('Ingresa el nombre exacto del usuario:');
      
      if (!nombreIngresado) {
        console.log('No ingresaste ningún nombre');
        return;
      }
      
      const usuario = this.users.find(u => u.name === nombreIngresado);
      
      if (!usuario) {
        console.log(`El usuario "${nombreIngresado}" no existe`);
        return;
      }
      
      console.log('INFO BASICA:');
      console.log(`Nombre: ${usuario.name}`);
      console.log(`Username: ${usuario.username}`);
      console.log(`Email: ${usuario.email}`);
      
    } catch (error) {
      console.log('Error al buscar usuario');
      console.error(error);
    }
  }

  // direccion x nombre

  mostrarDireccionPorNombre() {
    try {
      const nombreIngresado = prompt('Ingresa el nombre exacto del usuario:');
      
      if (!nombreIngresado) {
        console.log('No ingresaste ningún nombre');
        return;
      }
      
      const usuario = this.users.find(u => u.name === nombreIngresado);
      
      if (!usuario) {
        console.log(`El usuario "${nombreIngresado}" no existe`);
        return;
      }
      
      const dir = usuario.address;
      console.log(`DIRECCION DE ${usuario.name}:`);
      console.log(`Calle: ${dir.street}`);
      console.log(`Suite: ${dir.suite}`);
      console.log(`Ciudad: ${dir.city}`);
      console.log(`Codigo Postal: ${dir.zipcode}`);
      console.log('Coordenadas:');
      console.log(`  Latitud: ${dir.geo.lat}`);
      console.log(`  Longitud: ${dir.geo.lng}`);
      
    } catch (error) {
      console.log('Error al buscar dirección');
      console.error(error);
    }
  }

  // info telefono web compañia

  mostrarInfoAvanzadaPorNombre() {
    try {
      const nombreIngresado = prompt('Ingresa el nombre exacto del usuario:');
      
      if (!nombreIngresado) {
        console.log('No ingresaste ningún nombre');
        return;
      }
      
      const usuario = this.users.find(u => u.name === nombreIngresado);
      
      if (!usuario) {
        console.log(`El usuario "${nombreIngresado}" no existe`);
        return;
      }
      
      const comp = usuario.company;
      console.log(`INFO AVANZADA DE ${usuario.name}:`);
      console.log(`Telefono: ${usuario.phone}`);
      console.log(`Sitio Web: ${usuario.website}`);
      console.log('\nCOMPANIA:');
      console.log(`  Nombre: ${comp.name}`);
      console.log(`  Frase: ${comp.catchPhrase}`);
      console.log(`  BS: ${comp.bs}`);
      
    } catch (error) {
      console.log('Error al buscar información avanzada');
      console.error(error);
    }
  }

  // compañias y catch

  listarCompaniasYCatchphrase() {
    try {
      if (this.users.length === 0) {
        console.log('No hay usuarios cargados');
        return;
      }
      
      console.log('COMPANIAS Y FRASES:\n');
      this.users.forEach(user => {
        console.log(`${user.company.name}`);
        console.log(`"${user.company.catchPhrase}"\n`);
      });
      
    } catch (error) {
      console.log('Error al listar compañías');
      console.error(error);
    }
  }

  // nombresx orden alfabetico

  listarNombresOrdenados() {
    try {
      if (this.users.length === 0) {
        console.log('No hay usuarios cargados');
        return;
      }
      
      const nombresOrdenados = this.users
        .map(user => user.name)
        .sort();
      
      console.log('NOMBRES ORDENADOS ALFABETICAMENTE:\n');
      nombresOrdenados.forEach(nombre => console.log(nombre));
      
    } catch (error) {
      console.log('Error al ordenar nombres');
      console.error(error);
    }
  }
}

// cargar datos

const svc = new UsersService();

// asociar btnes

svc.init().then(() => {
  document.querySelector('#btnNombres').onclick = () => svc.listarNombres();
  document.querySelector('#btnBasica').onclick = () => svc.mostrarInfoBasicaPorNombre();
  document.querySelector('#btnDireccion').onclick = () => svc.mostrarDireccionPorNombre();
  document.querySelector('#btnAvanzada').onclick = () => svc.mostrarInfoAvanzadaPorNombre();
  document.querySelector('#btnCompanias').onclick = () => svc.listarCompaniasYCatchphrase();
  document.querySelector('#btnOrdenados').onclick = () => svc.listarNombresOrdenados();
});
