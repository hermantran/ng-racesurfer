<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <title>RaceSurfer</title>
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap-combined.min.css">
    <link rel="stylesheet" href="<% URL::to_asset("css/styles.min.css") %>">
  </head>
  
  <body>
    <ng:view></ng:view>
    <script>var paths = { base: '<% URL::base() %>', loading: '<% URL::to_asset("img/ajax-loader.gif") %>', logo: '<% URL::to_asset("img/power-by--drk.png") %>', active: '<% URL::to_action("api@active") %>', flickr: '<% URL::to_action("api@flickr") %>' };</script>
    <script src="<% URL::to_asset("js/lib/require.min.js") %>" data-main="js/main"></script>
  </body>
</html>