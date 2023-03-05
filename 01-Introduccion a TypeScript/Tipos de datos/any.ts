(() => {
    let typeAny: any = 123;
    typeAny = false;
    typeAny = 'Hellow';
    console.log((typeAny as string).charAt(0));
    typeAny = 555.5056;
    console.log(<number>typeAny.toFixed(2));

})()