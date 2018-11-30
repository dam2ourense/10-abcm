import { ShoppingItem } from './../../models/shopping-item/shopping-item.inteface';

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

// *.18 genero este servicio con ionic g provider ListaCompra

@Injectable()
export class ListaCompraProvider {

  // *.20 cramos la referencia de la lista
  private refListaCompra = this.db.list<ShoppingItem>('listaCompra');
  // *.19 inyectamos un AgularFireDatabase
  constructor(private db:AngularFireDatabase) {

  }

  // *.21 subo el item a la BBDD en internet 
  addItem(item:ShoppingItem){
    return this.refListaCompra.push(item);
  }

  // *.24 
  getItemList(){
    return this.refListaCompra;
  }

  // *.35
  editItem(item:ShoppingItem){
    return this.refListaCompra.update(item.key, item);
  }

  // *.39
  deleteItem(item:ShoppingItem){
    return this.refListaCompra.remove (item.key);
  }
}
