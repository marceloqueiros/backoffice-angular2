if ('undefined' !== typeof module) {

    module.exports = function FuncaoParaOsDados3() {

        var dataSales = {
            labels: ['Português', 'Inglês', 'Francês', 'Alemão', 'Espanhol', 'Italiano'],
            series: [
                [160, 150, 120, 40, 70, 90, 0]               
            ]
            
        };

        var optionsSales = {
            lineSmooth: false,
            low: 0,
            high: 150,
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

        var responsiveSales = [
            ['screen and (max-width: 640px)', {
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];
        
        Chartist.Line('#chartHours3', dataSales, optionsSales, responsiveSales);

        var dataPreferences = {
            series: [
                [25, 30, 20, 25]
            ]
        };

        var optionsPreferences = {
            donut: true,
            donutWidth: 40,
            startAngle: 0,
            total: 100,
            showLabel: false,
            axisX: {
                showGrid: false
            }
        };

        Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

        Chartist.Pie('#chartPreferences', {
            labels: ['65%','35%'],
            series: [65, 35]
        });

    }
}