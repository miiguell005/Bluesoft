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
using Bluesoft.Web.Modulos.Empleados;
using Bluesoft.Web.Negocio;

namespace Bluesoft.Web.Controllers
{
    public class EmpleadosController : ApiController
    {
        EmpleadosModulo modulo = new EmpleadosModulo();

        /// <summary>
        /// Consulta todos los empleados
        /// </summary>
        /// <returns></returns>
        [Route("api/Empleados")]
        public IQueryable<Empleado> GetEmpleado()
        {
            return modulo.GetEmpleado();
        }

        /// <summary>
        /// Consulta un empleado en especial
        /// </summary>
        /// <returns></returns>
        [Route("api/Empleados/{id}")]
        public Empleado GetEmpleado(int id)
        {
            if (id == 0)
                throw new Exception("El id del empleado no puede ser 0");

            return modulo.GetEmpleado(id);
        }


        /// <summary>
        /// Crea o edita un empleado
        /// </summary>
        /// <param name="empleado"></param>
        /// <returns></returns>
        [Route("api/Empleados")]
        public Empleado PostEmpleado(Empleado empleado)
        {
            if (empleado.IdEmpleado == 0)
                return modulo.PostEmpleado(empleado);

            else
                return modulo.PutEmpleado(empleado);
        }

        /// <summary>
        /// Elimina un empleado
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("api/Empleados/{id}")]
        public Empleado DeleteEmpleado(int id)
        {
            return modulo.DeleteEmpleado(id);
        }
    }
}