declare module models {

    export interface TeamA {
        id: number;
        name: string;
    }

    export interface TeamB {
        id: number;
        name: string;
    }

    export interface WinningTeam {
        id: number;
        name: string;
    }

    export interface Score {
        scoreA: number;
        scoreB: number;
    }

    export interface LadderNode {
        teamA: TeamA;
        teamB: TeamB;
        winningTeam: WinningTeam;
        score: Score;
        ladderNodes: LadderNode[];
    }

}