import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js'
import './shared-styles.js';
import './my-header.js'



class MyView1 extends PolymerElement {
  static get template() {
    return html`

    
    <style include="shared-styles">
      :host {
        display: block;

        padding: 10px;
      }
    </style>
    <my-header></my-header>
    <div class="card">
      <div class="circle">1</div>
      <h1>[[_tufi(dog1,dog2)]]</h1>
      <h2>[[_catei(dog3, dog4)]] </h2>
      <h3>[[_porci(porc1,porc2)]]</h3>
      <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
      <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
      
      <paper-button raised> test </paper-button>
      
    </div>
`;

  }


  static get properties(){
 return{
   dog1:{
     type:String,
     value:'Alma'
   },

 dog2:{
   type:String,
   value: 'Pick'
 },

 dog3:{
    type:String,
    value:'cainii'
 },

 dog4:{
   type:String,
   value:'dracului'

 },

 porc1:{
   type:String,
   value:'porci'
 },

 porc2:{
   type:String,
   value:'grasi'

 }
 };
  
  }

  _tufi(a,b){
    const text = ' reaua '
    const text2 = ' grasana '

    return a + text + b + text2
    
  }


   
 _catei(d,e){
   return d + ' ' + e
 }


 _porci(f,g){
   const tip = ' guineea '
   return f + ' de ' + tip + g
 }



 _tufarini(a,b){
   return a + ' ' + b
 }




  static get is() { return 'my-view1'; }
  
}




window.customElements.define(MyView1.is, MyView1);



  


  
