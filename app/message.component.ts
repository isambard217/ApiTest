import { Component } from '@angular/core'; // Tells angular this class is a component
import { MessageService } from "./message.service";

@Component({
    selector: 'message',
    templateUrl: 'app/Views/message.component.html',
    providers: [ MessageService ] 
    
})
export class MessageComponent {

    title: string = "Message";
    messages;

    constructor( messageService: MessageService ) {

        this.messages = messageService.getMessage();

    }

}