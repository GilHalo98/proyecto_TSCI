// API de react.
import React from 'react';

// import { useTranslation } from 'react-i18next';

// Parametros del componente.
import PropTypes from 'prop-types';

// Para los markdown.
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Componentes.
import Panel from './Panel';

// title={`Reporte NO° ${datosReporte.id}`}

const CardReporte = ({
    datosReporte, productos,
    xs, sm, md, lg, xl,
}) => {
    const fecha = new Date(datosReporte.fecha);
    return (
        <Panel
            datosReporte={datosReporte}
            productos={productos}
            title={`Reporte NO° ${datosReporte.id}`}
            subhead={`Reporte tipo ${datosReporte.tipo} expedido el ${fecha.toLocaleString()}`}
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xl={xl}
        >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {datosReporte.descripcion}
            </ReactMarkdown>
        </Panel>
    );
};

CardReporte.propTypes = {
    productos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    datosReporte: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
};

CardReporte.defaultProps = {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 6,
    xl: 4,
};

export default CardReporte;
