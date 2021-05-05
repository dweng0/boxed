import { ComboStatus } from "./ComboStatus";

export interface Action {
    type: string,
    payload: ComboStatus
}