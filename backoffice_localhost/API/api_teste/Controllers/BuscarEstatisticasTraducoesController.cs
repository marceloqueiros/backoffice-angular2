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
    public class BuscarEstatisticasTraducoesController : ApiController
    {
        DataClasses1DataContext DB = new DataClasses1DataContext();

        //Pedido para enviar as estatisticas
        [HttpGet]
        public EstatisticasUtilizdores Get()
        {
            EstatisticasUtilizdores Estatisticas = new EstatisticasUtilizdores();

            Estatisticas = CalcularEstatisticas(Estatisticas);

            return Estatisticas;
        }

        public EstatisticasUtilizdores CalcularEstatisticas(EstatisticasUtilizdores DadosParaEnviar)
        {
            DadosParaEnviar.Lingua1 = "Português";
            DadosParaEnviar.Lingua2 = "Inglês";
            DadosParaEnviar.Lingua3 = "Italiano";
            DadosParaEnviar.Lingua4 = "Alemão";
            DadosParaEnviar.Lingua5 = "Francês";
            DadosParaEnviar.Lingua6 = "Espanhol";
            DadosParaEnviar.Traducoes1 = 0;
            DadosParaEnviar.Traducoes2 = 0;
            DadosParaEnviar.Traducoes3 = 0;
            DadosParaEnviar.Traducoes4 = 0;
            DadosParaEnviar.Traducoes5 = 0;
            DadosParaEnviar.Traducoes6 = 0;

            foreach (traducao tradu in DB.traducaos)
            {
                if(tradu.data_fim != null && CheckLanguage(tradu.id_linguagem_final, DadosParaEnviar.Lingua1))
                {
                    DadosParaEnviar.Traducoes1++;
                }

                if (tradu.data_fim != null && CheckLanguage(tradu.id_linguagem_final, DadosParaEnviar.Lingua2))
                {
                    DadosParaEnviar.Traducoes2++;
                }

                if (tradu.data_fim != null && CheckLanguage(tradu.id_linguagem_final, DadosParaEnviar.Lingua3))
                {
                    DadosParaEnviar.Traducoes3++;
                }

                if (tradu.data_fim != null && CheckLanguage(tradu.id_linguagem_final, DadosParaEnviar.Lingua4))
                {
                    DadosParaEnviar.Traducoes4++;
                }

                if (tradu.data_fim != null && CheckLanguage(tradu.id_linguagem_final, DadosParaEnviar.Lingua5))
                {
                    DadosParaEnviar.Traducoes5++;
                }

                if (tradu.data_fim != null && CheckLanguage(tradu.id_linguagem_final, DadosParaEnviar.Lingua6))
                {
                    DadosParaEnviar.Traducoes6++;
                }
            }

            DadosParaEnviar = OrdenarDados(DadosParaEnviar);

            return DadosParaEnviar;
        }

        private EstatisticasUtilizdores OrdenarDados(EstatisticasUtilizdores dadosParaEnviar)
        {           
            if(dadosParaEnviar.Traducoes1 == 0 && dadosParaEnviar.Traducoes2 == 0 && dadosParaEnviar.Traducoes3 == 0 && dadosParaEnviar.Traducoes4 == 0 && dadosParaEnviar.Traducoes5 == 0 && dadosParaEnviar.Traducoes6 == 0)
            {
                return dadosParaEnviar;
            }

            int[] traduN = {dadosParaEnviar.Traducoes1, dadosParaEnviar.Traducoes2, dadosParaEnviar.Traducoes3, dadosParaEnviar.Traducoes4, dadosParaEnviar.Traducoes5, dadosParaEnviar.Traducoes6 };
            string[] linguaN = {dadosParaEnviar.Lingua1, dadosParaEnviar.Lingua2, dadosParaEnviar.Lingua3, dadosParaEnviar.Lingua4, dadosParaEnviar.Lingua5, dadosParaEnviar.Lingua6 };

            for (int i = 0; i<6; i++)
            {
                for(int j = i + 1; j<6; j++)
                {
                    if(traduN[i] < traduN[j])
                    {
                        int aux = traduN[i];
                        string aux2 = linguaN[i];
                        traduN[i] = traduN[j];
                        linguaN[i] = linguaN[j];
                        traduN[j] = aux;
                        linguaN[j] = aux2;
                    }
                }
            }

            dadosParaEnviar.Lingua1 = linguaN[0];
            dadosParaEnviar.Lingua2 = linguaN[1];
            dadosParaEnviar.Lingua3 = linguaN[2];
            dadosParaEnviar.Lingua4 = linguaN[3];
            dadosParaEnviar.Lingua5 = linguaN[4];
            dadosParaEnviar.Lingua6 = linguaN[5];
            dadosParaEnviar.Traducoes1 = traduN[0];
            dadosParaEnviar.Traducoes2 = traduN[1];
            dadosParaEnviar.Traducoes3 = traduN[2];
            dadosParaEnviar.Traducoes4 = traduN[3];
            dadosParaEnviar.Traducoes5 = traduN[4];
            dadosParaEnviar.Traducoes6 = traduN[5];

            return dadosParaEnviar;
        }

        private bool CheckLanguage(int idLingua, string lingua)
        {
            Linguagem L = new Linguagem();          

            try
            {             
                
                L = DB.Linguagems.Single(w => w.Linguagem1 == lingua);

                if(idLingua == L.ID_Linguagem)
                {
                    return true;
                }else
                {
                    return false;
                }
            }
            catch
            {
                return false;
            }         
            
        }
    }
}
