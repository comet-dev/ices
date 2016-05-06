var ices = require('.ices');
ices.contain("Distributable Packages");

ices.prototype.create = function(){
  var getPackages = this.getPackages;
  var organize = require('organize');
  var comet = require('comet');
  
  ices(this.getPackages.comet.organize());
  ices.save = function(icesFile){
    ices.prompt("Would you like to save your .ices file?");
    var filename = ".ices";
    var getfile = document.createElement("a href");
    getfile.download = filename;
    getfile.href = window.URL.display;
    getfile.onclick = collapseElement.destroy();
    getfile.click();
  }
}

