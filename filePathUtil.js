const base_dir = __dirname;

absolutePath = (path) => {
    return base_dir + path;
}

requireFile = (file) => {
    return require(abs_path('/' + file));
  }

module.exports = {requireFile};