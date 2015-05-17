/**
 * Created by arif on 17/5/15.
 */

angular.module('userService', [])
    .factory('users', function($http){
        return {
            find: function(email,password, callback){
                $http({
                    method: 'GET',
                    url:'Api Path',
                    data: {'email':email,'password':password} ,
                    type: 'text',
                    cache: true
                }).success(callback);
            }

        };
    });