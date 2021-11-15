// Para realizar llamadas a la API
import axios from "axios";

// Para mostrar alertas.
import Swal from "sweetalert2";

// Colores aleatorios.
import randomColor from "randomcolor";

// Mejor manipulacion de fechas.
import moment from 'moment';
import 'moment/locale/es';

const querry = async (
    fecha,
    conteoReportesMerma,
    conteoReportesSalida,
    conteoReportesEntrada,
    setConteoReportes,
    setConteoReportesMerma,
    setConteoReportesSalida,
    setConteoReportesEntrada,
    setDataSetTipoReporte,
) => {
    var fechaReporte;
    var conteo;

    const reportesResult = await axios({
        method: 'get',
        url: 'http://localhost:3001/api/reportes/porFecha/',
        params: {
            fecha: fecha,
        },
    });
    conteo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (var reporte of reportesResult.data.datos) {
        fechaReporte = moment(reporte.fecha);
        conteo[fechaReporte.month()] += 1;
    }
    setConteoReportes(conteo);

    const reportesResultMerma = await axios({
        method: 'get',
        url: 'http://localhost:3001/api/reportes/porFecha/',
        params: {
            fecha: fecha,
            tipo: 'merma'
        },
    });
    conteo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (var reporte of reportesResultMerma.data.datos) {
        fechaReporte = moment(reporte.fecha);
        conteo[fechaReporte.month()] += 1;
    }
    setConteoReportesMerma(conteo);

    const reportesResultSalida = await axios({
        method: 'get',
        url: 'http://localhost:3001/api/reportes/porFecha/',
        params: {
            fecha: fecha,
            tipo: 'salida'
        },
    });
    conteo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (var reporte of reportesResultSalida.data.datos) {
        fechaReporte = moment(reporte.fecha);
        conteo[fechaReporte.month()] += 1;
    }
    setConteoReportesSalida(conteo);

    const reportesResultEntrada = await axios({
        method: 'get',
        url: 'http://localhost:3001/api/reportes/porFecha/',
        params: {
            fecha: fecha,
            tipo: 'entrada'
        },
    });
    conteo = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (var reporte of reportesResultEntrada.data.datos) {
        fechaReporte = moment(reporte.fecha);
        conteo[fechaReporte.month()] += 1;
    }
    setConteoReportesEntrada(conteo);

    setDataSetTipoReporte({
        labels: [
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
        ],
        datasets: [
          {
              label: 'Reportes de merma',
              fill: false,
              lineTension: 0.3,
              backgroundColor: '#d4ef4a',
              borderColor: '#d4ef4a',
              borderWidth: 2,
              pointBackgroundColor: '#d4ef4a',
              pointHoverRadius: 3,
              pointHoverBorderWidth: 1,
              pointRadius: 1,
              pointHitRadius: 10,
              data: conteoReportesMerma,
          },
          {
              label: 'Reportes de salida',
              fill: false,
              lineTension: 0.3,
              backgroundColor: '#f7d2ad',
              borderColor: '#f7d2ad',
              borderWidth: 2,
              pointBackgroundColor: '#f7d2ad',
              pointHoverRadius: 3,
              pointHoverBorderWidth: 1,
              pointRadius: 1,
              pointHitRadius: 10,
              data: conteoReportesSalida,
          },
          {
              label: 'Reportes de entrada',
              fill: false,
              lineTension: 0.3,
              backgroundColor: '#6937f2',
              borderColor: '#6937f2',
              borderWidth: 2,
              pointBackgroundColor: '#6937f2',
              pointHoverRadius: 3,
              pointHoverBorderWidth: 1,
              pointRadius: 1,
              pointHitRadius: 10,
              data: conteoReportesEntrada,
          },
        ],
    });
};

export {
    querry,
};
