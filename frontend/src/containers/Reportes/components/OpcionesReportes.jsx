// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes de reactstrap.
import {
    Button, ButtonGroup,
} from 'reactstrap';

const OpcionesReportes = ({
    opcionMerma, opcionEntrada, opcionSalida,
    setOpcionMerma, setOpcionSalida, setOpcionEntrada,
}) => {
    const opciones = (seleccion) => {
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

    return (
        <ButtonGroup className="btn-group--justified">
            <Button
                color="success"
                outline
                active={opcionMerma}
                onClick={() => {
                    opciones(0);
                }}
            >
                Merma
            </Button>

            <Button
                color="success"
                outline
                active={opcionSalida}
                onClick={() => {
                    opciones(1);
                }}
            >
                Salida
            </Button>

            <Button
                color="success"
                outline
                active={opcionEntrada}
                onClick={() => {
                    opciones(2);
                }}
            >
                Entrada
            </Button>
        </ButtonGroup>
    );
};

OpcionesReportes.propTypes = {
    opcionMerma: PropTypes.bool.isRequired,
    opcionEntrada: PropTypes.bool.isRequired,
    opcionSalida: PropTypes.bool.isRequired,

    setOpcionMerma: PropTypes.func.isRequired,
    setOpcionSalida: PropTypes.func.isRequired,
    setOpcionEntrada: PropTypes.func.isRequired,
};

export default OpcionesReportes;
