function download(uri, nome) {
  var link = document.createElement("a");
  link.download = nome;
  link.href = uri;
  link.click();
}
