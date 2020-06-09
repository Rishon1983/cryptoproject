# cryptoproject  

## Builded a Web Application with the following requirements:  
### 1. Created express.js: “Server1”  
a. Added a connection to MongoDB  
b. Created Users schema: (username: Cymulate, password: Cymulate)  
c. Added Authentication via passport.js (JWT)  
d. Send data &amp; requests to “Server2” with AES encryption  
e. Receive the data from “Server2”, decrypt it and send to the client  
f. Added Audit log Schema for create, update and delete operations  

### 2. Created express.js “Server2”  
 
a. Created Settings schema: (key: String, value: JSON)  
b. JSON: {“a”: {“b”: {“c”: “d”} } } - some nested json  
c. Get the data from Server1, decrypt it and save to MongoDB  

### 3. Handle 4 routes: (for one row only in Settings collection)  

a. Get  
b. Create  
c. Edit  
d. Delete  

### 4. Created Vue Client application  

a. View  
b. Login  
b. Buttons for: create, update and delete  

### Additional Information:  
1. ES6 +  
2. MVC Architecture  
3. Data Encryption transport  
4. Audit log  
5. Clean code  

# Project setup  

### Install MongoDB (localhost:27017)

### DB structure:  

- cymulate
     - Collections
          - logs
          - settings
          - users
               - _id : ObjectId
               - username : Cymulate
               - password : Cymulate
               
### Compiles and minifies
```
npm run build
```

### Setup
```
npm install
```

### Run servers (Command Prompt/Shell/Terminal...)
```
node path_to_project\cryptoproject\src-server\server.js
```

```
node path_to_project\cryptoproject\src-server2\server.js
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Use a Web Application
```
http://localhost:8080/
```
