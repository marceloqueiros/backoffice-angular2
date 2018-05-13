using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using api_teste.Models;

namespace api_teste.ViewModels
{
    public class EstatisticasUtilizadores
    {
        //Novos utilizadores registados durante a semana
        private int novoUSegunda = 0;
        private int novoUTerca = 0;
        private int novoUQuarta = 0;
        private int novoUQuinta = 0;
        private int novoUSexta = 0;
        private int novoUSabado = 0;
        private int novoUDomingo = 0;

        private int maxNovos = 0;

        public EstatisticasUtilizadores()
        {

        }

        public int NovoUSegunda
        {
            get { return novoUSegunda; }
            set { novoUSegunda = value; }
        }

        public int NovoUTerca
        {
            get { return novoUTerca; }
            set { novoUTerca = value; }
        }

        public int NovoUQuarta
        {
            get { return novoUQuarta; }
            set { novoUQuarta = value; }
        }

        public int NovoUQuinta
        {
            get { return novoUQuinta; }
            set { novoUQuinta = value; }
        }

        public int NovoUSexta
        {
            get { return novoUSexta; }
            set { novoUSexta = value; }
        }

        public int NovoUSabado
        {
            get { return novoUSabado; }
            set { novoUSabado = value; }
        }

        public int NovoUDomingo
        {
            get { return novoUDomingo; }
            set { novoUDomingo = value; }
        }        

        public int MaxNovos
        {
            get { return maxNovos; }
            set { maxNovos = value; }
        }
    }
}