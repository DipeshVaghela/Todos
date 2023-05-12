import { TodoStatus } from "src/app/enums/todo-status";
import { Utility } from "../utility/utility";

export class Todo {
    private _id: number;
    private _title: string;
    private _description: string;
    private _status: TodoStatus;
    private _userId: number;
    private _createdAt: number;

    constructor(title: string = "", description: string = "", status: TodoStatus = TodoStatus.Pending, userId: number) {
        this._title = title;
        this._description = description;
        this._status = status;
        this._createdAt = Date.now();
        this._userId = userId;
        this._id = Utility.generateTodoId();
    }

    // #region Getters

    get id(): number {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }

    get status(): TodoStatus {
        return this._status;
    }

    get createdAt(): number {
        return this._createdAt;
    }

    get userId(): number {
        return this._userId;
    }

    //#endregion

    // #region Setters

    set title(title: string) {
        this._title = title;
    }

    set description(description: string) {
        this._description = description;
    }

    set status(status: TodoStatus) {
        this._status = status;
    }

    //#endregion
}