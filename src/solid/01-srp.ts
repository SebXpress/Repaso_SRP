interface User {
    id: number;
    name: string;
}

// Esta clase viola el Principio de Responsabilidad Única (SRP)
class UserBloc {
    notifyUser() {
        // Simula el envío de notificaciones
        console.log('Enviando correo a los usuarios');
    }
}

const userBloc = new UserBloc();
userBloc.notifyUser();


// Paso 1: Identificar que onAddSubscription no tiene relación directa con UserBloc.
// Extraer este método a una nueva clase independiente llamada SubscriptionBloc e instanciarla.
class SubscriptionBloc{
    onAddSubscription( subscriptionId: number ) {
        // Simula la gestión de suscripciones
        console.log('Agregando suscripción:', subscriptionId );
    }
}

const subscriptionBloc = new SubscriptionBloc();
subscriptionBloc.onAddSubscription(1234);

// Paso 2: Identificar que cargar y guardar interactúan con la base de datos/API. 
// Extraer loadUser y saveUser a una nueva clase UserService.
class UserService{
    loadUser( id: number ) {
        // Simula la carga de un usuario
        console.log('Cargando usuario con id:', id);
    }

    saveUser( user: User ) {
        // Simula el guardado en base de datos
        console.log('Guardando en base de datos:', user );
    }
}

const useService = new UserService ();
useService.loadUser(10);
useService.saveUser({ id: 10, name: 'Fernando' });