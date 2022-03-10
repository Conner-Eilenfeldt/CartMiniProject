import { LightningElement, track, wire } from 'lwc';
import { subscribe, unsubscribe, MessageContext } from "lightning/messageService";
import CART_CHANNEL from "@salesforce/messageChannel/CartMessageChannel__c";

export default class Cart extends LightningElement {

    @track items = [];

    @wire(MessageContext)
    messageContext;

    subscription = null;

    // subscirbe to message channel
    connectedCallback() {
        console.log("in handle subscribe");
        if (this.subscription) {
            return;
        }

        this.subscription = subscribe(
            this.messageContext,
            CART_CHANNEL,
            (message) => {
                this.handleMessage(message);
            }
        );
    }

    // unsubscirbe to message channel
    disconnectedCallback() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    // add received item to items array
    handleMessage(message) {

        // overwrite previous entry if duplicate
        if (this.items.some(obj => obj.title == message.title)) {
            let objIndex = this.items.findIndex(obj => obj.title == message.title);

            // remove if new count is 0
            if (message.count == 0)
                this.items.splice(objIndex, 1);

            // update count
            else
                this.items[objIndex] = message;

            return;
        }

        // don't add if count is 0
        if (message.count == 0) return;

        // add item
        this.items.push(message);
    }
}