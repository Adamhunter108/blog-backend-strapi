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

Modify `./config/middlewear.js `:
Replace `'strapi::security',` with the following:
```javascript
module.exports = [
  // ...
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'yourBucketName.s3.yourRegion.amazonaws.com',
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'yourBucketName.s3.yourRegion.amazonaws.com',
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  // ...
];
```
Then obviously go in and fill in personal AWS deets.  
Then add AWS Policy Actions:
```json
"Action": [
  "s3:PutObject",
  "s3:GetObject",
  "s3:ListBucket",
  "s3:DeleteObject",
  "s3:PutObjectAcl"
],
```

### `for Cloudinary`
[Cloudinary Provider](https://www.npmjs.com/package/@strapi/provider-upload-cloudinary)