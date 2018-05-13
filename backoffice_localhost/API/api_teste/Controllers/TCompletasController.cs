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
    public class TCompletasController : ApiController
    {
        DataClasses1DataContext db = new DataClasses1DataContext();

        
        public List<TraducoesCompletasVM> Get()
        {
            List<TraducoesCompletasVM> traducoes = new List<TraducoesCompletasVM>();
            List<traducao> aux = db.traducaos.Where(x => x.data_fim != null).ToList();
            

            foreach(var item in aux)
            {
                TraducoesCompletasVM a = new TraducoesCompletasVM();

                a.Id = item.id_traducao;
                a.Tradutor = item.Utilizador.Nome + " " + item.Utilizador.Apelido;
                a.LinguaO = item.texto.Linguagem.Linguagem1;
                a.LinguaF = item.Linguagem.Linguagem1;
                a.DataFim = item.data_fim.Value.Day.ToString()+"/"+item.data_fim.Value.Month.ToString()+"/"+item.data_fim.Value.Year.ToString();
                a.Cliente = item.texto.Utilizador.Nome + " " + item.texto.Utilizador.Apelido;

                traducoes.Add(a);
            }

            return traducoes;
        }


        //public List<TraducoesCompletasVM> Get(string s)
        //{
        //    List<TraducoesCompletasVM> traducoes = new List<TraducoesCompletasVM>();
        //    List<traducao> aux = db.traducaos.Where(x => x.data_fim != null).ToList();
            

        //    foreach (var item in aux)
        //    {
        //        TraducoesCompletasVM a = new TraducoesCompletasVM();

        //        a.Id = item.id_traducao;
        //        a.Tradutor = item.Utilizador.Nome + " " + item.Utilizador.Apelido;
        //        a.LinguaO = item.texto.Linguagem.Linguagem1;
        //        a.LinguaF = item.Linguagem.Linguagem1;
        //        a.DataFim = item.data_fim.Value.Day.ToString() + "/" + item.data_fim.Value.Month.ToString() + "/" + item.data_fim.Value.Year.ToString();
        //        a.Cliente = item.texto.Utilizador.Nome + " " + item.texto.Utilizador.Apelido;

        //        traducoes.Add(a);
        //    }

        //    switch(s)
        //    {
        //        case "id":
        //            return traducoes.OrderByDescending(x=>x.Id).ToList();
        //        case "tradutor":
        //            return traducoes.OrderBy(x => x.Tradutor).ToList();
        //        case "linguaO":
        //            return traducoes.OrderBy(x => x.LinguaO).ToList();
        //        case "linguaF":
        //            return traducoes.OrderBy(x => x.LinguaF).ToList();
        //        case "dataF":
        //            return traducoes.OrderBy(x => x.DataFim).ToList();
        //        case "cliente":
        //            return traducoes.OrderBy(x => x.Cliente).ToList();
        //        default:
        //            return traducoes;

        //    }
        //}




    }
}
