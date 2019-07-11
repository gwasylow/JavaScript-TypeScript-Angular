
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
        scoreA: number;
        scoreB: number;
    }

    class LadderNodeModel {
        teamA: Team;
        teamB: Team;
        winningTeam: Team;
        score: Score;
        ladderNodes: LadderNodeModel[];
    }

//}