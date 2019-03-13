using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FootballWebServer.Models
{

    public class FifaLadderNode
    {
        public Team TeamA { get; set; }
        public Team TeamB { get; set; }
        public MatchScore Score { get; set; }
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

    }
}
