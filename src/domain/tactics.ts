export interface TacticalDetail {
    duration: number,
    cadence: number
}
export interface Tactics {
    rounds: number,
    offense: TacticalDetail,
    defense: TacticalDetail
}