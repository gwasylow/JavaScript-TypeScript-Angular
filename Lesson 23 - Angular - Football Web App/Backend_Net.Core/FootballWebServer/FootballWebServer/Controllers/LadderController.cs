using FootballWebServer.Interfaces;
using FootballWebServer.Models;
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
            _fifaCupRepository.InitializeGame();
            _fifaCupRepository.PlayMatches();
            return null;
        }
    }
}