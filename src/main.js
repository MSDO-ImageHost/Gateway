var send = require('./send.js');
var receive = require('./receive.js');


var events = ["ReturnAuthenticationToken", "ConfirmAccountCreation", 
"ConfirmInvalidateToken","ConfirmAccountReset","ConfirmSetPassword",
"ConfirmAccountDeletion", "ConfirmAccountUpdate", "ReturnAccountInfo",
"ConfirmBanUser","ConfirmFlagUser","ConfirmLikeUpdate","ReturnLikesForPost", "ReturnLikeStatus"];

receive.receiver('Gateway', events);
var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwicm9sZSI6MjAsImlzcyI6IkltYWdlSG9zdC5zZHUuZGsiLCJleHAiOjE2MDg1MjAzMjgsImlhdCI6MTYwNzIwNjMyOH0.vr2R19ECivUIxDsmvu1XGxUDXEQruQTD41kdWqVTnNM";
var msg = `{
    "post_id" : "2"
    }`;
send.publish('UpdateLike',msg, token);
