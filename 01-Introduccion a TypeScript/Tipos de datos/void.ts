(() => {
    function methodVoid(): void {
        return;
    }

    const arrowMethod = (): void => {
        return;
    }

    const method = methodVoid();
    console.log(method);
})()