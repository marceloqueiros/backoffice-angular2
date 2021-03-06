﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace api_teste.ViewModels
{
    public class TraducoesPendentesVM
    {
        private int id;
        private string cliente;
        private string linguaO;
        private string linguaF;
        private string dataPedido;

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

        public string DataPedido
        {
            get
            {
                return dataPedido;
            }

            set
            {
                dataPedido = value;
            }
        }

    }
}