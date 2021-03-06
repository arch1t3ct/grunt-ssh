/*
 * grunt-ssh
 * https://github.com/ajones/grunt-ssh
 *
 * Copyright (c) 2012 Andrew Jones
 * Licensed under the MIT license.
 */
exports.init = function (grunt) {
  'use strict';

  var exports = {};

  exports.port = 22;

  // Ensures the string is set and valid
  exports.validateString = function (name, string) {
    if (!string) {
      grunt.warn('Missing ' + name + ' property.');
      return false;
    }
    if (grunt.util._.isFunction(string)) {
      string = string(grunt);
    }
    if (!grunt.util._(string).isString()) {
      grunt.warn('The ' + name + ' property must be a string.');
      return false;
    }
    return string;
  };

  // Ensures the string is set and valid then processes the template
  exports.validateStringAndProcess = function (name, string) {
    return grunt.template.process(exports.validateString(name, string));
  };

  // Ensures the number is set and valid
  exports.validateNumber = function (name, number) {
    if (!number) {
      grunt.warn('Missing ' + name + ' property.');
      return false;
    }
    if (!grunt.util._(number).isNumber()) {
      grunt.warn('The ' + name + ' property must be a number.');
      return false;
    }
    return number;
  };

  return exports;
};