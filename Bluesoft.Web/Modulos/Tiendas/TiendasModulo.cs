using Bluesoft.Web.Negocio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bluesoft.Web.Modulos.Tiendas
{
    public class TiendasModulo : IDisposable
    {
        private BluesoftTecnologyEntities db = new BluesoftTecnologyEntities();

        /// <summary>
        /// Obtiene todas las tiendas
        /// </summary>
        /// <returns></returns>
        public IQueryable<Tienda> GetTienda()
        {
            db.Configuration.LazyLoadingEnabled = false;

            return db.Tienda;
        }

        /// <summary>
        /// Obtiene una tienda
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Tienda GetTienda(int id)
        {
            db.Configuration.LazyLoadingEnabled = false;

            Tienda tienda = db.Tienda.Find(id);

            if (tienda == null)
                throw new Exception("No se ha encontrado la tienda con id " + id);

            return tienda;
        }

        /// <summary>
        /// Edita una tienda
        /// </summary>
        /// <param name="id"></param>
        /// <param name="tienda"></param>
        /// <returns></returns>
        public Tienda PutTienda(Tienda tiendaDto)
        {
            db.Configuration.LazyLoadingEnabled = false;

            var tienda = db.Tienda.Where(t => t.IdTienda == tiendaDto.IdTienda).FirstOrDefault();

            if (tienda == null)
                throw new Exception("No se encontro la tienda con id " + tiendaDto.IdTienda);

            tienda.Direccion = tiendaDto.Direccion;
            tienda.Nombre = tiendaDto.Nombre;
            tienda.Telefono = tiendaDto.Telefono;

            db.SaveChanges();

            return tiendaDto;
        }

        /// <summary>
        /// Crea una tienda
        /// </summary>
        /// <param name="tienda"></param>
        /// <returns></returns>
        public Tienda PostTienda(Tienda tienda)
        {
            db.Tienda.Add(tienda);
            db.SaveChanges();

            return tienda;
        }

        /// <summary>
        /// Elimina una tienda
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Tienda DeleteTienda(int id)
        {
            db.Configuration.LazyLoadingEnabled = false;

            Tienda tienda = db.Tienda.Find(id);

            if (tienda == null)
                throw new Exception("No se encontro la tienda con id " + id);

            db.Tienda.Remove(tienda);
            db.SaveChanges();

            return tienda;
        }


        /// <summary>
        /// Obtiene todas los sitios trabajos
        /// </summary>
        /// <returns></returns>
        public IQueryable<ControlSitioTrabajo> GetControlSitioTrabajo(DateTime? desde = null, DateTime? hasta = null, int? idEmpleado = null, int? idCargo = null, int? idTienda = null)
        {
            var sitioTrabajo = db.ControlSitioTrabajo.Where(s => true);
            
            if (desde != null)
                sitioTrabajo = sitioTrabajo.Where(s => s.FechaIngreso >= desde);
            
            if (hasta != null)
                sitioTrabajo = sitioTrabajo.Where(s => s.FechaIngreso <= hasta);

            if (idEmpleado != null)
                sitioTrabajo = sitioTrabajo.Where(s => s.IdEmpleado == idEmpleado);

            if(idCargo != null)
                sitioTrabajo = sitioTrabajo.Where(s => s.Empleado.IdCargo == idCargo);

            if (idTienda != null)
                sitioTrabajo = sitioTrabajo.Where(s => s.IdTienda == idTienda);

            return sitioTrabajo;
        }

        /// <summary>
        /// Obtiene todas los sitios trabajos
        /// </summary>
        /// <returns></returns>
        public ControlSitioTrabajo GetControlSitioTrabajo(int id)
        {
            db.Configuration.LazyLoadingEnabled = false;

            var sitioTrabajo = db.ControlSitioTrabajo.Find(id);

            if (sitioTrabajo == null)
                throw new Exception("No se encontro el control del sitio de trabajo con id " + id);

            return sitioTrabajo;
        }


        /// <summary>
        /// Crea un control del sitio de trabajo
        /// </summary>
        /// <returns></returns>
        public ControlSitioTrabajo PostControlSitioTrabajo(ControlSitioTrabajo controlSitioDto)
        {

            db.ControlSitioTrabajo.Add(controlSitioDto);
            db.SaveChanges();

            return controlSitioDto;
        }


        /// <summary>
        /// Crea un control del sitio de trabajo
        /// </summary>
        /// <returns></returns>
        public ControlSitioTrabajo PutControlSitioTrabajo(ControlSitioTrabajo controlSitioDto)
        {
            var controlSitio = db.ControlSitioTrabajo.Where(c => c.IdControlSitioTrabajo == controlSitioDto.IdControlSitioTrabajo)
                .FirstOrDefault();

            controlSitio.IdTienda = controlSitioDto.IdTienda;
            controlSitio.IdEmpleado = controlSitioDto.IdEmpleado;
            controlSitio.FechaIngreso = controlSitioDto.FechaIngreso;

            db.SaveChanges();

            return controlSitioDto;
        }

        /// <summary>
        /// Crea un control del sitio de trabajo
        /// </summary>
        /// <returns></returns>DeleteTienda
        public ControlSitioTrabajo DeleteControlSitioTrabajo(int id)
        {
            var controlSitio = db.ControlSitioTrabajo.Find(id);

            if (controlSitio == null)
                throw new Exception("No se encontro el control sitio de trabajo con id " + id);

            db.ControlSitioTrabajo.Remove(controlSitio);
            db.SaveChanges();

            return controlSitio;
        }

        public void Dispose()
        {
            db.Dispose();
        }
    }
}