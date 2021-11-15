// Modulos de React.
import React from 'react';

// Parametros del componente.
import PropTypes from 'prop-types';

// Componentes de reactstrap.
import {
    Button, ButtonGroup,
} from 'reactstrap';

// Logica del componente.
import { setSeleccion } from '../logic/FuncionesOpcionesReportes';

const OpcionesReportes = ({
    opcionMerma, opcionEntrada, opcionSalida,
    setOpcionMerma, setOpcionSalida, setOpcionEntrada,
}) => {
    return (
        <ButtonGroup className="btn-group--justified">
            <Button
                color="success"
                outline
                active={opcionMerma}
                onClick={() => {
                    setSeleccion(
                        0,
                        opcionMerma, opcionSalida, opcionEntrada,
                        setOpcionMerma, setOpcionSalida, setOpcionEntrada,
                    );
                }}
            >
                Merma
            </Button>

            <Button
                color="success"
                outline
                active={opcionSalida}
                onClick={() => {
                    setSeleccion(
                        1,
                        opcionMerma, opcionSalida, opcionEntrada,
                        setOpcionMerma, setOpcionSalida, setOpcionEntrada,
                    );
                }}
            >
                Salida
            </Button>

            <Button
                color="success"
                outline
                active={opcionEntrada}
                onClick={() => {
                    setSeleccion(
                        2,
                        opcionMerma, opcionSalida, opcionEntrada,
                        setOpcionMerma, setOpcionSalida, setOpcionEntrada,
                    );
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
