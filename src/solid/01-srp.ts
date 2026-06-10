interface User {
    id: number;
    name: string;
}

// Paso 1: Identificar que onAddSubscription no tiene relación directa con UserBloc.
// Extraer este método a una nueva clase independiente llamada SubscriptionBloc e instanciarla.
class SubscriptionBloc{
    onAddSubscription( subscriptionId: number ) {
        // Simula la gestión de suscripciones
        console.log('Agregando suscripción:', subscriptionId );
    }
}

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


//Paso 3: Identificar que notificar al usuario pertenece a otra capa. 
//Extraer la lógica de correo a una nueva clase genérica Mailer con un método sendEmail.
class Mailer{
    sendEmail(){
        // Simula el envio a los correos
        console.log('Enviando correo a los usuarios.');
    }
}

//Paso 4: UserBloc aún necesita coordinar el proceso. 
//Refactorizar el constructor de UserBloc para aplicar inyección de dependencias, 
// recibiendo UserService y Mailer como parámetros, permitiendo llamar a estos servicios 
// dentro de los métodos originales de UserBloc (ej. this.userService.getUser(id).
class UserBloc {
    
    constructor (
        private userService:UserService,
        private mailer:Mailer
    ) {}

    loadUser(id:number){
        this.userService.loadUser(id);
    }

    saveUser(user: User){
        this.userService.saveUser(user);
    }


    notifyUser() {
        this.mailer.sendEmail();
    }

}

// Correccion en falencias he instanciaciones
const subscriptionBloc = new SubscriptionBloc();
const userService = new UserService();
const mailer = new Mailer();

const userBloc = new UserBloc(
    userService,
    mailer
);

subscriptionBloc.onAddSubscription(1234);
userBloc.loadUser(10);
userBloc.saveUser({id: 10, name: 'Moises'});
userBloc.notifyUser();
