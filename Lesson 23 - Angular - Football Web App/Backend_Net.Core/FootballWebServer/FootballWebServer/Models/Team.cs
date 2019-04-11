using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FootballWebServer.Models
{
    public class Team : ICloneable
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public object Clone()
        {
            return MemberwiseClone();
        }
    }
}
