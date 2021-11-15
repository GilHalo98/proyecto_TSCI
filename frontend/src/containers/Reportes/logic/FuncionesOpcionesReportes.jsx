const setSeleccion = (
    seleccion,
    opcionMerma, opcionSalida, opcionEntrada,
    setOpcionMerma, setOpcionSalida, setOpcionEntrada,
) => {
    switch(seleccion) {
        case 0:
            setOpcionMerma(!opcionMerma);
            break;

        case 1:
            setOpcionSalida(!opcionSalida);
            break;

        case 2:
            setOpcionEntrada(!opcionEntrada);
            break;

        default:
            // En este caso, el bloque default es necesario para cumplir
            // con las normas de estilo de js.
    }
};

export {
    setSeleccion,
};
