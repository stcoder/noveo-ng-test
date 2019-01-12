// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  yandex_api: {
    auth: {
      url: 'https://oauth.yandex.ru/authorize',
      client_id: '3859864e3a404a17bdb6b5e5cfd6f916'
    },
    disk: {
      url: 'https://cloud-api.yandex.net/v1/disk'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related type stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an type is thrown.
 */
// import 'zone.js/dist/zone-type';  // Included with Angular CLI.
