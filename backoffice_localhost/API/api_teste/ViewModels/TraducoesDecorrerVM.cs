using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api_teste.ViewModels
{
    public class TraducoesDecorrerVM
    {

        private int id;
        private string tradutor;
        private string linguaO;
        private string linguaF;
        private string dataInicio;
        private string cliente;
        private string percentagem;

        public int Id
        {
            get
            {
                return id;
            }

            set
            {
                id = value;
            }
        }

        public string Tradutor
        {
            get
            {
                return tradutor;
            }

            set
            {
                tradutor = value;
            }
        }

        public string LinguaO
        {
            get
            {
                return linguaO;
            }

            set
            {
                linguaO = value;
            }
        }

        public string LinguaF
        {
            get
            {
                return linguaF;
            }

            set
            {
                linguaF = value;
            }
        }

        public string DataInicio
        {
            get
            {
                return dataInicio;
            }

            set
            {
                dataInicio = value;
            }
        }

        public string Cliente
        {
            get
            {
                return cliente;
            }

            set
            {
                cliente = value;
            }
        }

        public string Percentagem
        {
            get
            {
                return percentagem;
            }

            set
            {
                percentagem = value;
            }
        }
    }
}