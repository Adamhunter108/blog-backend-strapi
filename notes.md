For deployment to Heroku:
[this strapi guide](https://strapi.io/blog/deploying-a-strapi-api-on-heroku)

and also you have to add the .env variables to Heroku environment

---
---

Uploading images to AWS:
[AWS S3 Provider](https://www.npmjs.com/package/@strapi/provider-upload-aws-s3)
```sh
# install provider
npm i @strapi/provider-upload-aws-s3
# create config/plugins.js
touch config/plugins.js  
```
in `config/plugins.js`
```javascript
module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
```
Add env variables

Modify middlewear config