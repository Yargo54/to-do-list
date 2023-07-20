import { makeAutoObservable } from 'mobx';

class Store {
  test = 'Тест';

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Store();
