// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    font: cc.Node = null;

    @property(cc.Node)
    back: cc.Node = null;
  
    isUpSide = false;

    flipCard() {
        this.isUpSide =!this.isUpSide;
        console.log("flipCard");
        if(this.isUpSide){ // flip to back
            cc.tween(this.font).to(0.25, {
                scaleX:0
            }).start();
    
            cc.tween(this.back).to(0.5, {
                scaleX: 1
            }).start();
        }
        else{ //flip to front
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
