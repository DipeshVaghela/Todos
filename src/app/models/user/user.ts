import { UserType } from "src/app/enums/user-type";
import { Todo } from "../todo/todo";

export class User {
    private _id: number;
    private _userName: string;
    private _password: string;
    private _firstName: string;
    private _lastName: string;
    private _type: UserType;
    private _todos: Todo[];
    private _createdAt: number;

    constructor(userName: string = "", password: string = "", firstName: string = "", lastName: string = "") {
        this._userName = userName;
        this._password = password;
        this._firstName = firstName;
        this._lastName = lastName;
        this._type = UserType.Normal;
        this._createdAt = Date.now();
        this._todos = [];
        this._id = this.createdAt;
    }

    // #region Getters

    get id(): number {
        return this._id;
    }

    get userName(): string {
        return this._userName;
    }

    get password(): string {
        return this._password;
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get type(): UserType {
        return this._type;
    }

    get todos(): Todo[] {
        return this._todos;
    }

    get createdAt(): number {
        return this._createdAt;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    //#endregion

    // #region Setters

    set password(password: string) {
        this._password = password;
    }

    set firstName(firstName: string) {
        this._firstName = firstName;
    }

    set lastName(lastName: string) {
        this._lastName = lastName;
    }

    set todos(todos: Todo[]) {
        this._todos = todos;
    }

    set type(type: UserType) {
        this._type = type;
    }

    //#endregion
}