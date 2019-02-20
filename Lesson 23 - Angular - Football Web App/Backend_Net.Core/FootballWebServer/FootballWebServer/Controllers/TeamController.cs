using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FootballWebServer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FootballWebServer.Controllers
{
    [Produces("application/json")]
    [Route("api/Team")]
    public class TeamController : Controller
    {

        [HttpGet]
        public void Index()
        {
            InitializeFifaCompetition();
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "Team A";
        }

        [HttpPost]
        public void Post([FromBody]string value)
        {

        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        private void InitializeFifaCompetition()
        {

        }
    }
}