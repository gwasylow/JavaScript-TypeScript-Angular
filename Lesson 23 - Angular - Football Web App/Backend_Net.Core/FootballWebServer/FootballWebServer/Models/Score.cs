using System;

namespace FootballWebServer.Models
{
    public class Score
    {
        public int ScoreA { get; private set; }
        public int ScoreB { get; private set; }

        public Score()
        {
            while (ScoreA == ScoreB)
            {
                ScoreA = new Random().Next(0, 10);
                ScoreB = new Random().Next(0, 10);
            }
        }
    }
}
