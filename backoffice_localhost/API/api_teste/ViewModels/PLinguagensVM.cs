using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api_teste.ViewModels
{
    public class PLinguagensVM
    {
        private int idLinguagem1;
        private string linguagem1;
        private int idLinguagem2;
        private string linguagem2;
        private string valor;

        public int IdLinguagem1
        {
            get
            {
                return idLinguagem1;
            }

            set
            {
                idLinguagem1 = value;
            }
        }

        public string Linguagem1
        {
            get
            {
                return linguagem1;
            }

            set
            {
                linguagem1 = value;
            }
        }

        public int IdLinguagem2
        {
            get
            {
                return idLinguagem2;
            }

            set
            {
                idLinguagem2 = value;
            }
        }

        public string Linguagem2
        {
            get
            {
                return linguagem2;
            }

            set
            {
                linguagem2 = value;
            }
        }

        public string Valor
        {
            get
            {
                return valor;
            }

            set
            {
                valor = value;
            }
        }
    }
}