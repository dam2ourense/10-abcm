import { ListaCompraProvider } from './../../providers/lista-compra/lista-compra';
import { ShoppingItem } from './../../models/shopping-item/shopping-item.inteface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

  // *.32 añadir el item
  item : ShoppingItem;

  // *.36 inyecto el servicio
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private servicioListaCompra: ListaCompraProvider) {
    console.log(navParams.get("item") );
    // *.33 asignamos los datos que me llegan
    this.item = navParams.get ("item");
  }

  // *.37
  guardarItem(item:ShoppingItem){
    this.servicioListaCompra.editItem(item)
          .then(()=>{
            this.navCtrl.setRoot("HomePage");
          }
          )
  }
}
