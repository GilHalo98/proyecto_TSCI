import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

// import { useTranslation } from 'react-i18next';

import { Card, CardBody, Col } from 'reactstrap';

import {
  Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from 'recharts';

// import Panel from '@/shared/components/Panel';
import getTooltipStyles from '../../../shared/helpers';

const data = [
  {
    usuario: 'Usuario 1', dato: 4000,
  },
  {
    usuario: 'Usuario 2', dato: 3000,
  },
  {
    usuario: 'Usuario 3', dato: 2000,
  },
  {
    usuario: 'Usuario 4', dato: 1900,
  },
  {
    usuario: 'Usuario 5', dato: 1890,
  },
];

const GraficoBarraLadeado = ({
  title,
  dir, themeName,
  md, lg, xl,
}) => (
  <Col md={md} lg={lg} xl={xl}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{title}</h5>
        </div>

        <div dir="ltr">
          <ResponsiveContainer height={300} className="dashboard__active-users-chart">
            <BarChart
              width={600}
              height={220}
              data={data}
              layout="vertical"
              barGap={0}
              barCategoryGap={0}
              stackOffset="expand"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                type="number"
                hide
                reversed={dir === 'rtl'}
              />

              <YAxis
                type="category"
                dataKey="usuario"
                tickLine={false}
                verticalAnchor="start"
                orientation={dir === 'rtl' ? 'right' : 'left'}
              />
              <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
              <Bar dataKey="dato" fill="#48b5ff" barSize={12} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  </Col>
);

GraficoBarraLadeado.propTypes = {
  dir: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
  title: PropTypes.string,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

GraficoBarraLadeado.defaultProps = {
  title: '',
  md: 12,
  lg: 12,
  xl: 6,
};

export default connect((state) => ({ themeName: state.theme.className }))(GraficoBarraLadeado);
