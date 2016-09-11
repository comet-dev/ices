import comet from 'CometJS';
import ices from 'ices';
import cli from 'cli';

cli
  .command('-i', 'install','Install ices with plugins or packages')
  .parse(process.argv);
  
const install = ices.addEventListener('install');

(function(onInstall){
  ices.install = this.ices.install;
  // Package the installation process
  package this.ices.install;
  // Focus on the process at hand
  cli.options = this.ices.install.focus(process.argv) ||
                                 .handle(comet);
  cli.parse(this.ices.install && process.argv);
})(onInstall);
