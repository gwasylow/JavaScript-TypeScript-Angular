using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FootballWebServer.Models
{

    public class FifaLadderNode : ICloneable
    {
        public Team TeamA { get; set; }
        public Team TeamB { get; set; }
        public Team WinningTeam { get; set; }

        public Score Score { get; set; }
        public List<FifaLadderNode> LadderNodes { get; set; }

        public FifaLadderNode this[int index]
        {
            get { return LadderNodes[index]; }
        }

        public FifaLadderNode()
        {
            LadderNodes = new List<FifaLadderNode>();
        }
        public void InitializeGameLevel(List<FifaLadderNode> ladderNode)
        {
            LadderNodes.AddRange(ladderNode);
        }
        public void PlayMatch()
        {
            Score = new Score();
            if (Score.ScoreA > Score.ScoreB)
                WinningTeam = TeamA;
            else
                WinningTeam = TeamB;
        }

        public object Clone()
        {
            return MemberwiseClone();
        }
    }
}
