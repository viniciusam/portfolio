// import { OpaqueToken } from '@angular/core';

// export let APP_CONFIG = new OpaqueToken('app.config');

export interface AppConfig {
    apiBaseUrl: string;
    themeRoot: string;
}

// export let APP_CONFIG_DATA: AppConfig = {
//     apiUrl: 'http://wp.viniciusam.com/wp-json/wp/v2/',
//     themeRoot: ''
// };

export const APP_CONFIG: AppConfig = {
    apiBaseUrl: 'http://wp.viniciusam.com/wp-json/wp/v2/',
    // apiUrl: 'http://localhost:8080/wp-json/wp/v2/',
    themeRoot: ''
};
