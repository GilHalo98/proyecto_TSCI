const meses = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

const getRandomArbitrary = (minValue, maxValue) => {
  const ratio = (maxValue - minValue) + minValue;
  return Math.random() * ratio;
};

const generateRandomData = (dataLength, minDeviationValue, maxDeviationValue, minRange, maxRange) => {
  const rangeFactor = (maxRange - minRange) / dataLength;

  return Array.from({ length: dataLength }, (v, k) => (
    {
      Mes: meses[k],
      Ingreso: Math.round((k * rangeFactor) + getRandomArbitrary(minDeviationValue, maxDeviationValue)),
      amt: 2000,
    }));
};

export const datos = generateRandomData(12, -2000, 2000, -6000, 6000);

export const datos2 = generateRandomData(12, -2000, 2000, -600, 600);

export const datos3 = generateRandomData(12, -20000, 20000, -6000, 6000);
