<<<<<<< HEAD

//declare module models {

    class Team {
        private _id: number;
        private _name: string;

        constructor(id : number, name : string) 
        {
            this._id = id;
            this._name = name;
        }
    }

    class Score {
=======
export module ViewModels {

    export class TeamA {
        id: number;
        name: string;
    }

    export class TeamB {
        id: number;
        name: string;
    }

    export class WinningTeam {
        id: number;
        name: string;
    }

    export class Score {
>>>>>>> 5a663ac8ea57d6625fdfd674736363599ca19579
        scoreA: number;
        scoreB: number;
    }

<<<<<<< HEAD
    class LadderNodeModel {
        teamA: Team;
        teamB: Team;
        winningTeam: Team;
=======
    export class LadderNode {
        teamA: TeamA;
        teamB: TeamB;
        winningTeam: WinningTeam;
>>>>>>> 5a663ac8ea57d6625fdfd674736363599ca19579
        score: Score;
        ladderNodes: LadderNodeModel[];
    }

//}