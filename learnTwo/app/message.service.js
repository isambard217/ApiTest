System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MessageService;
    return {
        setters: [],
        execute: function () {
            MessageService = (function () {
                function MessageService() {
                }
                MessageService.prototype.getMessage = function () {
                    return ["message1", "message2", "message3"];
                };
                return MessageService;
            }());
            exports_1("MessageService", MessageService);
        }
    };
});
//# sourceMappingURL=message.service.js.map