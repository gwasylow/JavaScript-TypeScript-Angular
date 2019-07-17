
//declare module models {

    class Team {
        private _id: number;
        private _name: string;
        
        
        public get id() : number {
            return this._id;
        }

        public get name() : string {
            return this._name;
        }        

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

    class LadderNode {
        teamA: Team;
        teamB: Team;
        winningTeam: Team;
        score: Score;
        ladderNodes: LadderNode[];
    }

//}