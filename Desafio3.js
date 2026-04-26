// Sistema nuevo
class SistemaNuevo {
    ejecutarPago(monto) {
      console.log(`Pago de $${monto} realizado`);
    }
  }
  
  // Adapter
  class AdaptadorPago {
    constructor(sistemaNuevo) {
      this.sistemaNuevo = sistemaNuevo;
    }
  
    pagar(monto) {
      this.sistemaNuevo.ejecutarPago(monto);
    }
  }
  
  // Función existente
  function procesarVenta(metodoPago) {
    metodoPago.pagar(1000);
  }
  
  // Uso
  const sistemaNuevo = new SistemaNuevo();
  const adaptador = new AdaptadorPago(sistemaNuevo);
  
  procesarVenta(adaptador);
  