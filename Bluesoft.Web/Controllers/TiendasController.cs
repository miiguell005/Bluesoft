using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Bluesoft.Web.Modulos.Tiendas;
using Bluesoft.Web.Negocio;

namespace Bluesoft.Web.Controllers
{
    public class TiendasController : ApiController
    {

        TiendasModulo modulo = new TiendasModulo();

        /// <summary>
        /// Consulta todas las tiendas
        /// </summary>
        /// <returns></returns>
        [Route("api/Tiendas")]
        public IQueryable<Tienda> GetTienda()
        {
            return modulo.GetTienda();
        }

        /// <summary>
        /// Consulta una tienda
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("api/Tiendas/{id}")]
        public Tienda GetTienda(int id)
        {
            return modulo.GetTienda(id);
        }

        /// <summary>
        /// Crea o edita una tienda
        /// </summary>
        /// <param name="tienda"></param>
        /// <returns></returns>
        [Route("api/Tiendas")]
        public Tienda PostTienda(Tienda tienda)
        {
            if (tienda.IdTienda == 0)
                return modulo.PostTienda(tienda);

            else
                return modulo.PutTienda(tienda);
        }

        /// <summary>
        /// Elimina una tienda
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("api/Tiendas/{id}")]
        public Tienda DeleteTienda(int id)
        {
            return modulo.DeleteTienda(id);
        }

        /// <summary>
        /// Consulta todas los sitios de trabajo
        /// </summary>
        /// <returns></returns>
        [Route("api/Tiendas/Control/Sitio")]
        public dynamic GetControlSitioTrabajo(string desde = null, string hasta = null, int? idEmpleado = null, int? idCargo = null, int? idTienda = null)
        {
            DateTime? desdeF = null;
            DateTime? hastaF = null;

            if (desde != null && desde != "")
                desdeF = DateTime.Parse(desde);

            if (hasta != null && hasta != "")
                hastaF = DateTime.Parse(hasta); 

            return modulo.GetControlSitioTrabajo(desdeF, hastaF, idEmpleado, idCargo, idTienda).Select(s => new
            {
                IdControlSitioTrabajo = s.IdControlSitioTrabajo,
                s.FechaIngreso,
                NombreTienda = s.Tienda.Nombre,
                NombreEmpleado = s.Empleado.Nombre + s.Empleado.Apellido,
                Cargo = s.Empleado.Cargo.Descripcion
            }).OrderByDescending(s => s.FechaIngreso).ToArray(); ;
        }

        /// <summary>
        /// Consulta todas los sitios de trabajo
        /// </summary>
        /// <returns></returns>
        [Route("api/Tiendas/Control/Sitio/{id}")]
        public ControlSitioTrabajo GetControlSitioTrabajo(int id)
        {
            return modulo.GetControlSitioTrabajo(id);
        }

        /// <summary>
        /// Crea o edita un control sitio de trabajo
        /// </summary>
        /// <returns></returns>
        [Route("api/Tiendas/Control/Sitio")]
        public ControlSitioTrabajo PostControlSitioTrabajo(ControlSitioTrabajo sitioTrabajo)
        {
            if (sitioTrabajo.IdControlSitioTrabajo == 0)
                return modulo.PostControlSitioTrabajo(sitioTrabajo);

            else
                return modulo.PutControlSitioTrabajo(sitioTrabajo);
        }

        /// <summary>
        /// elimina un control sitio de trabajo
        /// </summary>
        /// <returns></returns>
        [Route("api/Tiendas/Control/Sitio")]
        public ControlSitioTrabajo DeleteControlSitioTrabajo(int id)
        {
            return modulo.DeleteControlSitioTrabajo(id);
        }
    }
}