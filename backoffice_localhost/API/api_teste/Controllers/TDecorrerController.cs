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
    public class TDecorrerController : ApiController
    {
        DataClasses1DataContext db = new DataClasses1DataContext();

        public List<TraducoesDecorrerVM> Get()
        {
            List<TraducoesDecorrerVM> traducoes = new List<TraducoesDecorrerVM>();
            List<traducao> aux = db.traducaos.Where(x => x.data_fim == null).ToList();
            

            foreach (var item in aux)
            {
                TraducoesDecorrerVM a = new TraducoesDecorrerVM();

                a.Id = item.id_traducao;
                a.Tradutor = item.Utilizador.Nome + " " + item.Utilizador.Apelido;
                a.LinguaO = item.texto.Linguagem.Linguagem1;
                a.LinguaF = item.Linguagem.Linguagem1;
                a.DataInicio = item.data_inicio.Value.Day.ToString() + "/" + item.data_inicio.Value.Month.ToString() + "/" + item.data_inicio.Value.Year.ToString();
                a.Cliente = item.texto.Utilizador.Nome + " " + item.texto.Utilizador.Apelido;

                int count = 0;
                if (!string.IsNullOrEmpty(item.texto.conteudo))
                {
                    count = item.texto.conteudo.Length - item.texto.conteudo.Replace("\n", string.Empty).Length;

                    // if the last char of the string is not a newline, make sure to count that line too
                    if (item.texto.conteudo[item.texto.conteudo.Length - 1] != '\n')
                    {
                        ++count;
                    }
                }
                a.Percentagem = ((item.N_paragrafo * 100) / count).ToString() + '%';

                traducoes.Add(a);
            }

            //string s = JsonConvert.SerializeObject(traducoes);

            return traducoes;
        }


    }
}
