declare var android: any;
declare var com: any;
declare var java: any;

import app = require("application");

export function startService(uuid: string){
    if (app.android) {
        let Intent = android.content.Intent;
        let intent = new Intent(app.android.context, com.github.robophil.location_service.LocationService.class);
        intent.putExtra("UUID", uuid);

        //start service
        app.android.context.startService(intent);
    }else{
        console.log("Android only service.....intrested in IOS premium ?? ;)")
    }
}