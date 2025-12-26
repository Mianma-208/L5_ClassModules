import Zakaz from './Zakaz.js';

export default class Dostavka extends Zakaz
{
    adress=null;
    get Adress()
    {
        return this.adress;
    }
    set Adress(value)
    {
        this.adress=value;
    }
    show()
    {
        console.log(`Номер заказа: ${this.number}, Стоимость: ${this.cost}, Готовность: ${this.ready}, Адрес: ${this.adress}`);
    }
    delete()
    {
        super.delete();
        this.adress=null;
    }
    copy()
    {
        return this;
    }
    static clone(temp)
    {
        let Clone=new Zakaz();
        Clone.number=temp.Number;
        Clone.cost=temp.Cost
        Clone.ready=temp.Ready;
        Clone.adress=temp.Adress;
        return Clone;
    }

}