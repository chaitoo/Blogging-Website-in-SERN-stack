class RBAC {
    constructor(opts) {
        this.init(opts);
    }

    init(roles) {
        if(typeof roles !== 'object') {
            throw new TypeError('Expected an object as input');
        }

        this.roles = roles;
        let map = {};
        Object.keys(roles).forEach(role => {
            map[role] = {
                can: {}
            };
            if(roles[role].inherits) {
                map[role].inherits = roles[role].inherits;
            }

            roles[role].can.forEach(operation => {
                if(typeof operation === 'string') {
                    map[role].can[operation] = 1;
                } else if(typeof operation.name === 'string'
                    && typeof operation.when === 'function') {

                    map[role].can[operation.name] = operation.when;
                }
            });

        });

        this.roles = map;
    }

    can(role, operation, params) {

    if(!this.roles[role]) {
        return false;
    }
    let $role = this.roles[role];

    if($role.can[operation]) {

        if(typeof $role.can[operation] !== 'function') {
            return true;
        }

        if($role.can[operation](params)) {
            return true;
        }
    }


    if(!$role.inherits || $role.inherits.length < 1) {
        return false;
    }


    return $role.inherits.some(childRole => this.can(childRole, operation, params));
}

}

let roles = {
    superadmin: {
        can: ['publish'],
        inherits: ['curator']
    },
    curator: {
      can: ['write','edit'],
      inherits: ['user']
    },
    writer: {
        can: ['write', {
            name: 'edit',
            when: function (params) {
                return params.user.id === params.post.owner;
            }
        }],
        inherits: ['user']
    },
    user: {
        can: ['read']
    }
}
// console.log(typeof roles);
var rolesList = new RBAC(roles);
// console.log(rolesList.can('writer','edit',{user:{id:1},post:{owner:1}}));

export default rolesList;
