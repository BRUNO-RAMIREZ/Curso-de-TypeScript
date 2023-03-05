(() => {
    const batman: string = "Batman";
    const linternaVerde: string = 'Linterna Verde';
    const hulk: string = `Hulk`;

    console.log({batman, linternaVerde, hulk})

    const typeString: string = 'I ém, a STRING a ';

    const tamanioCadena = typeString.length;
    const transformarAMayuscula: string = typeString.toUpperCase();
    const transformarAMinuscula: string = typeString.toLowerCase();
    const concatenacion: string = typeString.concat(' !!!');
    const caracter: string = typeString.charAt(0);
    const unicodeCaracter: number = typeString.charCodeAt(2); // e
    const codePoint: number | undefined = typeString.codePointAt(2); // é
    const empiezaCon = typeString.startsWith("I ém", 0);
    const terminaCon: boolean = typeString.endsWith("STRING");
    const terminaConSTR: boolean = typeString.endsWith("STR", 11); // Hasta la pos 10
    const buscaLaSubCadenaDesdeLaPosIndicada: boolean = typeString.includes("string".toUpperCase(), 8);
    const devuelveElIndexDeLaPrimeraOcurrenciaYBuscaDesdeEsaPos: number = typeString.indexOf("a", 1);
    const devuelveElIndexDeLaUltimaOcurrenciaYBuscaDesdeEsaPos: number = typeString.lastIndexOf("I");
    const repetirNVecesLaCadena: string = typeString.repeat(3);
    const eliminarEspaciosBlancosPrincipioYFinal: string = typeString.trim();
    const arregloStrings: string[] = typeString.split(",");
    const valorDeLaCadenaEnPrimitivo: string = typeString.valueOf(); // Devolvera 'I ém, a STRING '
    const desdeLaPosCeroHastaLaPosCuatro: string = typeString.substring(0, 4);
    const nuevaCadenaYNoAlteraLaPrimera: string = typeString.slice(2,4);
    const reemplazaLaPrimeraOcurrenciaPorUnaNuevaCadena = typeString.replace("a", "x");
    console.log({
        tamanioCadena,
        transformarAMayuscula,
        transformarAMinuscula,
        concatenacion,
        caracter,
        unicodeCaracter,
        codePoint,
        empiezaCon,
        terminaCon,
        terminaConSTR,
        buscaLaSubCadenaDesdeLaPosIndicada,
        devuelveElIndexDeLaPrimeraOcurrenciaYBuscaDesdeEsaPos,
        devuelveElIndexDeLaUltimaOcurrenciaYBuscaDesdeEsaPos,
        repetirNVecesLaCadena,
        eliminarEspaciosBlancosPrincipioYFinal,
        arregloStrings,
        valorDeLaCadenaEnPrimitivo,
        desdeLaPosCeroHastaLaPosCuatro,
        nuevaCadenaYNoAlteraLaPrimera,
        reemplazaLaPrimeraOcurrenciaPorUnaNuevaCadena
    });
})()