const os = require('os');
const path = require('path');
const homeDir = os.homedir();
const nodejsDir = path.join(homeDir,'orgfrontend','nodejs');
const yarnDir = path.join(homeDir,'orgfrontend','yarn');
const fs = require('fs');
const https = require('https');
const wget = require('node-wget');
const config = require('./config');

var Datastore = require('nedb')
  , db = new Datastore({ 
      filename: path.resolve(__dirname,'__data__'), 
      autoload: true });

const gitClone = () => {
  console.log('Cloneing  project\'s git repo');
  return Promise.resolve();
};

const runCommandInWorkspace = () => {
  console.log('running command');
  return Promise.resolve();
};

const downloadNodejs = () => {
    console.log('downloading nodejs version 10');
    return new Promise((resolve,reject) => {
        fs.mkdir(path.join(nodejsDir,'v10.12.1'),
        { recursive: true }, (err) => {
            if (err) throw err;
            https.get('https://www.google.com');
          });
          resolve();
    });

};



const setNodejsVersoin = () => {
    console.log('Download node js versoin');

    return downloadNodejs();
};

const downloadYarn = () => {
  return new Promise((resolve,reject) => {
     wget({
       url: `https://yarnpkg.com/${config.dependencies.yarn}.tar.gz`,
       dest: path.resolve(__dirname,config.dependencies.yarn)
      },()=>{
       resolve({});
     });
    });
};

const setYarnVersioin = () => {
  return new Promise((resolve,reject) => {
    downloadYarn()
    .then( data => { 
      console.log(data);
      resolve({});
    });
  });
};

const addDatabaseEntry = () => {
    db.insert({ id: '1', name: 'New Workspace' }, 
    function (err, newDoc) {   
        // Callback is optional
        console.log(err);
      });
};

const createWorkSpace = () => {
    //clone the repository
    //if success then add to database
    //set nodejs version
    //set yarn versoin
    return gitClone()
    .then( data => setYarnVersioin())
    .catch(console.log)
    .then( data => setNodejsVersoin())
    .then( data => addDatabaseEntry())
    .catch(console.log);
};

const removeWorkSpace = () => {
      //remove entry from database
  return Promise.resolve();
};

const validateWorkspace = () => {
  return Promise.resolve();
};

const showWorkspace = () => {
    //Validate workspace
  return Promise.resolve();
};

module.exports = {
  createWorkSpace
};
