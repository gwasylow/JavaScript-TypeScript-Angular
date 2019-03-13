using System;
using System.Collections.Generic;
using System.Linq;
using FootballWebServer.Interfaces;
using FootballWebServer.Models;

namespace FootballWebServer.Repository
{
    public class FifaWorldCupRepository : IFifaWorldCupRepository
    {
        private FifaLadderNode _primeLeague;

        public FifaLadderNode InitializeGame()
        {
            var thirdLeague = new List<FifaLadderNode>
            {
                new FifaLadderNode(),
                new FifaLadderNode()
            };

            var secondLeague = new FifaLadderNode();
            secondLeague.InitializeGameLevel(thirdLeague);

            var primeLeague = new FifaLadderNode();
            primeLeague.InitializeGameLevel(new List<FifaLadderNode>() { secondLeague });

            _primeLeague = primeLeague;
            return _primeLeague;
        }

        public void PlayMatches()
        {
            if(_primeLeague != null)
            {
                var thirdPairA = _primeLeague[0][0];
                var thirdPairB = _primeLeague[0][1];

                thirdPairA.TeamA = new Team { Id = 1, Name = "Wisła Kraków" };
                thirdPairA.TeamB = new Team { Id = 2, Name = "Lech Poznań" };
                thirdPairA.Score = new MatchScore();

                thirdPairB.TeamA = new Team { Id = 3, Name = "Pogoń Szczecin" };
                thirdPairB.TeamB = new Team { Id = 4, Name = "Unia Tarnów" };
                thirdPairB.Score = new MatchScore();

                ChooseWinnerFromPair();
            }
        }


        private FifaLadderNode ChooseWinnerFromPair(int level = 0)
        {
            //if (!_primeLeague.LadderNodes.Any()) return null;
            var currentLevel = level;
            for(int i = 0; i <= _primeLeague.LadderNodes.Count;i++)
            {
                var subNode = ChooseWinnerFromPair(++currentLevel);
            }
            return null;
        }
    }
}
