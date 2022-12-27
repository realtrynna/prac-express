import http from "http";

import { bootStrap } from "./app";

bootStrap()
    .then(app => {
        const server = http.createServer(app);
        
        server.listen(1000, () => console.log(app.get("port")));
    });