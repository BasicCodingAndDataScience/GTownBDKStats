var age1 = {
  type: "pie",
  plot: {
    borderColor: "#2B313B",
    borderWidth: 5,
    // slice: 90,
    valueBox: {
      placement: 'out',
      text: '%t\n%npv%',
      fontFamily: "Open Sans"
    },
    tooltip: {
      fontSize: '18',
      fontFamily: "Open Sans",
      padding: "5 10",
      text: "%npv%"
    },
    animation: {
      effect: 2,
      method: 5,
      speed: 900,
      sequence: 1,
      delay: 3000
    }
  },
  source: {
    text: 'espn.com',
    fontColor: "#8e99a9",
    fontFamily: "Open Sans"
  },
  title: {
    fontColor: "#8e99a9",
    text: 'Age Distribution of eSports',
    align: "center",
    offsetX: 10,
    fontFamily: "Open Sans",
    fontSize: 17
  },
  plotarea: {
    margin: "20 0 0 0"
  },
  series: [{
      values: [56],
      text: "21-35",
      backgroundColor: '#50ADF5',
    },
    {
      values: [16],
      text: "10-20",
      backgroundColor: '#FF7965',
      detached: true
    },
    {
      values: [28],
      text: '36-65',
      backgroundColor: '#FFCB45',
      detached: true
    },
    {
      text: '65+',
      values: [0],
      backgroundColor: '#6FB07F'
    }
  ]
};

zingchart.render({
  id: 'agechart1',
  data: age1,
  height: '100%',
  width: '100%'
});



var age2 = {
  type: "pie",
  plot: {
    borderColor: "#2B313B",
    borderWidth: 5,
    // slice: 90,
    valueBox: {
      placement: 'out',
      text: '%t\n%npv%',
      fontFamily: "Open Sans"
    },
    tooltip: {
      fontSize: '18',
      fontFamily: "Open Sans",
      padding: "5 10",
      text: "%npv%"
    },
    animation: {
      effect: 2,
      method: 5,
      speed: 900,
      sequence: 1,
      delay: 3000
    }
  },
  source: {
    text: 'espn.com',
    fontColor: "#8e99a9",
    fontFamily: "Open Sans"
  },
  title: {
    fontColor: "#8e99a9",
    text: 'Age Distribution of Traditional Sports',
    align: "center",
    offsetX: 10,
    fontFamily: "Open Sans",
    fontSize: 17
  },

  series: [{
      values: [33],
      text: "21-35",
      backgroundColor: '#50ADF5',
    },
    {
      values: [12],
      text: "10-20",
      backgroundColor: '#FF7965',
      detached: true
    },
    {
      values: [43],
      text: '36-65',
      backgroundColor: '#FFCB45',
      detached: true
    },
    {
      text: '65+',
      values: [12],
      backgroundColor: '#6FB07F'
    }
  ]
};

zingchart.render({
  id: 'agechart2',
  data: age2,
  height: '100%',
  width: '100%'
});

var gender1 = {
  type: "pie",
  plot: {
    borderColor: "#2B313B",
    borderWidth: 5,
    // slice: 90,
    valueBox: {
      placement: 'out',
      text: '%t\n%npv%',
      fontFamily: "Open Sans"
    },
    tooltip: {
      fontSize: '18',
      fontFamily: "Open Sans",
      padding: "5 10",
      text: "%npv%"
    },
    animation: {
      effect: 2,
      method: 5,
      speed: 900,
      sequence: 1,
      delay: 3000
    }
  },
  source: {
    text: 'espn.com',
    fontColor: "#8e99a9",
    fontFamily: "Open Sans"
  },
  title: {
    fontColor: "#8e99a9",
    text: 'Gender Demographics of eSports',
    align: "center",
    offsetX: 10,
    fontFamily: "Open Sans",
    fontSize: 17
  },
  plotarea: {
    margin: "20 0 0 0"
  },
  series: [{
      values: [70],
      text: "Males",
      backgroundColor: 'cyan',
    },
    {
      values: [30],
      text: "Females",
      backgroundColor: '#6877e5',
      detached: true
    }
  ]
};

zingchart.render({
  id: 'genderchart1',
  data: gender1,
  height: '100%',
  width: '100%'
});

var gender2 = {
  type: "pie",
  plot: {
    borderColor: "#2B313B",
    borderWidth: 5,
    // slice: 90,
    valueBox: {
      placement: 'out',
      text: '%t\n%npv%',
      fontFamily: "Open Sans"
    },
    tooltip: {
      fontSize: '18',
      fontFamily: "Open Sans",
      padding: "5 10",
      text: "%npv%"
    },
    animation: {
      effect: 2,
      method: 5,
      speed: 900,
      sequence: 1,
      delay: 3000
    }
  },
  source: {
    text: 'espn.com',
    fontColor: "#8e99a9",
    fontFamily: "Open Sans"
  },
  title: {
    fontColor: "#8e99a9",
    text: 'Gender Demographics of Traditional Sports',
    align: "center",
    offsetX: 10,
    fontFamily: "Open Sans",
    fontSize: 17
  },
  plotarea: {
    margin: "20 0 0 0"
  },
  series: [{
      values: [62],
      text: "Males",
      backgroundColor: 'cyan',
    },
    {
      values: [38],
      text: "Females",
      backgroundColor: '#6877e5',
      detached: true
    }
  ]
};

zingchart.render({
  id: 'genderchart2',
  data: gender2,
  height: '100%',
  width: '100%'
});


var growth1 = {
  "background-color": "#E1EAEC #ECF2F4",
  "graphset": [{
    "background-color": "none",

    "type": "pop-pyramid",
    "options": {
      "aspect": "area",
      "label-placement": "side"
    },
    "plot": {
      "stacked": true
    },
    "title": {
      "text": "Vieweshiper of Championship over Six Years",
      "font-size": "18px",
      "font-color": "black",
    },
    "scale-x": {
      "item": {
        "text-align": "middle",
        "rules": [{
          "rule": "%i!=20",
          "offset-x": "20%"
        }]
      },
      "values": ["2011", "2012", "2013", "2014", "2015", "2016"]
    },
    "scale-y": {
      "values": "0:180000000:10000000",
      "thousands-separator": ",",
      short: true
    },
    "plotarea": {
      "margin-left": "50px"
    },
    "series": [{
        "data-side": 1,
        "text": "League of Legends",
        "background-color": "#007DF0 #0055A4",
        "values": [1690000, 8200000, 32000000, 27000000, 36000000, 43000000]
      },
      {
        "data-side": 2,
        "text": "Super Bowl",
        "background-color": "#94090D #D40D12",
        "values": [162900000, 163500000, 164000000, 167000000, 168000000, 167000000]
      }
    ]
  }]
};


zingchart.render({
  id: 'growthchart1',
  data: growth1,
  height: "100%",
  width: "100%"
});
