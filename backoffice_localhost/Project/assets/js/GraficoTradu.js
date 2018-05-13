if ('undefined' !== typeof module) {

    module.exports = function FuncaoParaOsDados2(object) {
            var dataActivity = {
            labels: [object.Lingua1, object.Lingua2, object.Lingua3, object.Lingua4, object.Lingua5, object.Lingua6],
            series: [
                [object.Traducoes1, object.Traducoes2, object.Traducoes3, object.Traducoes4, object.Traducoes5, object.Traducoes6]               
                    ]
             };

        var optionsActivity = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };

        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                seriesBarDistance: 5,
                axisX: {
                    labelInterpolationFnc: function (value) {
                        return value[0];
                    }
                }
            }]
        ];

        Chartist.Bar('#chartActivity', dataActivity, optionsActivity, responsiveOptions);

    }

}