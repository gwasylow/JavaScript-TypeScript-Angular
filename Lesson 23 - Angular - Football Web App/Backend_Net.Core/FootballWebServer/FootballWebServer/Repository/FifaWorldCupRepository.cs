using System.Collections.Generic;
using FootballWebServer.Interfaces;
using FootballWebServer.Models;

namespace FootballWebServer.Repository
{
    public class FifaWorldCupRepository : IFifaWorldCupRepository
    {
        //private FifaLadderNode _fifaCupMainNode = new FifaLadderNode();

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

            //_fifaCupMainNode = primeLeague;

            return primeLeague;
        }

        public void PlayMatches()
        {
            throw new System.NotImplementedException();
        }
    }
}
