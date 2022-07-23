let express = require("express");
let routeControllers = require("./../controller/bluelook-controllers");
let router = express.Router();
//////////////////////////////////
////////////Home//////////
router.route("/").get(routeControllers.getHome);
//router.route("/").get(routeControllers.getHome);
///////////////////////////////////
//////////Company///////////
router.route("/bluelook/about").get(routeControllers.getAbout);
router.route("/bluelook/process").get(routeControllers.getProcess);
router.route("/bluelook/testimonial").get(routeControllers.getTestimonials);
router.route("/bluelook/life-at-bluelook").get(routeControllers.getLife);
router.route("/bluelook/careers").get(routeControllers.getCareers);
router
  .route("/bluelook/engagement-model")
  .get(routeControllers.getEngagementmodel);

// ///////////////////////////////////
// //////////Services/////////
router.route("/services").get(routeControllers.getServices);

// /////////Product Development///
router
  .route("/services/saas-application-development")
  .get(routeControllers.getSaas);
router
  .route("/services/serverless-development")
  .get(routeControllers.getServerless);
router.route("/services/MVP-development").get(routeControllers.getMVP);
router
  .route("/services/eCommerce-development")
  .get(routeControllers.getEcommerce);

// /////////Mobile apps/////////
router.route("/services/ios-development").get(routeControllers.getIOS);
router.route("/services/android-development").get(routeControllers.getAndroid);
router
  .route("/services/react-native-development")
  .get(routeControllers.getReact);
router.route("/services/flutter-development").get(routeControllers.getFlutter);

// //////Intelligent automation///
router.route("/services/ai-development").get(routeControllers.getAI);
router.route("/services/iot-development").get(routeControllers.getIOT);
router.route("/services/rpa-development").get(routeControllers.getRBA);
router.route("/services/chatbot-development").get(routeControllers.getChatbot);

// ///////Common//////////////
router
  .route("/services/Mobile-App-development")
  .get(routeControllers.getMobile);
router.route("/services/web-development").get(routeControllers.getWeb);
router.route("/services/ui-development").get(routeControllers.getUI);
router
  .route("/services/digital-marketing")
  .get(routeControllers.getDigitalmarketing);
router.route("/services/staff-augmentation").get(routeControllers.getStaff);
router
  .route("/services/devops-consulting-service")
  .get(routeControllers.getDevops);
router
  .route("/services/digital-transformation")
  .get(routeControllers.getDigitaltransfermation);

// ////////////////////////////
// ////////technologies///////
router.route("/technologies").get(routeControllers.getTechnologies);

//////backend-technologies//
router
  .route("/technologies/laravel-development")
  .get(routeControllers.getTechnologiesLaravel);
router
  .route("/technologies/nodeJS-development")
  .get(routeControllers.getTechnologiesNode);
router
  .route("/technologies/java-spring-foot-development")
  .get(routeControllers.getTechnologiesJavaSpring);
router
  .route("/technologies/asb-development")
  .get(routeControllers.getTechnologiesAsb);

//////frontend-technologies//
router
  .route("/technologies/angular-development")
  .get(routeControllers.getTechnologiesAngular);
router
  .route("/technologies/vue-development")
  .get(routeControllers.getTechnologiesVue);
router
  .route("/technologies/ios-development")
  .get(routeControllers.getTechnologiesIOS);
router
  .route("/technologies/android-development")
  .get(routeControllers.getTechnologiesAndroid);
router
  .route("/technologies/react-native-development")
  .get(routeControllers.getTechnologiesReact);

// ///////////////////////////////
// /////////////portfolio////////
router.route("/bluelook/our-products").get(routeControllers.getProduct);

// //////////////////////////////
// ////////////blog//////////////
router.route("/bluelook/blogs").get(routeControllers.getBlog);
router
  .route("/bluelook/blogs/android_development_process")
  .get(routeControllers.getBlogAndroidDevelopmentProcess);
router
  .route("/bluelook/blogs/flutter_app_development")
  .get(routeControllers.getBlogFlutterAppDevelopment);

// //////////////////////////////
// ///////////projects/////////
// router.route("/bluelook/projects").get(routeControllers.);
// ///////////projects/////////
router.route("/bluelook/projects/toolflip").get(routeControllers.getToolflip);
router
  .route("/bluelook/projects/bed=booking-system")
  .get(routeControllers.gethbbms);
router
  .route("/bluelook/projects/salon-application-info")
  .get(routeControllers.getSalonApp);

// ============================================================
// Industries
router
  .route("/bluelook/industries/health-care")
  .get(routeControllers.getHealthCare);

/////////////////////////////////
//////////Mail//////////

router.route("/sendMail").post(routeControllers.getMailData);

module.exports = router;
