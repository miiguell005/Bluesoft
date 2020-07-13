using Bluesoft.Web.Negocio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bluesoft.Web.Modulos.Empleados
{
    public class EmpleadosModulo : IDisposable
    {
        private BluesoftTecnologyEntities db = new BluesoftTecnologyEntities();
        
        public EmpleadosModulo()
        {
            db.Configuration.LazyLoadingEnabled = false;
        }

        /// <summary>
        /// Consulta todos los empleados
        /// </summary>
        /// <returns></returns>
        public IQueryable<Empleado> GetEmpleado()
        {
            return db.Empleado.Include("Cargo");
        }

        /// <summary>
        /// Consulta un empleado
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Empleado GetEmpleado(int id)
        {
            var empleado = db.Empleado.Find(id);

            if (empleado == null)
                throw new Exception($"El empleado con id {id} no ha encontrado"); 

            return empleado;
        }

        /// <summary>
        /// Edita los datos de un empleado
        /// </summary>
        /// <param name="id"></param>
        /// <param name="empleado"></param>
        /// <returns></returns>
        public Empleado PutEmpleado(Empleado empleadoDto)
        {
            var empleado = db.Empleado.Where(e => e.IdEmpleado == empleadoDto.IdEmpleado).FirstOrDefault();

            if (empleado == null)
                throw new Exception($"No se ha encontrado el usuario con el id {empleadoDto.IdEmpleado}");

            empleado.IdCargo = empleadoDto.IdCargo;
            empleado.Nombre = empleadoDto.Nombre;
            empleado.Apellido = empleadoDto.Apellido;
            empleado.NumeroDocumento = empleadoDto.NumeroDocumento;
            empleado.FechaNacimiento = empleadoDto.FechaNacimiento;
            empleado.Genero = empleadoDto.Genero;

            db.SaveChanges();

            return empleadoDto;
        }

        /// <summary>
        /// Crea un nuevo empleado
        /// </summary>
        /// <param name="empleado"></param>
        /// <returns></returns>
        public Empleado PostEmpleado(Empleado empleado)
        {
            db.Empleado.Add(empleado);

            db.SaveChanges();

            return empleado;
        }

        /// <summary>
        /// Elimina un empleado
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Empleado DeleteEmpleado(int id)
        {
            Empleado empleado = db.Empleado.Find(id);

            if (empleado == null)
                throw new Exception($"No se encontro el empleado con id {id}");

            db.Empleado.Remove(empleado);

            db.SaveChanges();

            return empleado;
        }

        public void Dispose()
        {
            db.Dispose();
        }
    }
}