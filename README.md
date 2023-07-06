#  logged in Users can Create their own Contacts-(backend-code)
the backend enables  only user logged in to create there own contacts which is not available to other Users.
it uses access token from jsonwebtoken to verify users and bcrypt for password hashing when signing up
Contacts has: Name,email and phone
Users have: username, email and password
uses Mongodb for Storage
it may be useful when your want to verify users Authorization so that an unAuthorized user cannot get/update or delete the contacts of a different user.

### npm run dev for development or npm start (both will work).


configure your own Mongodb database and an ACCESS_TOKEN_SECRET in the .env file 
