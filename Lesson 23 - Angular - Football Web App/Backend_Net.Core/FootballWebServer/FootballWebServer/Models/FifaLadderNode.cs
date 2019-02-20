using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FootballWebServer.Models
{
    public class FifaLadderNode
    {
        public Team Team { get; set; }
        public IEnumerable<FifaLadderNode> LadderNodes { get; set; }

        public FifaLadderNode()
        {
            LadderNodes = new List<FifaLadderNode>();
        }
        public void InitializeGameLevel(IEnumerable<FifaLadderNode> ladderNode)
        {
            //TODO: refactor later
            (LadderNodes as List<FifaLadderNode>).AddRange(ladderNode);
        }

    }
}
