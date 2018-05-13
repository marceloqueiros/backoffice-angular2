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

namespace API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class PrecostraducoesController : ApiController
    {
        DataClasses1DataContext db = new DataClasses1DataContext();

        public HttpResponseMessage Post([FromBody] CriarPrecoVM criarPreco)
        {
            preco novo = new preco();
            try
            {
                novo.id_ling_origem = db.Linguagems.Single(x => x.Linguagem1 == criarPreco.linguaOriginal).ID_Linguagem;
            }
            catch
            {
                Linguagem L = new Linguagem();
                L.Linguagem1 = criarPreco.linguaOriginal;
                db.Linguagems.InsertOnSubmit(L);
                db.SubmitChanges();
            }

            try
            {
                novo.id_ling_final = db.Linguagems.Single(x => x.Linguagem1 == criarPreco.linguaTraducao).ID_Linguagem;
            }
            catch
            {
                Linguagem L = new Linguagem();
                L.Linguagem1 = criarPreco.linguaTraducao;
                db.Linguagems.InsertOnSubmit(L);
                db.SubmitChanges();
            }


            try
            {
                novo.id_ling_origem = db.Linguagems.Single(x => x.Linguagem1 == criarPreco.linguaOriginal).ID_Linguagem;
                novo.id_ling_final = db.Linguagems.Single(x => x.Linguagem1 == criarPreco.linguaTraducao).ID_Linguagem;
                novo.valor = Convert.ToDecimal(criarPreco.preco);
                db.precos.InsertOnSubmit(novo);
                db.SubmitChanges();
                var mensagem = Request.CreateResponse(HttpStatusCode.Created, criarPreco);
                mensagem.Headers.Location = new Uri(Request.RequestUri + novo.id_ling_origem.ToString());
                return mensagem;
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }



    }
}