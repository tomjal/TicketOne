using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace t1_server_dotnet.Controllers
{
    [Route("api/[controller]")]
    public class InfoController : Controller
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "version_1", "status_alive" };
        }
    }
}
