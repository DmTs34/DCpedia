"use strict";
const e = React.createElement;

//pre loader - indicates loading
class PreLoader {
    constructor() {
        this.start = function () {
            ReactDOM.render(e(ReactPreLoader),document.getElementById('root'))
        };
        this.stop = function () {
            setTimeout(()=> {
            document.getElementById('pre-loader').style.dysplay="none"
            },2000);
        };
    }
}