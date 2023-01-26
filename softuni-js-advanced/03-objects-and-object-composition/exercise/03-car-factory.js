function carFactory(existing) {
    const storage = {
        engines: {
            small: { power: 90, volume: 1800 },
            normal: { power: 120, volume: 2400 },
            monster: { power: 200, volume: 3500 },
        },
        carriages: {
            hatchback: { type: 'hatchback', color: "<as required>" },
            coupe: { type: 'coupe', color: "<as required>" },
        },
    };

    class Car {
        constructor(input) {
            this.model = input.model;
            this.engine = this.useEngine(input);
            this.carriage = this.useCarriage(input);
            this.wheels = this.useWheels(input);
        }
        useEngine(input) {
            if (input.power > 120) {
                return { power: 200, volume: 3500 };
            } else if (input.power > 90) {
                return { power: 120, volume: 2400 };
            } else {
                return { power: 90, volume: 1800 };
            }
        }
        useCarriage(input) {
            return { type: input.carriage, color: input.color, };
        }
        useWheels(input) {
            let wheel = Number(input.wheelsize);
            if (wheel % 2 == 0) {
                wheel--;
            }
            return [wheel, wheel, wheel, wheel];
        }
    }

    let final = new Car(existing);
    // console.log(final);
    return final;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});