var TaskManager = artifacts.require("taskmanager");
 
module.exports = function(deployer) {
  deployer.deploy(TaskManager);
};