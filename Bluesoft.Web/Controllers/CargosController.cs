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
using Bluesoft.Web.Modulos.Cargos;
using Bluesoft.Web.Negocio;

namespace Bluesoft.Web.Controllers
{
    public class CargosController : ApiController
    {
        CargosModulo modulo = new CargosModulo();

        /// <summary>
        /// Busca todos los cargos
        /// </summary>
        /// <returns></returns>
        [Route("api/Cargos")]
        public IQueryable<Cargo> GetCargo()
        {
            return modulo.GetCargo();
        }

        /// <summary>
        /// Busca un cargo en especial
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("api/Cargos/{id}")]
        public Cargo GetCargo(int id)
        {
            if (id == 0)
                throw new Exception("El id del cargo no puede ser 0");

            return modulo.GetCargo(id);
        }

        /// <summary>
        /// Permite crear  o editar un cargo
        /// </summary>
        /// <param name="cargo"></param>
        /// <returns></returns>
        [Route("api/Cargos")]
        public Cargo PostCargo(Cargo cargo)
        {
            //Crea un cargo
            if (cargo.IdCargo == 0)
                return modulo.PostCargo(cargo);

            //Edita un cargo
            else
                return modulo.PutCargo(cargo);            
        }

        /// <summary>
        /// Elimina un cargo
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [Route("api/Cargos/{id}")]
        public Cargo DeleteCargo(int id)
        {
            if (id == 0)
                throw new Exception("El id del cargo no puede ser 0");

            return modulo.DeleteCargo(id);
        }
        
    }
}