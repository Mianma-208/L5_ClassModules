export default class Zakaz
{
    number=null;
        get Number()
        {
            return this.number;
        }
        set Number(value)
        {
            this.number=value;
        }

    cost=null;
        get Cost()
        {
            return this.cost;
        }
        set Cost(value)
        {
            this.cost=value;
        }  

    ready= false;
        get Ready()
        {
            return this.ready;
        }
        set Ready(value)
        {
            this.ready=value;
        }

    constructor(){}

    show()
    {
        console.log(`Номер заказа:${this.number}, стоимость заказа:${this.cost}, готовность заказа:${this.ready}`);
    }

    delete()
    {
        this.cost=null;
        this.number=null;
        this.ready=null;
    }

    copy()
    {
        return this;
    }

    #IsReady()
    {
        this.ready=true;
    }

    static clone(temp)
    {
        let Clone=new Zakaz();
        Clone.number=temp.Number;
        Clone.cost=temp.Cost
        Clone.ready=temp.Ready;
        return Clone;
    }
}