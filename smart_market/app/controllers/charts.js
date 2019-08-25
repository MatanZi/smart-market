const mongoHandler = require('../models/mongo_handler')
const redisHandler = require('../models/redis_handler')

exports.makeChart = (req, res) => {
    var labels = mongoHandler.getLabels()
    labels.then(function(result){
        var dataView = mongoHandler.makeMainChart(result)
        
        dataView.then(function(view){
            
            var back = []
            // random colors for chart
            for(var i = 0; i < view.data.length; i++){
                var backbackgd = 'rgb(' + Math.floor(Math.random() * 255) +',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) +', 0.5 )'
                back.push(backbackgd)
            }
            view.backgroundColor = back
            view.borderColor = back
            view.label = '# of receipts'
  
            redisHandler.getGroceries(function(gros){
              res.render('graph', {collInfos: view, labels: result, gros : gros})
            })
            
        })
    })
  }
  
exports.makeGraphOfPricesInNetworks = (req, res) => {
    var r1 = [
        {
            "id": 49661700,
            "name": "Osher Ad",
            "date": "5/6/19",
            "gros":[      
                { "product_name": "Ski 5%", "price":4.75},
                { "product_name": "Milk 3%", "price":5.94},
                { "product_name": "Parmezanh Cheese - 200gr", "price":22.9},
                { "product_name": "Sesame Rolls - 6 Pack", "price":13.49},
                { "product_name": "Eggs L - 12 Units", "price":11.3},
                { "product_name": "Toilet Paper - 32 Units", "price":37.9},
                { "product_name": "Tommatos - 1KG", "price":3.89},
                { "product_name": "Cucumber - 1KG", "price":4.79},
                { "product_name": "Watermelom - 1KG", "price":3.69},
                { "product_name": "Pita Bread - 13 Units", "price":10.99},
                { "product_name": "Red Onion - 1KG", "price":4.89},
                { "product_name": "Fairy Clean Liquid - 650gr", "price":9.99},
                { "product_name": "Shampoo Neka7 - 750 gr", "price":9.9},
                { "product_name": "Turkish Coffee - 100gr", "price":6.99},
                { "product_name": "Butter - 200gr", "price":5.25},
                { "product_name": "Para Chooclate", "price":5.79},
                { "product_name": "Ricotta Cheese - 200gr", "price":11.99},
                { "product_name": "Nutella - 750gr", "price":23.99},
                { "product_name": "Carrot  - 1KG", "price":4.99}
            ]
        },
        {
            "id": 442221667,
            "name": "Osher Ad",
            "date": "16/6/19",
            "gros":[      
                { "product_name": "Turkish Coffee - 100gr", "price":8.99},
                { "product_name": "Para Chooclate", "price":6.29},
                { "product_name": "Red Onion - 1KG", "price":5.29},
                { "product_name": "Eggs M - 12 Units", "price":10.4},
                { "product_name": "Ricotta Cheese - 200gr", "price":12.49},
                { "product_name": "Tommatos - 1KG", "price":3.89},
                { "product_name": "Cucumber - 1KG", "price":4.79},
                { "product_name": "Pita Bread - 13 Units", "price":10.99},
                { "product_name": "Tuna Starkist - 4 Units", "price":23.99},
                { "product_name": "Milk 3%", "price":5.94},
                { "product_name": "Cotton Sticks Ear Cleaning - 100 Units", "price":2.99},
                { "product_name": "Shoghi Cornflakes - 500gr", "price":21.90},
                { "product_name": "Canola Oil - 750gr", "price":13.49},
                
            ]
        },
        {
            "id": 46822571,
            "name": "Osher Ad",
            "date": "19/6/19",
            "gros":[      
                { "product_name": "Butter - 200gr", "price":5.25},
                { "product_name": "Turkish Coffee - 100gr", "price":8.99},
                { "product_name": "Red Onion - 1KG", "price":5.29},
                { "product_name": "Toilet Paper - 32 Units", "price":29.9},
                { "product_name": "Eggs M - 12 Units", "price":10.4},
                { "product_name": "Tommatos - 1KG", "price":3.89},
                { "product_name": "Cucumber - 1KG", "price":4.79},
                { "product_name": "Carrot  - 1KG", "price":4.99},
                { "product_name": "Potato - 1KG", "price":5.49},
                { "product_name": "Sweet Potato - 1KG", "price":10.49},
                { "product_name": "Gamla Marlo Red Wine", "price":52.99},
                { "product_name": "Challah Bread", "price":4.49},
                { "product_name": "Olive Oil - 750gr", "price":31.99},
                { "product_name": "Eggplant - 1KG", "price":10.99},
                { "product_name": "Tahene El Erez - 500gr", "price":13.9},
                { "product_name": "Hummus Ahla - 750gr", "price":11.49},
                { "product_name": "Basmati Rice - 1KG", "price":13.9},
                { "product_name": "Napoleaon Cake - 600gr", "price":31.99},
                { "product_name": "Salt - 1KG", "price":1.9},
                { "product_name": "Sugar - 1KG", "price":4.29},
                { "product_name": "Green Grapes - 1KG", "price":28.99}
            ]
        },
        {
            "id": 99964815,
            "name": "Osher Ad",
            "date": "24/6/19",
            "gros":[      
                { "product_name": "Turkish Coffee - 100gr", "price":6.99},
                { "product_name": "Para Chooclate", "price":6.29},
                { "product_name": "Red Onion - 1KG", "price":5.29},
                { "product_name": "Eggs M - 12 Units", "price":10.4},
                { "product_name": "Ricotta Cheese - 200gr", "price":12.49},
                { "product_name": "Tommatos - 1KG", "price":2.99},
                { "product_name": "Cucumber - 1KG", "price":3.99},
                { "product_name": "Pita Bread - 13 Units", "price":10.99},
                { "product_name": "Tuna Starkist - 4 Units", "price":23.99},
                { "product_name": "Milk 3%", "price":5.94},
                { "product_name": "Cotton Sticks Ear Cleaning - 100 Units", "price":3.99},
                { "product_name": "Shoghi Cornflakes - 500gr", "price":23.90},
                { "product_name": "Canola Oil - 750gr", "price":13.49},
                { "product_name": "Nutella - 750gr", "price":24.49}
            ]
        },
        {
            "id": 77554444,
            "name": "Osher Ad",
            "date": "1/7/19",
            "gros":[      
                { "product_name": "Ski 5%", "price":4.75},
                { "product_name": "Milk 3%", "price":5.94},
                { "product_name": "Parmezanh Cheese - 200gr", "price":21.9},
                { "product_name": "Sesame Rolls - 6 Pack", "price":13.49},
                { "product_name": "Eggs L - 12 Units", "price":11.3},
                { "product_name": "Toilet Paper - 32 Units", "price":36.9},
                { "product_name": "Tommatos - 1KG", "price":4.89},
                { "product_name": "Cucumber - 1KG", "price":4.99},
                { "product_name": "Watermelom - 1KG", "price":4.69},
                { "product_name": "Red Onion - 1KG", "price":5.29},
                { "product_name": "Gamla Marlo Red Wine", "price":49.9},
                { "product_name": "Hummus Ahla - 750gr", "price":12.49},
                { "product_name": "Tuna Starkist - 4 Units", "price":23.49},
                { "product_name": "Pita Bread - 13 Units", "price":10.9},
                { "product_name": "Turkish Coffee - 100gr", "price":8.99},
                { "product_name": "Butter - 200gr", "price":5.25}
            ]
        },
        {
            "id": 14228796,
            "name": "Osher Ad",
            "date": "12/7/19",
            "gros":[      
                { "product_name": "Turkish Coffee - 100gr", "price":6.99},
                { "product_name": "Milk 3%", "price":5.94},
                { "product_name": "Parmezanh Cheese - 200gr", "price":21.9},
                { "product_name": "Sesame Rolls - 6 Pack", "price":13.49},
                { "product_name": "Eggs L - 12 Units", "price":11.3},
                { "product_name": "Toilet Paper - 32 Units", "price":36.9},
                { "product_name": "Tommatos - 1KG", "price":4.89},
                { "product_name": "Cucumber - 1KG", "price":4.99},
                { "product_name": "Watermelom - 1KG", "price":4.69},
                { "product_name": "Pita Bread - 13 Units", "price":11.99},
                { "product_name": "Red Onion - 1KG", "price":5.29},
                { "product_name": "Gamla Marlo Red Wine", "price":49.9},
                { "product_name": "Hummus Ahla - 750gr", "price":12.49},
                { "product_name": "Tuna Starkist - 4 Units", "price":23.49},
                { "product_name": "Pita Bread - 13 Units", "price":10.9},
                { "product_name": "Turkish Coffee - 100gr", "price":8.99},
                { "product_name": "Butter - 200gr", "price":5.25}
            ]
        }
    
    ]
    
    const from_date = req.body.from
    const to_date = req.body.to
    const product = req.body.ccexpm

    var getPricesInDates = mongoHandler.getPricesBetweenDates(from_date, to_date ,product, function(networkName, price, dates){
            var headline = product + "   from: " + from_date + "   to: " + to_date;
            
            var name = networkName[0]
            var countDataset = 1
            var dataset = []
            var startSet = 0
            var endSet = 0
            
            for(var i = 0;  i < networkName.length; i++){
                console.log(startSet, endSet, i)

                if(networkName[i] !== name){
                    var dataForset = []
                    // for(var j = 0; j < dates.length; j++){
                    //     dataForset.push(0)
                    // }
                    for(var j = startSet; j < endSet; j++){
                        dataForset[j] = price[j]
                    }
                    var color = 'rgb(' + Math.floor(Math.random() * 255) +',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) +', 0.5 )';
                    dataset.push(
                        { 
                            data: dataForset,
                            label: name,
                            backgroundColor: color,
                            borderColor: color,
                            fill: false
                          }
                    );
                    startSet = i
                    countDataset++
                    name = networkName[i]
                }
                endSet++
                
                if(endSet == networkName.length && countDataset != dataset.length){
                    if(networkName[i] == name){
                        var dataForset = []
                        for(var j = startSet; j < endSet; j++){
                            dataForset[j] = price[j]
                        }
                        var color = 'rgb(' + Math.floor(Math.random() * 255) +',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) +', 0.5 )';
                        dataset.push(
                            { 
                                data: dataForset,
                                label: name,
                                backgroundColor: color,
                                borderColor: color,
                                fill: false
                              }
                        );

                    }
                }

            }

            redisHandler.getGroceries(function(gros){
                res.render('graph2.ejs', {collInfos: dataset, labels: dates, gros : gros, prices : price, dates : dates, headline : headline})
            })
    })
  }

