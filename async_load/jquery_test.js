
$.ajax({
  url: "http://www.baidu.com",
  context: document.body
}).done(function(data) {
  console.log(data);
});