using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using api_teste.Models;
using api_teste.ViewModels;
using Newtonsoft.Json;
using System.Web.Http.Cors;

namespace api_teste.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class TPendentesController : ApiController
    {
        DataClasses1DataContext db = new DataClasses1DataContext();

        public List<TraducoesPendentesVM> Get()
        {
            List<TraducoesPendentesVM> traducoes = new List<TraducoesPendentesVM>();
            List<texto> aux = db.textos.Where(x => DateTime.Now < x.dataPretendida).ToList();

            List<texto> final = new List<texto>();


            foreach (var item in aux)
            {
                bool Exists = db.traducaos.Any(x => x.id_texto.Equals(item.Id_texto));

                if (!Exists)
                {
                    final.Add(item);
                }
            }


            foreach (var item in final)
            {
                TraducoesPendentesVM a = new TraducoesPendentesVM();

                a.Id = item.Id_texto;
                a.Cliente = item.Utilizador.Nome + " " + item.Utilizador.Apelido;
                a.LinguaO = item.Linguagem.Linguagem1;
                a.LinguaF = item.Linguagem1.Linguagem1;
                a.DataPedido = item.data_Pedido.Value.Day.ToString() + "/" + item.data_Pedido.Value.Month.ToString() + "/" + item.data_Pedido.Value.Year.ToString();

                traducoes.Add(a);
            }

            return traducoes;
        }

    }
}
