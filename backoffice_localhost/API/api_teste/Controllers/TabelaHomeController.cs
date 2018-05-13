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
    public class TabelaHomeController : ApiController
    {
        DataClasses1DataContext db = new DataClasses1DataContext();

        public List<TabelaDash> Get()
        {
            List<TabelaDash> tabela = new List<TabelaDash>();
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
                TabelaDash a = new TabelaDash();

                a.Cliente = item.Utilizador.Nome + " " + item.Utilizador.Apelido;
                a.LinguaO = item.Linguagem.Linguagem1;
                a.LinguaF = item.Linguagem1.Linguagem1;
                a.DataPedido = item.data_Pedido.Value.Day.ToString() + "/" + item.data_Pedido.Value.Month.ToString() + "/" + item.data_Pedido.Value.Year.ToString();

                tabela.Add(a);
            }


            return tabela.OrderByDescending(x=>x.DataPedido).Take(5).ToList();
        }
    }
}
