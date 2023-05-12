export class Utility {
    public static generateTodoId(): number {
        return Math.round(Date.now() * Math.random());
    }
}
