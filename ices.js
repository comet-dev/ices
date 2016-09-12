var ices = require('.ices');
// Copyright 2015 CometJS. All Rights Reserved.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at 
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and limitations under the License.
ices.contain("Distributable Packages");

ices.prototype.create = (function(){
  /** @protected **/
  var getPackages = this.getPackages;
  var organize = require('organize');
  var comet = require('comet');
  /** @protected **/
  ices(this.getPackages.comet.organize());
  save = function(icesFile){
    ices.prompt("Would you like to save your .ices file?");
    var filename = ".ices";
    var getfile = document.createElement("a href");
    getfile.download = filename;
    getfile.href = window.URL.display;
    getfile.onclick = collapseElement.destroy();
    getfile.click();
  }
  save('');
})(ices);


