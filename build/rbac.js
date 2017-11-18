'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RBAC = function () {
    function RBAC(opts) {
        _classCallCheck(this, RBAC);

        this.init(opts);
    }

    _createClass(RBAC, [{
        key: 'init',
        value: function init(roles) {
            if ((typeof roles === 'undefined' ? 'undefined' : _typeof(roles)) !== 'object') {
                throw new TypeError('Expected an object as input');
            }

            this.roles = roles;
            var map = {};
            Object.keys(roles).forEach(function (role) {
                map[role] = {
                    can: {}
                };
                if (roles[role].inherits) {
                    map[role].inherits = roles[role].inherits;
                }

                roles[role].can.forEach(function (operation) {
                    if (typeof operation === 'string') {
                        map[role].can[operation] = 1;
                    } else if (typeof operation.name === 'string' && typeof operation.when === 'function') {

                        map[role].can[operation.name] = operation.when;
                    }
                });
            });

            this.roles = map;
        }
    }, {
        key: 'can',
        value: function can(role, operation, params) {
            var _this = this;

            if (!this.roles[role]) {
                return false;
            }
            var $role = this.roles[role];

            if ($role.can[operation]) {

                if (typeof $role.can[operation] !== 'function') {
                    return true;
                }

                if ($role.can[operation](params)) {
                    return true;
                }
            }

            if (!$role.inherits || $role.inherits.length < 1) {
                return false;
            }

            return $role.inherits.some(function (childRole) {
                return _this.can(childRole, operation, params);
            });
        }
    }]);

    return RBAC;
}();

var roles = {
    superadmin: {
        can: ['publish'],
        inherits: ['curator']
    },
    curator: {
        can: ['write', 'edit'],
        inherits: ['user']
    },
    writer: {
        can: ['write', {
            name: 'edit',
            when: function when(params) {
                return params.user.id === params.post.owner;
            }
        }],
        inherits: ['user']
    },
    user: {
        can: ['read']
    }
    // console.log(typeof roles);
};var rolesList = new RBAC(roles);
// console.log(rolesList.can('writer','edit',{user:{id:1},post:{owner:1}}));

exports.default = rolesList;
//# sourceMappingURL=rbac.js.map