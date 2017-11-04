import subtract from 'subtract'

export default class App {
    public subtract = subtract
    public add(x: number, y: number): number {
        return x + y
    }
}
