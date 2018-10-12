
Highcharts.chart('container', {

  chart: {
    type: 'bubble',
    borderColor: null,
    borderWidth: 0,
    plotBorderWidth: 0,
    marginTop : 200,
    zoomType: 'xy',
    spacing: 120,
    backgroundColor: {
      linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
      stops: [
        [0, '#d95766'],
        [1, '#00c1d1'],
      ]
    },
    // className: 'dark-container',
  },
  credits: {
      enabled: false
  },
  legend: {
    enabled: false
  },

  title: {
    text: 'Top 5 Hot and Hated Cryptocurrencies',
    style:{
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
      letterSpacing: 1
    }
  },

  xAxis: {
    lineColor: '#fff',
    max: 17,
    lineWidth: 1.3,
    // offset: -60,
    gridLineWidth: 0,
    title: {
      useHTML: true,
      text: '<span><small>positive</small><br/><br/><br/><b>24 h Price<br/> Change</b></span>',
      align: 'high',
      style:{
        color: '#fff',
      },
      y: -60,
      x: 30
    },
    labels: {
      // format: '{value}',
      formatter: function () {
        if (this.value < 17) {
            return this.value;
        }
      },
      // formatter (){this.value},
      style:{
        color: '#fff',
      },
      y: 27
    },
    plotLines: [{
      color: 'rgba(255,255,255,0.4)',
      dashStyle: 'solid',
      width: 1,
      value: 13.15,
      label: {
        rotation: 0,
        y: 10,
        style: {
          fontStyle: 'italic',
          color: '#fff'
        },
        text: null
      },
      zIndex: 3
    }]
  },

  yAxis: {
    tickWidth: 1,
    // max: 50,
    // minTickInterval: 10,
    lineColor: '#fff',
    allowDecimals: false,
    lineWidth: 1.3,
    startOnTick: false,
    gridLineWidth: 0,
    endOnTick: false,
    title: {
      useHTML: true,
      text: '<span><b>24 h <br/>Sentiment<br/> Change</b></span>',
      style:{
        color: '#fff',
      },
      align: 'high',
      rotation: 0,
      x: 40,
      y: -10
    },
    labels: {
      format: '{value}',
      style:{
        color: '#fff'
      }
    },
    maxPadding: 0.1,
    plotLines: [{
      color: 'rgba(255,255,255,0.4)',
      dashStyle: 'solid',
      width: 1,
      value: 35,
      zIndex: 3
    }]
  },

  tooltip: {
    useHTML: true,
    headerFormat: '<table>',
    pointFormat: '<tr><th colspan="2"><h3>{point.title}</h3></th></tr>' +
      '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
      '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
      '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
    footerFormat: '</table>',
    followPointer: true
  },

  plotOptions: {
    bubble:{
      dataLabels:{

      }
    },
    series: {
      dataLabels: {
        enabled: true,
        color: '#fff',
        borderWidth: 0,
        borderRadius: 0,
        format: '{point.name}',
        style:{
          textOutline: null,
        },
        label:{
          backgroudColor: 'red',
        },
      }
    },
  },

  series: [{
    color : '#323490',
    minSize: 35,
    marker: {
      fillOpacity: 1,
      lineColor: '#fff',
      states:{
        hover:{
          enabled: false,
        }

      }
    },
    data: [
      { x: 10,   y: 50, z: 1,   name: 'WTI', title: 'Belgium' },
      { x: 10.3, y: 16, z: 1,   name: 'CRS', title: 'Belgium' },
      { x: 11.2, y: 35, z: .97,  name: 'LTC', title: 'Belgium' },
      { x: 12.4, y: 10, z: .98,  name: 'EOS', title: 'Belgium' },
      { x: 11.2, y: 60, z: 1.02, name: 'BTC', title: 'Belgium' },
      { x: 13.5, y: 30, z: 1.015,name: 'LTH', title: 'Belgium' },
      { x: 14.9, y: 11, z: 1.015,name: 'ETH', title: 'Belgium' },
      { x: 15,   y: 62, z: 1.01, name: 'RPL', title: 'Belgium' },
      { x: 15.5, y: 45, z: .99, name: 'NEO', title: 'Belgium' },
      { x: 16  , y: 30, z: .99, name: 'MES', title: 'Belgium' },
    ]
  }]

});
/*
      { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
      { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
      { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
      { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
      { x: 81, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
      { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
      { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
      { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
      { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
      { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
      { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
      { x: 65.5, y: 126.4, z: 35.3, name: 'US', country: 'United States' },
      { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
      { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
      { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' }
    ]
*/