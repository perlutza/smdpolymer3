import { PolymerElement } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PaperButtonBehavior } from '@polymer/paper-behaviors/paper-button-behavior';
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class MyView2 extends PolymerElement {
  static get template() {
    return html`
    <style include="shared-styles">
      :host {
        display: block;

        padding: 10px;
      }
  




    </style>

    <div class="card">
      <div class="circle">2</div>
      <h1 span="greeting">[[bunvenit(welcome)]]</h1>
      <h2>[[_porcusori(porc,poarca)]]</h2>
       <img src=/images/guineea.jpg>
      <p>Ea duis bonorum nec, falli paulo aliquid ei eum.</p>
      <p>Id nam odio natum malorum, tibique copiosae expetenda mel ea.Detracto suavitate repudiandae no eum. Id adhuc minim soluta nam.Id nam odio natum malorum, tibique copiosae expetenda mel ea.</p>
    </div>
`;
  }

static get properties(){
  return{ 
  poarca:{
  type:String,
  value:'perlutza',

},

porc:{
  type:String,
  value: 'pupi'
},

welcome:{
  type:String,
  value:'hello'
  
},



cainii:{
  type:String,
  value:'pufi'
}
  };
}

_porcusori(a,b){
  const sobolani = 'sufletele mici'
  return a + ' si ' + b + ' ' + ' doua ' + sobolani
}

bunvenit(c){
  return alert(c)
}








  
  
  








  static get is() { return 'my-view2'; }
}

window.customElements.define(MyView2.is, MyView2);
