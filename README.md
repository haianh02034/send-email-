# send-email-
====================================================
edit at file ..\email-sender-api\src\app.module.ts
    auth: {
          user: 'your-email@gmail.com',
          pass: 'your-email-password',
        },

====================================================
send file 
    edit ..\email-sender-api\src\attachments . Replace with the file you want to send
edit at file  ..\email-sender-api\src\app.service.ts   
    attachments: [
          {
            filename: 'test.txt', // Tên file đính kèm
            path: join(__dirname, '..', 'src', 'attachments', 'demo.txt'), // Đường dẫn tới file đính kèm
          },
        ],

=====================================================
cd email-form
## Installation

```bash
$ npm install
```
## Running the app
```
### `npm start`
```
=====================================================

cd email-sender-api
## Installation
```bash
$ npm install
```

## Running the app

```bash
$ npm run start

