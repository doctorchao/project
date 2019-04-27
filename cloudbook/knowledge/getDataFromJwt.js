const jwt = require('jsonwebtoken')

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NTU0OTI1NDgsImRhdGEiOnsidXNlcklkIjoiMDAxIn0sImlhdCI6MTU1NTQ5MjQ4OH0._UlkUmyPm6nEWMJzOHmx2W5Zn0V9aFxalobSKGcPXRc'

jwt.verify(token,'ql', function(err, data){// token 至少传个空字符串，不能没有
    if(err){
        console.log(err)
    } else {
        console.log(data)
    }
}) 
