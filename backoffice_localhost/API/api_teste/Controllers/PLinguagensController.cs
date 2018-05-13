using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using api_teste.Models;
using api_teste.ViewModels;
using System.Web.Http.Cors;

namespace api_teste.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PLinguagensController : ApiController
    {
        DataClasses1DataContext db = new DataClasses1DataContext();

        public List<PLinguagensVM> Get()
        {
            List<PLinguagensVM> precos = new List<PLinguagensVM>();
            List<preco> aux = db.precos.ToList();


            foreach (var item in aux)
            {
                PLinguagensVM a = new PLinguagensVM();

                a.IdLinguagem1 = item.id_ling_origem;
                a.Linguagem1 = item.Linguagem1.Linguagem1;
                a.IdLinguagem2 = item.id_ling_final;
                a.Linguagem2 = item.Linguagem.Linguagem1;
                a.Valor = item.valor.ToString();

                precos.Add(a);
            }

            return precos;
        }

    }
}
