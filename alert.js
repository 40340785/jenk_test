<html>
  <head><title>Toxic DOM</title></head>
  <body>
    <script>
      var postMessageHandler = function(msg) {
  var content = JSON.parse(msg.data);
  document.write('<scr' + 'ipt src="' + content.url +'"></scr' + 'ipt>');
};
alert(document.domain)
window.addEventListener('message', postMessageHandler, false);

    </script>
  </body>
</html>

