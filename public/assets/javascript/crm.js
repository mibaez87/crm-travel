$(document).ready(function(){
  $('.ui.accordion').accordion();
  $('.ui.dropdown').dropdown();

});
$("#newClientSub").click(function(){
  window.location.href = "clientpage.html";
    return false;
});
$("#maindash_nav").click(function(){
  window.location.href = "maindashboard.html";
    return false;
});
$("#allclients_nav").click(function(){
  window.location.href = "clientlist.html";
    return false;
});
$("#addnewclient").click(function(){
  window.location.href = "newclient.html";
    return false;
});
$("#alldandf_nav").click(function(){
  window.location.href = "deadlineandflightdashboard.html";
    return false;
});

