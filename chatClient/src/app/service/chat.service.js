"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
var ChatService = (function () {
    function ChatService(http) {
        this.http = http;
        this.chatUrl = 'http://localhost:5000/chat/';
    }
    ChatService.prototype.sendMessage = function (user_from_id, user_to_id, message) {
        var params = {
            user_from_id: user_from_id,
            user_to_id: user_to_id,
            message: message
        };
        return this.http.post(this.chatUrl, JSON.stringify(params), {
            headers: new http_1.HttpHeaders().set('Content-Type', 'application/json'),
        }).map(function (res) {
            return res;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
    };
    ChatService.prototype.getMessages = function (me, friend) {
        return this.http.get(this.chatUrl + me + '/' + friend);
    };
    ChatService = __decorate([
        core_1.Injectable()
    ], ChatService);
    return ChatService;
}());
exports.ChatService = ChatService;
