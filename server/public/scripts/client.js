console.log('JSSSSS');

let app = angular.module('DoingStuffApp', []);

app.controller('DoingStuffController', ['$http', function ($http) {
    console.log('DoingStuffController has been loaded');
    let self = this;

    self.things = [];

    self.newThing = {};

    //displays a demo stay at Hyrax High-Rise!!
    self.hyraxDemo = function () {
        $http({
            method: 'GET',
            url: '/hyrax'
        })
            .then(function (response) {
                self.things = response.data;
            })
            .catch(function (error) {
                console.log('error pm /hyrax GET', error);
            });
    }

    // get request for all the things on your to-do list!! (Demo is for entertainment purposes only and does not post to database)
    self.listThings = function () {
        $http({
            method: 'GET',
            url: '/thing'
        })
            .then(function (response) {
                console.log(response);
                self.things = response.data;
            })
            .catch(function (error) {
                console.log('error on /thing GET', error);
            });
    }

    // sends new.Thing object to the server for transfer to the database
    self.createThing = function () {
        console.log('Add this to mah list:', self.newThing);
        $http({
            method: 'POST',
            url: '/thing',
            data: self.newThing
        })
            .then(function (response) {
                console.log('hoorah you got a thing!', response);
            self.listThings();
            })
            .catch(function (error) {
                console.log('error on /thing POST', error);
            });
    }

    // request Thing object deletion from the database through the server
    self.deleteThing = function (noLongerImportant) {
        console.log(noLongerImportant, 'has been taken off the list')
        $http({
            method: 'DELETE',
            url: '/thing',
            params: noLongerImportant
        })
            .then(function (response) {
                console.log(response);
            self.listThings();
            })
            .catch(function (error) {
                console.log('error on Thing DELETE', error);
            });
    }

    self.completeThing = function(thingToComplete) {
        console.log('I completed this task!:', thingToComplete);
        $http({
            method: 'PUT',
            url: '/thing',
            data: thingToComplete
        })
        .then(function(response) {
            console.log('response from PUT', response);
            self.listThings();
        })
        .catch(function(error){
            console.log('error on /thing PUT', error);
        });
    }
    
    self.listThings();
    self.hyraxDemo(); //Feel free to comment out the demo!!
}])