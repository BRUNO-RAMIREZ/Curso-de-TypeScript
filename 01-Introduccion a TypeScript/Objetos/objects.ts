(() => {

    type Hero = {
        name: string,
        age: number,
        powers: string[],
        getName?:() => string;
    }

    let flash: Hero = {
        name: 'Clark Kent',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    }

   let superman: Hero = {
        name: 'Barry Allen',
        age: 20,
        powers: ['Super Fuerza'],
        getName(): string {
            return this.name;
        }
    }

    console.log(flash, superman);

    type Vehiculo = {
        carroceria: string,
        modelo: string,
        antibalas: boolean,
        pasajeros: number,
        disparar?:() => void
    }

    // TASK
    const batimovil: Vehiculo = {
        carroceria: 'Negra',
        modelo: '6X6',
        antibalas: true,
        pasajeros: 4
    }

    const bumblebee: Vehiculo = {
        carroceria: 'Amarillo con negro',
        modelo: '4x2',
        antibalas: true,
        pasajeros: 4,
        disparar() {
            console.log('Disparando');
        }
    }

    type Villano = {
        nombre: string,
        edad?: number,
        mutante: boolean
    }

    const villanos: Villano[] = [
        {
            nombre: 'Lex Luthor',
            edad: 54,
            mutante: false
        },
        {
            nombre: 'Erik Magnus Lehhnsherr',
            edad: 49,
            mutante: true
        },
        {
            nombre: 'James Logan',
            edad: undefined,
            mutante: true
        }
    ]

    type Charles = {
        poder: string,
        estatura: number
    }

    const charles: Charles = {
        poder: 'psiquico',
        estatura: 1.78
    }

    type Apocalipsis = {
        lider: boolean,
        miembros: string[]
    }

    const apocalipsis: Apocalipsis = {
        lider: true,
        miembros: ['Mageneto', 'Tormenta', 'Psylocke', 'Angel']
    }

    let mystique: (Charles | Apocalipsis);

    mystique = charles;
    mystique = apocalipsis;
})()