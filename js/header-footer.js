$(document).ready(function () {
fetch('/header.html')
.then(response => response.text())
.then(function (headerHtml) {
$('#main-header').html(headerHtml);
});
fetch('/footer.html')
.then(response => response.text())
.then(function (footerHtml) {
$('#main-footer').html(footerHtml);
fetch('/product.html')
.then(response => response.text())
.then(function (productHtml) {
$('#main-container').html(productHtml);
});
});
});

$(document).on("click","#register",function() {
  fetch('/profile.html')
  .then(response => response.text())
  .then(function (profileHtml) {
  $('#main-container').html(profileHtml);
  });
});

