function buildConfig(env) {
  console.log('./config/' + env + '.js');
  return require('./config/' + env + '.js')(env)
}

module.exports = buildConfig;
