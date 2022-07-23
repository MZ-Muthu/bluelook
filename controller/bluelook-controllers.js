var nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const multer = require("multer");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let titleController = require("./../data/title");
///////////////////////////
//////////Home////////////////
exports.getHome = (req, res) => {
  return res.render("index.ejs");
};

///////////////////////////
//////////Company////////////////

//////////About////////////
exports.getAbout = (req, res) => {
  return res.render("about.ejs");
};
//////////Process////////////
exports.getProcess = (req, res) => {
  return res.render("process.ejs");
};
//////////Testimonials////////////
exports.getTestimonials = (req, res) => {
  return res.render("testimonials.ejs");
};
//////////Life@Bluelook////////////
exports.getLife = (req, res) => {
  return res.render("life@bluelook.ejs");
};
//////////Careers////////////
exports.getCareers = (req, res) => {
  return res.render("careers.ejs");
};
//////////Engagementmodel////////////
exports.getEngagementmodel = (req, res) => {
  return res.render("engagement_model.ejs");
};
//////////////////////////////////////
////////Services///////////////
exports.getServices = (req, res) => {
  return res.render("services.ejs");
};
////////Product development - SAAS///////////////
exports.getSaas = (req, res) => {
  return res.render("saas_services.ejs");
};
////////Product development - Serveless Development///////////////
exports.getServerless = (req, res) => {
  return res.render("serverless_services.ejs");
};
////////Product development - MVP Development///////////////
exports.getMVP = (req, res) => {
  return res.render("mvp_development.ejs");
};
////////Product development - Ecommerce Development///////////////
exports.getEcommerce = (req, res) => {
  return res.render("ecommerce_services.ejs");
};
////////Mobile apps - ios Development///////////////
exports.getIOS = (req, res) => {
  return res.render("ios_services.ejs");
};
////////Mobile apps - Android Development///////////////
exports.getAndroid = (req, res) => {
  return res.render("android_services.ejs");
};
////////Mobile apps - React Development///////////////
exports.getReact = (req, res) => {
  return res.render("react_native_services.ejs");
};
////////Mobile apps - Flutter Development///////////////
exports.getFlutter = (req, res) => {
  return res.render("flutter_services.ejs");
};
////////Intelligen-Automation - AI Development///////////////
exports.getAI = (req, res) => {
  return res.render("ai_services.ejs");
};

////////Intelligen-Automation - IOT Development///////////////
exports.getIOT = (req, res) => {
  return res.render("iot_development_services.ejs");
};

////////Intelligen-Automation - RBA Development///////////////
exports.getRBA = (req, res) => {
  return res.render("rpa_services.ejs");
};

////////Intelligen-Automation - Chatbot Development///////////////
exports.getChatbot = (req, res) => {
  return res.render("chatbot_development_services.ejs");
};
////////Service - Web Development///////////////
exports.getWeb = (req, res) => {
  return res.render("web_developement_services.ejs");
};

exports.getMobile = (req, res) => {
  return res.render("mobile_app_development.ejs");
};

////////Service - UI/UX Development///////////////
exports.getUI = (req, res) => {
  return res.render("user_interface_design.ejs");
};

////////Service - Digital Marketing///////////////
exports.getDigitalmarketing = (req, res) => {
  return res.render("digital_marketing_services.ejs");
};

////////Service - staff Augumentation///////////////
exports.getStaff = (req, res) => {
  return res.render("staff_agumantation.ejs");
};

////////Service - Devops Consulting Service///////////////
exports.getDevops = (req, res) => {
  return res.render("devops-consulting-service.ejs");
};

////////Service - Digital Transfermation///////////////
exports.getDigitaltransfermation = (req, res) => {
  return res.render("digital-transfermation-services.ejs");
};

/////////////////////////////////////
////////Technologie////////////////
exports.getTechnologies = (req, res) => {
  return res.render("technology.ejs");
};

//////////Backend-Technologies/////////////
exports.getTechnologiesLaravel = (req, res) => {
  return res.render("laravel.ejs");
};
exports.getTechnologiesNode = (req, res) => {
  return res.render("nodejs.ejs");
};
exports.getTechnologiesJavaSpring = (req, res) => {
  return res.render("javaspringfoot.ejs");
};
exports.getTechnologiesAsb = (req, res) => {
  return res.render("asb.ejs");
};

//////////Frontend-Technologies/////////////
exports.getTechnologiesAngular = (req, res) => {
  return res.render("angular_technologies.ejs");
};
exports.getTechnologiesVue = (req, res) => {
  return res.render("vue_technologies.ejs");
};
exports.getTechnologiesIOS = (req, res) => {
  return res.render("ios_technologies.ejs");
};
exports.getTechnologiesAndroid = (req, res) => {
  return res.render("android_technologies.ejs");
};
exports.getTechnologiesReact = (req, res) => {
  return res.render("react_technologies.ejs");
};
exports.getBlog = (req, res) => {
  return res.render("blogs.ejs");
};
exports.getBlogAndroidDevelopmentProcess = (req, res) => {
  return res.render("android_development_process.ejs");
};
exports.getBlogFlutterAppDevelopment = (req, res) => {
  return res.render("flutter_appDevelopment.ejs");
};
exports.getProduct = (req, res) => {
  return res.render("our_products.ejs");
};

///////////Projects///////
exports.getToolflip = (req, res) => {
  return res.render("toolflip.ejs");
};
exports.gethbbms = (req, res) => {
  return res.render("hbbms.ejs");
};

exports.getSalonApp = (req, res) => {
  return res.render("salon_app.ejs");
};

// ============================================================
// industries
exports.getHealthCare = (req, res) => {
  return res.render("healthcareIndustries.ejs");
};

///////////////////////////
//////////Mail////////////////
exports.getMailData = (req, res) => {
  var Storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "./images");
    },
    filename: function (req, file, callback) {
      callback(
        null,
        file.fieldname + "_" + Date.now() + "_" + file.originalname
      );
    },
  });
  var upload = multer({
    storage: Storage,
  }).single("files"); //Field name and max count
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
      return res.end("Something went wrong!");
    } else {
      let name = req.body.name;
      let gmail = req.body.email;
      let subject = req.body.subject;
      let phone = req.body.phone;
      let body = req.body.message;
      let service = req.body.service;
      let path = req.file.path;
      console.log(req.file);
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "bluelooktechnology@gmail.com",
          pass: "cjzziehdisevvkyw",
        },
      });
      var mailOptions = {
        from: gmail,
        to: "sathya@bluelooktech.com",
        subject: subject,
        html: `<h3 align="center">Meassage Details</h3>
                <table border="1" width="100%" cellpadding="5" cellspacing="5">
                    <tr>
                        <td width="30%">Name</td>
                        <td width="70%">'${name}'</td>
                    </tr>
                    <tr>
                        <td width="30%">Email</td>
                        <td width="70%">'${gmail}'</td>
                    </tr>
                    <tr>
                        <td width="30%">Phone Number</td>
                        <td width="70%">'${phone}'</td>
                    </tr>
                    <tr>
                        <td width="30%">Subject</td>
                        <td width="70%">'${subject}'</td>
                    </tr>
                    <tr>
                        <td width="30%">From this service</td>
                        <td width="70%">'${service}'</td>
                    </tr>
                    <tr>
                        <td width="30%">Message</td>
                        <td width="70%">'${body}'</td>
                    </tr>
                </table>`,
        attachments: [
          {
            path: path,
          },
        ],
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
          fs.unlink(path, function (err) {
            if (err) {
              return res.end(err);
            } else {
              console.log("deleted");
              return res.redirect(req.get("referer"));
            }
          });
        }
      });
    }
  });
};
