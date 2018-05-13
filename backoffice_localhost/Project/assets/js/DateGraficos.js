if ('undefined' !== typeof module) {

    module.exports = function FuncaoParaOsDados(object) {

        var dataSales2 = {
            labels: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
            series: [                
                [object.NovoUSegunda, object.NovoUTerca, object.NovoUQuarta, object.NovoUQuinta, object.NovoUSexta, object.NovoUSabado, object.NovoUDomingo, 0]               
            ]
        };

        var optionsSales2 = {
            lineSmooth: false,
            low: 0,
            high: object.MaxNovos,
            showArea: true,
            height: "245px",
            axisX: {
                showGrid: false,
            },
            lineSmooth: Chartist.Interpolation.simple({
                divisor: 2
            }),
            showLine: false,
            showPoint: false,
        };

        var responsiveSales2 = [
            ['screen and (max-width: 640px)', {
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];
        
        Chartist.Line('#chartHours2', dataSales2, optionsSales2, responsiveSales2);       

    }    
       
}
