import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js'
class MyHeader extends PolymerElement {
    static get template() {
      return html`
      <style>
      </style>

      <div class=header>
      <h1>Mure?</h1>
      </div>
      
      <paper-card heading="Card title" image="" elevation="1" animated-shadow="false">
        <div class="card-content"></div>
        <div class="card-actions">
          
        </div>
      </paper-card>
      


      `;
  }

  static get is() { return 'my-header'; }
}

window.customElements.define(MyHeader.is, MyHeader);
