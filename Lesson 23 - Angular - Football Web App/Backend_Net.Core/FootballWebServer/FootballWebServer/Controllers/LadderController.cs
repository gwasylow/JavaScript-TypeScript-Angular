using FootballWebServer.Interfaces;
using FootballWebServer.Models;
using FootballWebServer.Repository;
using Microsoft.AspNetCore.Mvc;

namespace FootballWebServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LadderController : ControllerBase
    {
        private readonly IFifaWorldCupRepository _fifaCupRepository;

        public LadderController(IFifaWorldCupRepository fifaCupRepository)
        {
            _fifaCupRepository = fifaCupRepository;
        }

        [HttpGet]
        public ActionResult<FifaLadderNode> GetLadder()
        {
            _fifaCupRepository.InitializeTeams(new string[] { "Wisła Kraków", "Lech Poznań", "Pogoń Szczecin", "Arka Gdynia", "Raków Częstochowa", "Stal Stalowa Wola", "Siara", "Unia Tarnów" });
            return _fifaCupRepository.ComputeWorldCup();
            
        }
    }
}