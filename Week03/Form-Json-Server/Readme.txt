JSON SERVER
1- git init -y
2- git i json-server
3- Folder=> database/db.json
{"user":[
    {"id":1,
    "name":"x",
    "surname":"y",
    "email":"exam@gmx"
    }
]}
4-package.json => script - test
 script= "start": "json-server --watch ./database/db.json"
 5- npm start
 6- use endpoint...