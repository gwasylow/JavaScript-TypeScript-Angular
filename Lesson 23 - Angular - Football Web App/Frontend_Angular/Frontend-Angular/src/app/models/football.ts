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
        scoreA: number;
        scoreB: number;
    }

    export class LadderNode {
        teamA: TeamA;
        teamB: TeamB;
        winningTeam: WinningTeam;
        score: Score;
        ladderNodes: LadderNode[];
    }

}