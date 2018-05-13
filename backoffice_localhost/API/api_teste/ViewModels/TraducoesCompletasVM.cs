using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using api_teste.Models;

namespace api_teste.ViewModels
{
    public class TraducoesCompletasVM
    {
        private int id;
        private string tradutor;
        private string linguaO;
        private string linguaF;
        private string dataFim;
        private string cliente;

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

        public string DataFim
        {
            get
            {
                return dataFim;
            }

            set
            {
                dataFim = value;
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

        
    }


}