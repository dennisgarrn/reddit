System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "github:*": "lib/github/*"
  },

  map: {
    "angular": "github:angular/bower-angular@1.4.8",
    "angular-material": "github:angular/bower-material@0.11.4",
    "angular-ui-router": "github:angular-ui/ui-router@0.2.15",
    "github:angular-ui/ui-router@0.2.15": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-angular-animate@1.4.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-angular-aria@1.4.8": {
      "angular": "github:angular/bower-angular@1.4.8"
    },
    "github:angular/bower-material@0.11.4": {
      "angular": "github:angular/bower-angular@1.4.8",
      "angular-animate": "github:angular/bower-angular-animate@1.4.8",
      "angular-aria": "github:angular/bower-angular-aria@1.4.8",
      "css": "github:systemjs/plugin-css@0.1.20"
    }
  }
});
