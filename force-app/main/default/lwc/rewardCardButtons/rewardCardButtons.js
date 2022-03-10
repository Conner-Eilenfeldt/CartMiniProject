import { LightningElement, api, wire } from 'lwc';
import { publish, MessageContext } from "lightning/messageService";
import CART_CHANNEL from "@salesforce/messageChannel/CartMessageChannel__c";

export default class RewardCardButtons extends LightningElement {

    @api itemTitle;
    itemCount = 0;

    @wire(MessageContext)
    messageContext;
    
    // increment itemCount
    handleAddClick() {
        this.itemCount++;
    }

    // decrement itemCount
    handleRemoveClick() {
        if (this.itemCount > 0)
            this.itemCount--;
    }

    // send data to cart
    handleSubmitClick() {

        // create message to send to cart
        let message = {
            count: this.itemCount,
            title: this.itemTitle
        };

        // send message to cart
        publish(this.messageContext, CART_CHANNEL, message);

        // reset itemCount
        this.itemCount = 0;
    }
}