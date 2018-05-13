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
    public class EditarPrecoController : ApiController
    {
        DataClasses1DataContext db = new DataClasses1DataContext();
        public HttpResponseMessage Post([FromBody] EditarPrecoVM editar)
        {
            try
            {
                int idLinguaOrigem = db.Linguagems.Single(x => x.Linguagem1 == editar.linguaOriginal).ID_Linguagem;
                int idLinguaFinal = db.Linguagems.Single(x => x.Linguagem1 == editar.linguaFinal).ID_Linguagem;

                preco lEditar = db.precos.Single(x => x.id_ling_origem == idLinguaOrigem && x.id_ling_final == idLinguaFinal);
                lEditar.valor = Convert.ToDecimal(editar.valor);

                db.SubmitChanges();
                var mensagem = Request.CreateResponse(HttpStatusCode.Accepted, editar);
                mensagem.Headers.Location = new Uri(Request.RequestUri + lEditar.id_ling_origem.ToString());
                return mensagem;
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
            

        }

    }
}
