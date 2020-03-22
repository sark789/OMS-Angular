# OMS

This is a beginner project made with Angular in Typescript on localhost server.<br/>
It is a basic "test" of Order Management Station. It includes some basic authentication functionalities. Firstly, User has to register  and  all of his credentials are stored on an OPEN database in Firebase (NOTE: do not use your account name or password that is used elsewhere, this application was made for test purposes and is NOT safe). Database is only temporary and will shut down in 1 month. There is some simple input check when registrating.</br>
After registration user can login (the login request is sent to the database and checked for if valid) and will be redirected to order tab. In the order tab user can add items to the database (simulates purchase).</br>
The last tab is All orders tab where every1 can see user IDs and corresponding purchases. Note that when new ID/User is registered there is also a log in all orders tab (product code and quantity is set to 0).</br>
