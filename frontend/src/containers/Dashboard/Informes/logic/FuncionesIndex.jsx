// Para realizar llamadas a la API
import axios from "axios";

// Para mostrar alertas.
import Swal from "sweetalert2";

// Colores aleatorios.
import randomColor from "randomcolor";

const querryConteoReportes = async (
    setTotalMerma, setTotalEntrada, setTotalSalida
) => {
    const conteoMerma = await axios({
        method: 'get',
        url: 'http://localhost:3001/api/reportes/contar/',
        params: {
            busqueda: {
                tipo: 'merma',
            }
        },
    });
    setTotalMerma(conteoMerma.data.total_reportes);

    const conteoEntrada = await axios({
        method: 'get',
        url: 'http://localhost:3001/api/reportes/contar/',
        params: {
            busqueda: {
                tipo: 'entrada',
            }
        },
    });
    setTotalEntrada(conteoEntrada.data.total_reportes);

    const conteoSalida = await axios({
        method: 'get',
        url: 'http://localhost:3001/api/reportes/contar/',
        params: {
            busqueda: {
                tipo: 'salida',
            }
        },
    });
    setTotalSalida(conteoSalida.data.total_reportes);
};

const querryProductosCantidad = async (
    setListaProductos
) => {
    const productosResult = await axios({
      method: 'get',
      url: 'http://localhost:3001/api/producto/',
      params: {
          orden: [['cantidad_stock', 'DESC']],
          limit: 5,
          pagina: 1,
      },
    });
    setListaProductos(productosResult.data.datos);
};

const querryProductosProveedor = async (
    setDataPai
) => {
    const proveedoresResult = await axios({
      method: 'get',
      url: 'http://localhost:3001/api/proveedores/',
      params: {
          atributos: ['id', 'nombre']
      },
    });

    var conteoProductos = {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: [],
          hoverBackgroundColor: [],
          borderColor: 'rgba(255,255,255,0.54)',
        }],
    };
    var conteoProveedorReporte;
    var color;
    for (var proveedor of proveedoresResult.data.datos) {
        color = randomColor();
        conteoProveedorReporte = await axios({
            method: 'get',
            url: 'http://localhost:3001/api/producto/contar/',
            params: {
                busqueda: {
                    id_proveedor: proveedor.id,
                }
            },
        });

        conteoProductos.labels.push(proveedor.nombre);
        conteoProductos.datasets[0].data.push(
            conteoProveedorReporte.data.total_productos
        );

        conteoProductos.datasets[0].backgroundColor.push(color);
        conteoProductos.datasets[0].hoverBackgroundColor.push(color);
    }
    setDataPai(conteoProductos);
};

export {
  querryConteoReportes,
  querryProductosCantidad,
  querryProductosProveedor
};
