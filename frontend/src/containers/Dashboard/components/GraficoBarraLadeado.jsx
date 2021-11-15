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

const GraficoBarraLadeado = ({
  title,
  dir, themeName,
  data, keyDataBar, keyDataYAxis,
  xs, sm, md, lg, xl,
}) => (
  <Col md={md} lg={lg} xl={xl} sm={sm} xs={xs}>
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
                dataKey={keyDataYAxis}
                tickLine={false}
                verticalAnchor="start"
                orientation={dir === 'rtl' ? 'right' : 'left'}
              />
              <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
              <Bar dataKey={keyDataBar} fill="#48b5ff" barSize={12} />
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
  data: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  keyDataYAxis: PropTypes.string.isRequired,
  keyDataBar: PropTypes.string.isRequired,
  title: PropTypes.string,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

GraficoBarraLadeado.defaultProps = {
  title: '',
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
};

export default connect((state) => ({ themeName: state.theme.className }))(GraficoBarraLadeado);
