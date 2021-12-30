# U&sup2; - School Management App

######Git-hub Link: https://github.com/fwsa-batch-02/u2-school-management-ui

######Netlify link: https://u2-school-management-meenu.netlify.app/

######Sonarcloud link: https://sonarcloud.io/project/overview?id=fwsa-batch-02_u2-school-management-ui
## Features

1. Register ( Completed )
2. Login    ( Completed )
3. Notification page    (Completed)
4. Query box page    (In progress)

### Register

###### Two kinds of registration features are accomodated

#####1. Student's Registration :
  
######&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fields

* User name
* User mail id
* Password
* Confirm Password
  
######&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acceptance Criteria
* All input fields are required.
* User name must contain 3 characters and must not be empty.
* Email id must contain 2 characters before the suffix @gmail.com.
* Email id entered must not exist in local storage already.
* Password and Confirm password fields must contain minimum 8 and maximum 15 characters with atleast 1 lowercase, 1 uppercase , 1 special character except "space".
* Password and Confirm password fields must contain same value.
* If everything is validated, redirect to login page.
  
#####2. Admin Registration :

######&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fields

* User name
* User mail id
* Secret code given for admins
* Password
* Confirm Password
######&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acceptance Criteria
* All input fields are required.
* User name must contain 3 characters and must not be empty.
* Email id must contain 2 characters before the suffix @gmail.com.
* Email id entered must not exist in local storage already.
* Secret code for admins is <strong>Freshwork@2001</strong>. Any other code is not accepted for successful registration.
* Password and Confirm password fields must contain minimum 8 and maximum 15 characters with atleast 1 lowercase, 1 uppercase , 1 special character except "space".
* Password and Confirm password fields must contain same value.
* If everything is validated, redirect to login page.
### Login

######&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fields

* Email id
* Password

######&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acceptance Criteria 
* All input fields are required.
* Email id and password should match with the local storage content.
* If everything is validated, redirect to home page.
  


### Notification 

#####1. List notifications :


* Only logged in user can get access to view the page (Admin or Student).
* Notifications are listed in pre to past way in the direction up to down.
* The Create notifications button is featured in such a way that admins can add up a new pop up.
  
#####2. Add notifications :
* Only users who registered and logged in as an <strong>admin</strong> can get the access for this page.
* If you are not an admin , it will throw errors.If you are and admin it will redirect to create notifications page.

######&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fields

* Title of notification
* Subtitle of notification
* Description of notification

######&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acceptance Criteria 

* All fields are required.
* There will be text areas to add notifications, and on submitting it,the new notifcation will be added to list notifications page along with the ceated time and date. 
