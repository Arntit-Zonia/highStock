(function() {
    let arr0 = [];
    let arr1 = [];
    let arr2 = [];

    for(let i = 1; i <= 70; i++) {
        arr0.push(Math.floor(Math.random() * 51));
        arr1.push(Math.floor((Math.random() * 101)));
        arr2.push(Math.floor(Math.random() * 201));
    }

    let myChart = Highcharts.stockChart("container", {
        xAxis: {
            type: "datetime"
        },
        
        yAxis: {
            title: {
                text: "GROWTH",
                style: {
                    fontSize: "20px"
                }
            },
            labels: {
                formatter: function() {
                  return (this.value > 0 ? ' + ' : '') + this.value + '%';
                }
            },
        },
    
        series: [
            {
                name: "A",
                data: [...arr0]
            },
    
            {
                name: "B",
                data: [...arr1]
            },
    
            {
                name: "C",
                data: [...arr2]
            }
        ]
    });
}());