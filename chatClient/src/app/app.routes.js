"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("./component/login/login.component");
var chat_component_1 = require("./component/chat/chat.component");
var page_not_found_component_1 = require("./component/page-not-found/page-not-found.component");
exports.ROUTES = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'chat', component: chat_component_1.ChatComponent },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
