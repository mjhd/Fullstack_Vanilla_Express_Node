app.get('/graph_static.js', function (req, res) {
  res = app.set_options(res)
  res.sendFile("/home/runner/FullstackVanillaExpressNode/assets/graph_static.js")
})