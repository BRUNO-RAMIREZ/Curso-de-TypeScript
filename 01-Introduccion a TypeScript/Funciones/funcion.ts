(() => {
    // CREACION DE FUNCIONES
    const hero: string = 'Flash';

    function returnName(): string {
        return hero;
    }

    const activateBatisignal = (): string => {
        return 'Bati signal';
    }

    console.log(returnName());
    console.log(typeof activateBatisignal());
    console.log(activateBatisignal());

    // PARAMETROS OBLIGATORIOS
    const fullName = (firstName: string, lastName: string): string => {
        return `${firstName} ${lastName}`;
    }

    const name = fullName('Bruno', 'Ramirez');
    console.log({name});

    // PARAMETROS OPCIONALES
    const fullNameTwo = (firstName: string, lastName?: string): string => {
        return `${firstName} ${lastName || 'empty lastName'}`
    }

    const nameTwo = fullNameTwo('Bruno');
    console.log({nameTwo});

    // PARAMETROS POR DEFECTO
    const fullNameThree = (firstName: string, lastName?: string, upper: boolean = false): string => {

        return upper ? `${firstName} ${lastName || '----'}`.toUpperCase() :
                       `${firstName} ${lastName || '----'}`;
    }

    const nameThree = fullNameThree('Bruno', 'Stark');
    console.log({nameThree});

    // PARAMETROS REST
    const fullNameFour = (firstName: string, ...args: string[]): string => {
        return `${firstName} ${args.join(' ')}`;
    }

    const superman = fullNameFour('Clark', 'Kent', 'Rilmar');
    console.log({superman});

    // TIPO FUNCION
    const addNumber = (a: number, b: number): number => a + b;
    console.log(addNumber(2,5));

    //let myFunction: Function;
    let myFunction: (y:number, z:number) => number;

    myFunction = addNumber; //Pasamos la referencia de la funcion
    console.log(myFunction(7, 5));

    // TAREA
    const sumar = (num1: number, num2: number): number => num1 + num2;

    const contar = (heroes: string[]): number => heroes.length;

    const superHeroes: string[] = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
    contar(superHeroes);

    const llamarBatman = ( llamar: boolean = false) : void => {
        if (llamar) {
            console.log('Batiseñal activada')
        }
    }

    llamarBatman();

    const unirHeroes = (...personas: string[]): string => {
        return personas.join(', ');
    }

    const noHaceNada = (numero: number, texto: string, booleano: boolean, arreglo: string[]): void => {}

    let noHaceNadaTampoco: (n: number, s: string, b: boolean, a: string[]) => void;
    noHaceNadaTampoco = noHaceNada;

})()