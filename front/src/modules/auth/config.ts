///<reference path="../../../../typings/tsd.d.ts"/>

config.$inject = ["$httpProvider"];
export function config($httpProvider: ng.IHttpProvider) {

    $httpProvider.interceptors.push(["$q", "$location", function ($q, $location) {
        return {
            "request": function (config) {
                config.headers = config.headers || {};
                if (localStorage["token"]) {
                    config.headers["Authorization"] = "Bearer " + localStorage["token"];
                }
                return config;
            },
            "responseError": function (response) {
                if (response.status === 401) {
                    $location.path("/login");
                }
                return $q.reject(response);
            }
        };
    }]);

}
