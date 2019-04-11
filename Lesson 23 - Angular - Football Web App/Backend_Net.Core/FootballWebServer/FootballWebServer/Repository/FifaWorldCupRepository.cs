using FootballWebServer.Interfaces;
using FootballWebServer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FootballWebServer.Repository
{
    public class FifaWorldCupRepository : IFifaWorldCupRepository
    {
        private List<Team> TeamCollection { get; set; }
        public FifaLadderNode Root {get; private set; }
        public FifaWorldCupRepository()
        {
            Root = new FifaLadderNode();
        }

        public void InitializeTeams(string[] Teams)
        {
            TeamCollection = new List<Team>();

            for (int i = 0; i < Teams.Length; i++)
            {
                string team = Teams[i];
                TeamCollection.Add(new Team
                {
                    Id = i+1,
                    Name = team
                });
            }
        }

       
        public FifaLadderNode ComputeWorldCup()
        {
            while(TeamCollection.Any())
            {
                var tmpNode = new FifaLadderNode();
                
                tmpNode.TeamA = RandTeam();
                tmpNode.TeamB = RandTeam();
                tmpNode.PlayMatch();
                Root.LadderNodes.Add(tmpNode);
            }


            while (Root.LadderNodes.Count > 1)
            {
                var tmpRoot = new FifaLadderNode();
                for (int i = 0; i < Root.LadderNodes.Count; i += 2)
                {
                    var tmpNode = new FifaLadderNode();
                    tmpNode.TeamA = Root.LadderNodes[i].WinningTeam;
                    tmpNode.LadderNodes.Add(Root.LadderNodes[i]);
                    tmpNode.TeamB = Root.LadderNodes[i + 1].WinningTeam;
                    tmpNode.LadderNodes.Add(Root.LadderNodes[i+1]);
                    tmpNode.PlayMatch();
                    tmpRoot.LadderNodes.Add(tmpNode);
                }
                Root = tmpRoot.Clone() as FifaLadderNode;
            }

            return Root.LadderNodes[0];
        }

        private Team RandTeam()
        {
            var randomIndex = new Random().Next(0, TeamCollection.Count);
            var tmpTeam = TeamCollection[randomIndex].Clone() as Team;
            TeamCollection.RemoveAt(randomIndex);
            return tmpTeam;
        }
    }
}
