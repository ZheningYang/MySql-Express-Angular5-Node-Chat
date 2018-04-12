"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChatFriendsListComponent = (function () {
    function ChatFriendsListComponent(relationshipService, userService) {
        this.relationshipService = relationshipService;
        this.userService = userService;
        this.onFriendSelected = new core_1.EventEmitter();
    }
    ChatFriendsListComponent.prototype.clicked = function (friend) {
        console.log('friend selected : ' + friend.username);
        this.friend = friend;
        this.onFriendSelected.emit(friend);
    };
    ChatFriendsListComponent.prototype.getFriendsList = function () {
        var _this = this;
        var idUser = this.user['user_id'];
        this.relationshipService.getFriendsList(idUser)
            .subscribe(function (data) {
            _this.friendsList = data;
        }, function (errorCode) { return console.log(errorCode); }, function () {
            _this.clicked(_this.friendsList[0]);
        });
    };
    ChatFriendsListComponent.prototype.ngOnInit = function () {
        this.getFriendsList();
    };
    __decorate([
        core_1.Input()
    ], ChatFriendsListComponent.prototype, "user", void 0);
    __decorate([
        core_1.Output()
    ], ChatFriendsListComponent.prototype, "onFriendSelected", void 0);
    ChatFriendsListComponent = __decorate([
        core_1.Component({
            selector: 'app-chat-friends-list',
            templateUrl: './chat-friends-list.component.html',
            styleUrls: ['./chat-friends-list.component.css']
        })
    ], ChatFriendsListComponent);
    return ChatFriendsListComponent;
}());
exports.ChatFriendsListComponent = ChatFriendsListComponent;
exports.ChatFriendsListComponent = ChatFriendsListComponent;
