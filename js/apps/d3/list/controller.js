// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(["apps/d3/list/views", "controller/_base"], function(Views, AppController) {
    var Controller, _ref;
    return Controller = (function(_super) {
      __extends(Controller, _super);

      function Controller() {
        _ref = Controller.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Controller.prototype.initialize = function(options) {
        var _this = this;
        this.layout = this.getLayoutView();
        this.listenTo(this.layout, "show", function() {
          return _this.visRegion();
        });
        return this.show(this.layout);
      };

      Controller.prototype.visRegion = function() {
        var view;
        view = this.getDataVisView();
        return this.layout.dataVisRegion1.show(view);
      };

      Controller.prototype.getDataVisView = function() {
        return new Views.DataVis;
      };

      Controller.prototype.getLayoutView = function() {
        return new Views.Layout;
      };

      return Controller;

    })(AppController);
  });

}).call(this);
