var app = app || {};

app.d = new Date();
app.n = app.d.getHours();
app.bw = "url('http://unsplash.it/g/2400/1600/?random')";
app.colour = "url('http://unsplash.it/2400/1600/?random')";

app.check = function() {
  if (app.n % 2 === 0) {
    $('body').css('background-image', `${app.bw}`);
  } else {
    $('body').css('background-image', `${app.colour}`);
  };
};

app.init = function() {
  app.check();
};

$(function() {
  app.init();
});