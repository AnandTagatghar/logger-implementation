# logger-implementation

  logger implemented using winston

  used expres for the route 

  implemented two routes 
    1. endpoint/api/v1/user/get-data => this will add the log in the logger
    2. endpoint/api/v1/user/error-data => this will trigger error and add the log on the logger


### used one more dependency winston-daily-rotate-file
   
  this will create a config file for the daily rotate file that will have a 14 days of data in the logger file