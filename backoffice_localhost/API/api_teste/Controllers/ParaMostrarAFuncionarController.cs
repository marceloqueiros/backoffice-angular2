using api_teste.Models;
using api_teste.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace api_teste.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ParaMostrarAFuncionarController : ApiController
    {
        DataClasses1DataContext DB = new DataClasses1DataContext();

        //Pedido para enviar as estatisticas
        [HttpGet]
        public EstatisticasUtilizadores Get()
        {
            EstatisticasUtilizadores Esta = new EstatisticasUtilizadores();

            Esta.NovoUSegunda = 20;
            Esta.NovoUTerca = 15;
            Esta.NovoUQuarta = 33;
            Esta.NovoUQuinta = 20;
            Esta.NovoUSexta = 50;
            Esta.NovoUSabado = 20;
            Esta.NovoUDomingo = 35;          

            return Esta;
        }
    }
}
