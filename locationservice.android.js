"use strict";
var app = require("application");
function startService(uuid, url) {
    if (app.android) {
        var Intent = android.content.Intent;
        var intent = new Intent(app.android.context, com.github.robophil.location_service.LocationService.class);
        intent.putExtra("UUID", uuid);
        intent.putExtra("URL", url);
        //start service
        app.android.context.startService(intent);
    }
    else {
        console.log("Android only service.....intrested in IOS premium ?? ;)");
    }
}
exports.startService = startService;
//# sourceMappingURL=locationservice.android.js.map