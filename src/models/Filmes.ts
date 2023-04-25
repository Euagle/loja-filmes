export class Filmes{
    constructor(
    private id: string,
    private name: string,
    private category: string
    )
    {}
    public getId(): string{
        return this.id
    }
     public setId(value: string): void {
        this.id = value
    }
    public getName(): string{
        return this.name
    }
    public setName(value: string): void {
        this.name = value
    }
    public getCategory(): string{
        return this.category
    }
    public setCategory(value: string): void {
        this.category = value
    }


}