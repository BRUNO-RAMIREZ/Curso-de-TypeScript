(() => {
    // Función que terminara con algun error
    const error = (message: string): never => {
        throw new Error(message);
    }
    error('Not Found');
    console.log("No llegara hasta esta linea de codigo");
})()