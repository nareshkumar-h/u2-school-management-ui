# U&sup2; - School Management App

###### Git-hub Link: https://github.com/fwsa-batch-02/u2-school-management-ui

###### Netlify link: https://u2-school-management-meenu.netlify.app/

###### Sonarcloud link: https://sonarcloud.io/project/overview?id=fwsa-batch-02_u2-school-management-ui
## Features

1. Register ( Completed )
2. Login    ( Completed )
3. Notification page    (Completed)
4. Query box page    (Completed)
5. Contact Us (Completed)

## Register

###### Two kinds of registration features are accomodated

##### 1. Student's Registration :
  
###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fields

* User name
* User mail id
* Password
* Confirm Password
  
###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acceptance Criteria
* All input fields are required.
* User name must contain 3 characters and must not be empty.No special characters are allowed.
* Email id must contain 2 characters before the suffix @gmail.com.
* Email id entered must not exist in local storage already.
* Password and Confirm password fields must contain minimum 8 and maximum 15 characters with atleast 1 lowercase, 1 uppercase , 1 special character except "space".
* Password and Confirm password fields must contain same value.
* If everything is validated, redirect to login page.
  
##### 2. Admin Registration :

###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fields

* User name
* User mail id
* Secret code given for admins
* Password
* Confirm Password
###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acceptance Criteria
* All input fields are required.
* User name must contain 3 characters and must not be empty.No special characters are allowed.
* Email id must contain 2 characters before the suffix @gmail.com.
* Email id entered must not exist in local storage already.
* Secret code for admins is <strong>Freshwork@2001</strong>. Any other code is not accepted for successful registration.
* Password and Confirm password fields must contain minimum 8 and maximum 15 characters with atleast 1 lowercase, 1 uppercase , 1 special character except "space".
* Password and Confirm password fields must contain same value.
* If everything is validated, redirect to login page.
## Login

###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fields

* Email id
* Password

###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acceptance Criteria 
* All input fields are required.
* Email id and password should match with the local storage content.
* If everything is validated, redirect to home page.
  
## Forgot Password

###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fields


* User mail id
* Password
* Confirm Password
  
###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acceptance Criteria
* All input fields are required.
* Email id must contain 2 characters before the suffix @gmail.com.
* Email id entered must exist in local storage already.Else error will be thrown.
* Password and Confirm password fields must contain minimum 8 and maximum 15 characters with atleast 1 lowercase, 1 uppercase , 1 special character except "space".
* Password and Confirm password fields must contain same value.
* If everything is validated, newly created password will be updated to your account and you will be redirected to the index page.

## Notification 

##### 1. List notifications :


* Only logged in user can get access to view the page (Admin or Student).
* Notifications are listed in pre to past way in the direction up to down.
* The Create notifications button is featured in such a way that admins can add up a new pop up.
  
##### 2. Add notifications :
* Only users who registered and logged in as an <strong>admin</strong> can get the access for this page.
* If you are not an admin , it will throw errors.If you are and admin it will redirect to create notifications page.

###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fields

* Title of notification
* Subtitle of notification
* Description of notification

###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acceptance Criteria 

* All fields are required.
* There will be text areas to add notifications, and on submitting it,the new notifcation will be added to list notifications page along with the ceated time and date. 
  
## Queries

##### 1. List Queries

* Only logged in user can get access to view the page (Admin or Student).
* Queries are listed in pre to past way in the direction up to down.
* It has an enabling button to add new queries.
* Visiting users can also like the query if they accept the same.
* Every query has a feature of replying in thread.

##### 2. Add queries


###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fields

* Name
* Tagging the person whom you want to question
* Description of query

###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acceptance Criteria

* All fields are required.
* Name must not be empty and should have minimum 3 to maximum 32 characters with no special characters allowed.
* Tagging the person can be done by clicking on the list of admins given in the left corner.The method of directly typing is not allowed.
* There will be text areas to add your query.
* If every field is validated the query will be submitted and also displayed in the list queries page.

##### 3. Reply in thread


* In this page, the respective query, the replies to the respective query and a textarea to add a reply will be present.
  
###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fields

* Text area to send a reply.

###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acceptance Criteria

* The send reply textbox must not be empty.
* If everything is validated ,the reply will  be updated in the view replies part of the page.


  


## Contact Us 

###### (Flow : Index page --> Visit us to Know More --> Contact us (nav bar))
##### 1. Submit Request :

##### Frequently asked questions are also available for users to refer.
###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fields

* User name
* Email id
* Their request

###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acceptance Criteria 

* All fields are required.
* User name must contain 3 characters and must not be empty.No special characters are allowed.
* Email id must contain 2 characters before the suffix @gmail.com.
* If everything is valid,success message is shown and redirected to main page of contct us feature.

##### 2. Write us Feedback :


###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fields

* User name
* Email id
* Their feedback

###### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acceptance Criteria 

* All fields are required.
* User name must contain 3 characters and must not be empty.No special characters are allowed.
* Email id must contain 2 characters before the suffix @gmail.com.
* If everything is valid,success message is shown and redirected to main page of contct us feature.

##### 3. Know About Us :

* User can visit About us, Our achievements and Terms and conditions descriptions directly from this page.