using Bluesoft.Web.Negocio;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Bluesoft.Web.Modulos.Cargos
{
    public class CargosModulo : IDisposable
    {
        private BluesoftTecnologyEntities db = new BluesoftTecnologyEntities();

        public CargosModulo()
        {
            db.Configuration.LazyLoadingEnabled = false;
        }

        /// <summary>
        /// Consulta todos los cargos que hay en la base de datos
        /// </summary>
        /// <returns></returns>
        public IQueryable<Cargo> GetCargo()
        {
            
            return db.Cargo;
        }

        /// <summary>
        /// Busca un cargo por medio el id del cargo
        /// </summary>
        /// <param name="idCargo"></param>
        /// <returns></returns>
        public Cargo GetCargo(int idCargo)
        {
            

            Cargo cargo = db.Cargo.Find(idCargo);

            if (cargo == null)
                throw new Exception($"No se ha encontrado el cargo con Id {idCargo}");

            return cargo;
        }

        /// <summary>
        /// Edita un cargo
        /// </summary>
        /// <param name="id"></param>
        /// <param name="cargo"></param>
        /// <returns></returns>
        public Cargo PutCargo(Cargo cargoDto)
        {
            

            var cargo = db.Cargo.Where(c => c.IdCargo == cargoDto.IdCargo).FirstOrDefault();

            if (cargo == null)
                throw new Exception($"No se ha encontrado el cargo con Id {cargoDto.IdCargo}");

            cargo.Descripcion = cargoDto.Descripcion;
            cargo.Salario = cargoDto.Salario;

            db.SaveChanges();

            return cargo;
        }

        /// <summary>
        /// Crea un cargo
        /// </summary>
        /// <param name="cargo"></param>
        /// <returns></returns>
        public Cargo PostCargo(Cargo cargo)
        {
            db.Cargo.Add(cargo);

            db.SaveChanges();

            return cargo;
        }

        /// <summary>
        /// Elimina un cargo
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Cargo DeleteCargo(int id)
        {
            Cargo cargo = db.Cargo.Find(id);

            if (cargo == null)
                throw new Exception($"No se ha encontrado el cargo con Id {id}");

            db.Cargo.Remove(cargo);
            db.SaveChanges();

            return cargo;
        }

        /// <summary>
        /// 
        /// </summary>
        public void Dispose()
        {
            db.Dispose();
        }
    }
}