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
    public class BuscarEstatisticasController : ApiController
    {
        DataClasses1DataContext DB = new DataClasses1DataContext();

        //Pedido para enviar as estatisticas
        [HttpGet]
        public EstatisticasUtilizadores Get()
        {
            EstatisticasUtilizadores Estatisticas = new EstatisticasUtilizadores();

            Estatisticas = CarregarDados(Estatisticas);         

            return Estatisticas;
        }              

        //Carregar os valores para a class EstatisticasUtilizadores
        private EstatisticasUtilizadores CarregarDados(EstatisticasUtilizadores Est)
        {   
            //Dias em causa
            DateTime SegundaF;
            DateTime TercaF;
            DateTime QuartaF;
            DateTime QuintaF;
            DateTime SextaF;
            DateTime SabadoF;
            DateTime DomingoF;

            //Dia de hoje
            String DiaDeHoje = System.DateTime.Now.DayOfWeek.ToString();

            //Calcular os dias
            switch (DiaDeHoje)
            {
                case "Monday":
                    SegundaF = DateTime.Now;
                    TercaF = DateTime.Now.AddDays(-6);
                    QuartaF = DateTime.Now.AddDays(-5);
                    QuintaF = DateTime.Now.AddDays(-4);
                    SextaF = DateTime.Now.AddDays(-3);
                    SabadoF = DateTime.Now.AddDays(-2);
                    DomingoF = DateTime.Now.AddDays(-1);
                    break;

                case "Tuesday":
                    SegundaF = DateTime.Now.AddDays(-1);
                    TercaF = DateTime.Now;
                    QuartaF = DateTime.Now.AddDays(-6);
                    QuintaF = DateTime.Now.AddDays(-5);
                    SextaF = DateTime.Now.AddDays(-4);
                    SabadoF = DateTime.Now.AddDays(-3);
                    DomingoF = DateTime.Now.AddDays(-2);
                    break;

                case "Wednesday":
                    SegundaF = DateTime.Now.AddDays(-2);
                    TercaF = DateTime.Now.AddDays(-1);
                    QuartaF = DateTime.Now;
                    QuintaF = DateTime.Now.AddDays(-6);
                    SextaF = DateTime.Now.AddDays(-5);
                    SabadoF = DateTime.Now.AddDays(-4);
                    DomingoF = DateTime.Now.AddDays(-3);
                    break;

                case "Thursday":
                    SegundaF = DateTime.Now.AddDays(-3);
                    TercaF = DateTime.Now.AddDays(-2);
                    QuartaF = DateTime.Now.AddDays(-1);
                    QuintaF = DateTime.Now;
                    SextaF = DateTime.Now.AddDays(-6);
                    SabadoF = DateTime.Now.AddDays(-5);
                    DomingoF = DateTime.Now.AddDays(-4);
                    break;

                case "Friday":
                    SegundaF = DateTime.Now.AddDays(-4);
                    TercaF = DateTime.Now.AddDays(-3);
                    QuartaF = DateTime.Now.AddDays(-2);
                    QuintaF = DateTime.Now.AddDays(-1);
                    SextaF = DateTime.Now;
                    SabadoF = DateTime.Now.AddDays(-6);
                    DomingoF = DateTime.Now.AddDays(-5);
                    break;

                case "Saturday":
                    SegundaF = DateTime.Now.AddDays(-5);
                    TercaF = DateTime.Now.AddDays(-4);
                    QuartaF = DateTime.Now.AddDays(-3);
                    QuintaF = DateTime.Now.AddDays(-2);
                    SextaF = DateTime.Now.AddDays(-1);
                    SabadoF = DateTime.Now;
                    DomingoF = DateTime.Now.AddDays(-6);
                    break;

                case "Sunday":
                    SegundaF = DateTime.Now.AddDays(-6);
                    TercaF = DateTime.Now.AddDays(-5);
                    QuartaF = DateTime.Now.AddDays(-4);
                    QuintaF = DateTime.Now.AddDays(-3);
                    SextaF = DateTime.Now.AddDays(-2);
                    SabadoF = DateTime.Now.AddDays(-1);
                    DomingoF = DateTime.Now;
                    break;

                default:
                    return null;
            }

            //Calcular o numero de novos utilizadores nos dias em causa
            foreach (Utilizador UserX in DB.Utilizadors)
            {
                //Novos Utilizadores
                if (UserX.DataCriacao.Date == SegundaF.Date)
                    Est.NovoUSegunda++;

                if (UserX.DataCriacao.Date == TercaF.Date)
                    Est.NovoUTerca++;

                if (UserX.DataCriacao.Date == QuartaF.Date)
                    Est.NovoUQuarta++;

                if (UserX.DataCriacao.Date == QuintaF.Date)
                    Est.NovoUQuinta++;

                if (UserX.DataCriacao.Date == SextaF.Date)
                    Est.NovoUSexta++;

                if (UserX.DataCriacao.Date == SabadoF.Date)
                    Est.NovoUSabado++;

                if (UserX.DataCriacao.Date == DomingoF.Date)
                    Est.NovoUDomingo++;

            }

            //Calcular maximo para os novos utilizadores
            if (Est.NovoUSegunda > Est.MaxNovos)
                Est.MaxNovos = Est.NovoUSegunda;

            if (Est.NovoUTerca > Est.MaxNovos)
                Est.MaxNovos = Est.NovoUTerca;

            if (Est.NovoUQuarta > Est.MaxNovos)
                Est.MaxNovos = Est.NovoUQuarta;

            if (Est.NovoUQuinta > Est.MaxNovos)
                Est.MaxNovos = Est.NovoUQuinta;

            if (Est.NovoUSexta > Est.MaxNovos)
                Est.MaxNovos = Est.NovoUSexta;

            if (Est.NovoUSabado > Est.MaxNovos)
                Est.MaxNovos = Est.NovoUSabado;

            if (Est.NovoUDomingo > Est.MaxNovos)
                Est.MaxNovos = Est.NovoUDomingo;

            Est.MaxNovos = Est.MaxNovos + 3;

            return Est;

        }               

    }
}