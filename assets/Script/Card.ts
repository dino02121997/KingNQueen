// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { POINT, POINT_LABEL, SUIT } from "../Constant/Common";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Card extends cc.Component {

    @property(cc.Node)
    font: cc.Node = null;

    @property(cc.Node)
    back: cc.Node = null;

    @property(cc.Label)
    pointLabel: cc.Label = null;

    @property(cc.Label)
    suitLabel: cc.Label = null;
    
  
    point: number = POINT.ACE;
    suit: string = SUIT.CLUB

    isUpSide = false;

    start () {
        cc.log("rendering");
        this.renderCard();
    }
    renderCard() {
        
        this.pointLabel.string = this.point === POINT.ACE ? this.suit : POINT_LABEL[this.point];
        this.suitLabel.string = this.point === POINT.ACE ? '' : this.suit;

        if(this.suit === SUIT.CLUB || this.suit === SUIT.SPADE){
            this.pointLabel.node.color = cc.Color.BLACK;
            this.suitLabel.node.color = cc.Color.BLACK;
        }
    }

    flipCard() {
        this.isUpSide =!this.isUpSide;
        if(this.isUpSide){ 
            // flip to back
            cc.tween(this.font).to(0.25, {
                scaleX:0
            }).start();
    
            cc.tween(this.back).to(0.5, {
                scaleX: 1
            }).start();
        }
        else{ 
            //flip to front
            cc.tween(this.back).to(0.25, {
                scaleX: 0
            }).start();

            cc.tween(this.font).to(0.25, {
                scaleX:1
            }).start();         
        }
      
    }

    // update (dt) {}
}
