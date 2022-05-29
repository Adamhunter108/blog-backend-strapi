module.exports = [
  'strapi::errors',
  // {
  //   name: 'strapi::security',
  //   config: {
  //     contentSecurityPolicy: {
  //       useDefaults: true,
  //       directives: {
  //         'connect-src': ["'self'", 'https:'],
  //         'img-src': [
  //           "'self'",
  //           'data:',
  //           'blob:',
  //           'dl.airtable.com',
  //           'adamstrapiblog.s3.us-east-2.amazonaws.com',
  //         ],
  //         'media-src': [
  //           "'self'",
  //           'data:',
  //           'blob:',
  //           'dl.airtable.com',
  //           'adamstrapiblog.s3.us-east-2.amazonaws.com',
  //         ],
  //         upgradeInsecureRequests: null,
  //       },
  //     },
  //   },
  // },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  // {
  //   name: "strapi::body",
  //   config: {
  //     formLimit: "256mb", // modify form body
  //     jsonLimit: "256mb", // modify JSON body
  //     textLimit: "256mb", // modify text body
  //     formidable: {
  //       maxFileSize: 200 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
  //     },
  //   },
  // },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
