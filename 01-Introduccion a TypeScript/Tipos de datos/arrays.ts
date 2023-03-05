(() => {
    const numbers: number[] = [1, 2, 3, 4, 5];
    const numbers2: Array<Number> = [1, 2, 3, 4, 5];
    const ultimoElemento: number | undefined = numbers.pop();
    numbers.forEach((num: number) => console.log(num)); // Recorrer el arreglo
    numbers.map((num: number) => console.log(num * 2)); // Cambiar cada elemento o transformalo

})()