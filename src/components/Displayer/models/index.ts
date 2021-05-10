import { Combination } from "../../../domain/combination";

export interface ReducerAction {
    type: string,
    payload: any
}

export interface ReducerState { 
    delta: number,
    combination: Combination,
    offense: Boolean
};