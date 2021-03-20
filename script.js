// Problem1
fetch('./json/problem1.json')
.then(function(response) {
    return response.json();
})
.then(function (obj){
    let dataArray = Object.entries(obj);
    const chart1 = new Highcharts.Chart({
        chart: {
            renderTo: 'problem1',
            type: 'column',

        },
        title: {
            text: 'Total runs scored by team'
        },
        xAxis:{
            type: 'category',
            title: {
                text: "Teams"
              }
        },
        yAxis: {
            min: 0,
            title: {
              text: " Total runs "
            }
          },  
        series: [{
            name: 'Runs',
            colorByPoint: true,
            data: dataArray
        }]
    });
})
.catch(function(error){
    console.log('Something went wrong');
    console.error(error);
});

// Problem 2

fetch('./json/problem2.json')
.then(function(response) {
    return response.json();
})
.then(function (obj){
    let dataArray = Object.entries(obj);
    const chart2 = new Highcharts.Chart({
        chart: {
            renderTo: 'problem2',
            type: 'column',
    
        },
        title: {
            text: 'Top 5 batsman of RCB'
        },
        xAxis:{
            type: 'category',
            title: {
                text: "Batsmen"
              }
        },
        yAxis: {
            min: 0,
            title: {
              text: "Total runs"
            }
          },  
        series: [{
            name: 'Runs',
            colorByPoint: true,
            data: dataArray
        }]
    });
})
.catch(function(error){
    console.log('Something went wrong');
    console.error(error);
});


// Problem 3 starts

fetch('./json/problem3.json')
.then(function(response) {
    return response.json();
})
.then(function (obj){
    let dataArray = Object.entries(obj);
    const chart3 = new Highcharts.Chart({
        chart: {
            renderTo: 'problem3',
            type: 'column',
            },
        
        title: {
            text: 'Foreign umpire analysis'
        },
        xAxis:{
            type: 'category',
            title: {
                text: "States"
              }

        },
        yAxis: {
            min: 0,
            title: {
              text: "Umpire count"
            }
          },  
        series: [{
            name: 'No of Umpires',
            colorByPoint: true,
            data: dataArray
        }]
    });
})
.catch(function(error){
    console.log('Something went wrong');
    console.error(error);
});
// Problem 3 ends 


//problem4 starts
fetch('./json/problem4.json')
.then(function(response) {
    return response.json();
})
.then(function (obj){
    dataArray=[]
    for(i in obj){
        dataArray.push({name: i, data: obj[i]})
    }
    let season = ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
    const chart4 = new Highcharts.chart('problem4', {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Stacked-bar chart of matches played by team by season'
        },
        subtitle: {
          text: 'Number of games played by team by season'
        },
        xAxis: {
            categories:season,
            crosshair: true,
            title: {
                text: "Years"
              }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Matches played'
          }
        },
        tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.0f} </b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
        },
        series: dataArray
        
      });
})
.catch(function(error){
    console.log('Something went wrong');
    console.error(error);
});
