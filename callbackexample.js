
  let response={};
  let result = [];
  let arr = ["SELECT COUNT (DISTINCT Mob) as totalMsisdn FROM obd_report","SELECT COUNT (DISTINCT Mob) as ansMsisdn FROM obd_report where status ='ANSWERED'","SELECT COUNT (DISTINCT campaign_id) as campaign FROM obd_report","SELECT sum(Listen_Duration) as duration FROM obd_report","SELECT count(mob) as msisdn FROM obd_report"];

  function resolveQuery(arr, resCB,resCB2){
    async.eachSeries(arr, function(query, callback){
      config.pool.query(query, function(err, res) {
        if (err) {
          return console.error('error running query', err);
        }
        console.log('length   >   ',res.rows.length);
        for(let i=0;i<res.rows.length;i++){
          result.push(res.rows[i]);

        }
        callback();
      });
    },function(err){
      if(err)
        return err;
        resCB();
        resCB2();

    });
  }

resolveQuery(arr,function(){
  response = {
    totalMsisdn : result[0].totalmsisdn/1,
      ansMsisdn : result[1].ansmsisdn/1,
    avgCampaign : result[1].ansmsisdn/result[2].campaign,
    avgDuration : result[3].duration/result[4].msisdn
  };
  response.avgDuration = response.avgDuration.toFixed(2)/1;

}, function() {

  arr = ["SELECT COUNT (STATE),STATE FROM user_data GROUP BY state"];
   resolveQuery(arr,function(){
     console.log(result[0].count,result[0].state,result[1].state);
     response.pieChart=[{state:result[0].state,count:result[0].count},
      {state:result[1].state,count:result[1].count},
      {state:result[2].state,count:result[2].count}];
       res.send({
         "statusCode": 200,
         "data": response
       });
   },function () {
      console.log('I am in second function call and second callback');
   });

});

