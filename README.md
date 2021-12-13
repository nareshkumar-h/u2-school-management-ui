# html-project-template

## Features

1. Register ( Completed )
2. Login    ( Completed )
3. Notification page 


### Register
* All input fields are required.
* User name must contain 3 characters and must not be empty.
* Email id must contain 2 characters before the suffix @gmail.com.
* Email id entered must not exist in local storage already.
* Password and Confirm password fields must contain minimum 8 and maximum 15 characters with atleast 1 lowercase, 1 uppercase , 1 special character except "space".
* Password and Confirm password fields must contain same value.
* If everything is validated, redirect to login page.
  



### Login
* All input fields are required.
* Email id and password should match with the local storage content.
* If everything is validated, redirect to home page.
  


### Notification 
* Dynamic addition of pop ups is enabled only for admins
* All fields are required
* The admin names and secret codes are listed here :
    1. Chitra@01    Ch@00001
    2. Revathi@02   Re@00002
    3. Raghu@03     Ra@00003
    4. Surya@04     Su@00004
    5. Shyam@05     Sh@00005
    6. Prasanna@06  Pr@00006
    7. Selvi@07     Se@00007
    8. Jayanthi@08  Ja@00008
* If the admin names or secret codes are invalid , it will throw errors,else redirect to create notification page
* There will be text areas to add notifications, andon submitting it the new notifcation will be added to notification page  
