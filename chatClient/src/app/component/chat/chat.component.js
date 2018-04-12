"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var chat_service_1 = require("../../service/chat.service");
var ChatComponent = (function () {
    function ChatComponent(route, router, chatService, userService) {
        this.route = route;
        this.router = router;
        this.chatService = chatService;
        this.userService = userService;
        this.user = this.userService.getUserConnected();
    }
    ChatComponent.prototype.friendWasSelected = function (friend) {
        this.friend = friend;
    };
    // sendMessage() {
    //   this.chatService.sendMessage(this.message);
    //   this.message = '';
    // }
    ChatComponent.prototype.ngOnInit = function () {
        // this.connection = this.chatService.getMessages().subscribe(message => {
        //   this.messages.push(message);
        // });
        // this.sub = this.route
        //   .queryParams
        //   .subscribe(params => {
        //     // Defaults to 0 if no query param provided.
        //     this.toto = +params['toto'] || 0;
        //   });
        // this.connection = this.route.queryParams
        //   .subscribe(params => {
        //     this.user = JSON.parse(params['user']);
        //   });
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: 'app-chat',
            templateUrl: './chat.component.html',
            providers: [chat_service_1.ChatService]
        })
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
