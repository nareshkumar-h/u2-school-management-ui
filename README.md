# html-project-template

## Features

1. Register ( Completed )
2. Login    ( Completed )
3. Notification page    (Completed)
4. Query box page    (In progress)

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
* Only logged in user can get access to view the page
* Dynamic addition of pop ups is enabled only for admins (Signed in as admin)
* All fields are required
* If you are not an admin , it will throw errors,else redirect to create notification page
* There will be text areas to add notifications, andon submitting it the new notifcation will be added to notification page  
