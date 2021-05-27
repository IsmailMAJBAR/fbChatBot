import express from "express";
import chatBotController from "../controllers/chatBotController";
import homePageController from "../controllers/homePageController";

let router = express.Router();

let initWebRoutes =(app)=>{
 router.get("/", homePageController.getHomePage);
 router.get("/webhook", chatBotController.getWebhok);
 router.post("/webhook", chatBotController.postwebHook);

    return app.use("/", router);

};

module.exports = initWebRoutes;