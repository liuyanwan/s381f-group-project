# s381f-group-project
Group: 45
Name:
 Liu yanwan(12619346)

Application link: https://horoscope-checking.onrender.com

********************************************

# Login
Through the login interface, each user can access the horoscope checking system by entering their username and password. 

Each user has a userID and oassword;
[
  {userId: user1, password: pass123},
  {userId: user2, password: pass123},
  {userId: user3, password: pass123}
]

After successful login, userid is stores in seesion.

********************************************
# Logout
In the home page, each user can log out their account by clicking logout.

********************************************
# CRUD service
-Create 
- A horoscope document may contain the following attributes with an example:
  1) Constellation name (Aries)
  2) Constellation ID (01), constellation id must be 2 digits 
3) Birth date (21/03– 19/04)
  4) Constellation star chart (aries.jpg), the type is jgp.

Birth date and constellation ID is mandatory, and other attributes are optional.
Create operation is post request, and all information is in body of request.


********************************************
# CRUD service
-	Read
-	There are two options to read and find horoscope list all information or searching by Birth day.
1)	List all information
Display.ejs will be displayed with all constellation ID;
Clicking on constellation ID, the details will be shown;

2)	Search by Birth day
Input birth day of your own to find your horoscope. (00/00)
Birth day is in the body of post request, and in display.ejs constellation id will be as shown as link;
Clicking on constellation ID, the details will be displayed;

********************************************
# CRUD service
-	Update
-	The user can update their own constellation personality traits through the details interface.
-	Among the attribute shown above, constellation id cannot be changed. Since constellation ID is fixed, constellation ID is searching criteria for updating information.  
-	A horoscope document may contain the following attributes with an example:
1) Name (Aries)
2) Constellation ID (01), constellation id must be 2 digits 
3) Birth date (21/03 – 19/04)
4) Constellation star chart (01-star.jpg), the type is jgp.
5) character traits (...high energy,confident..)
In example, we update the character traits only.

********************************************
# CRUD service
-	Delete
-	The user can delete the character traits of horoscope information through the details interface.
********************************************
# Restful
In this project, there are three HTTP request types, post, get and delete.
-	Post
Post request is used for insert.
Path URL: /api/item/constellationID/: constellationID
Test: curl -X POST -H "Content-Type: application/json" --data '{"name": " Aries ", " constellationID ":"01"}'localhost:8099/api/item/ constellationID /01/name/Aries

-	Get
Get request is used for find.
Path URL: /api/item/constellationID/: constellationID                                      
Test: curl -X GET http://localhost:8099/api/item/ constellationID /01
-	Delete
Delete request is used for deletion.
Path URL: /api/item/constellationID/: constellationID
Test: curl -X GET http://localhost:8099/api/item/ constellationID /01

For all request CRUD services, login should be done firstly.

curl -X POST -H "Content-Type: application/json" --data '{"name": " Aries ", " constellationID ":"01"}'localhost:8099/api/item/ constellationID /01/name/Aries

curl -X GET http://localhost:8099/api/item/ constellationID /01

curl -X GET http://localhost:8099/api/item/ constellationID /01
