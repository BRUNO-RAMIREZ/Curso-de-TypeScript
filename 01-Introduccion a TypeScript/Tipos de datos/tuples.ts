(() => {
    const hero: [string, number, boolean] = ['Spiderman', 100, false];

    hero[0] = 'Thor';
    hero[1] = 125;
    hero[2] = true;

    console.log(hero);
})()