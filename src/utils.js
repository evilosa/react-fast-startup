Number.prototype.times = function(cb) {
  var i = -1;

  while (++i < this) {
    cb(i);
  }

  return +this;
}