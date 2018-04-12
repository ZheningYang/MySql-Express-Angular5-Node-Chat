"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var RelationshipService = (function () {
    function RelationshipService(http) {
        this.http = http;
        this.relationshipUrl = 'http://localhost:5000/relationship/';
    }
    RelationshipService.prototype.getFriendsList = function (id) {
        return this.http.get(this.relationshipUrl + 'friendsList/' + id);
    };
    RelationshipService.prototype.sendFriendRequest = function (body) {
        var bodyString = JSON.stringify(body);
        return this.http.post(this.relationshipUrl + 'sendRequest', bodyString, {
            headers: new http_1.HttpHeaders().set('Content-Type', 'application/json'),
        }).map(function (res) { return res; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    RelationshipService.prototype.acceptFriendRequest = function (body) {
        var bodyString = JSON.stringify(body);
        return this.http.post(this.relationshipUrl + 'acceptRequest', bodyString, {
            headers: new http_1.HttpHeaders().set('Content-Type', 'application/json'),
        }).map(function (res) { return res; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    RelationshipService = __decorate([
        core_1.Injectable()
    ], RelationshipService);
    return RelationshipService;
}());
exports.RelationshipService = RelationshipService;
