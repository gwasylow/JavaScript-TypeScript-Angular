using FootballWebServer.Models;
using System.Collections.Generic;

namespace FootballWebServer.Interfaces
{
    public interface IFifaWorldCupRepository
    {
        FifaLadderNode InitializeGame();
        void PlayMatches();
    }
}
