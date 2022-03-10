import { LightningElement } from 'lwc';

import BLACK_HAT from '@salesforce/resourceUrl/black_hat';
import BLACK_SHIRT from '@salesforce/resourceUrl/black_shirt';
import BOUND_NOTEBOOK from '@salesforce/resourceUrl/bound_notebook';
import CARABINER from '@salesforce/resourceUrl/carabiner';
import DRAWSTRING_BAG from '@salesforce/resourceUrl/drawstring_bag';
import GRAY_HAT from '@salesforce/resourceUrl/gray_hat';
import GRAY_SHIRT from '@salesforce/resourceUrl/gray_shirt';
import KOOZIE from '@salesforce/resourceUrl/koozie';
import MUG from '@salesforce/resourceUrl/mug';
import PEN from '@salesforce/resourceUrl/pen';
import POWERBANK from '@salesforce/resourceUrl/powerbank';
import STICKERS from '@salesforce/resourceUrl/stickers';
import STICKY_NOTEPAD from '@salesforce/resourceUrl/sticky_notepad';
import STRESS_BALL from '@salesforce/resourceUrl/stress_ball';

const REWARDS = [
    {
        title: 'Black Hat',
        url: BLACK_HAT
    },
    {
        title: 'Black Shirt',
        url: BLACK_SHIRT
    },
    {
        title: 'Bound Notebook',
        url: BOUND_NOTEBOOK
    },
    {
        title: 'Carabiner',
        url: CARABINER
    },
    {
        title: 'Drawstring Bag',
        url: DRAWSTRING_BAG
    },
    {
        title: 'Gray Hat',
        url: GRAY_HAT
    },
    {
        title: 'Gray Shirt',
        url: GRAY_SHIRT
    },
    {
        title: 'Koozie',
        url: KOOZIE
    },
    {
        title: 'Mug',
        url: MUG
    },
    {
        title: 'Pen',
        url: PEN
    },
    {
        title: 'Powerbank',
        url: POWERBANK
    },
    {
        title: 'Stickers',
        url: STICKERS
    },
    {
        title: 'Sticky Notepad',
        url: STICKY_NOTEPAD
    },
    {
        title: 'Stress Ball',
        url: STRESS_BALL
    }
]

export default class RewardShopContainer extends LightningElement {
    rewards = REWARDS;
}