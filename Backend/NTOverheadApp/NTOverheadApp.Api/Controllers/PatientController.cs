using Microsoft.AspNetCore.Mvc;
using NTOverheadApp.Domain.Model;

namespace NTOverheadApp.Api.Controllers
{
    [Controller]
    [Route("api/patients")]
    public class PatientController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetPatient()
        {
            var patient = new Patient
            {
                Id = 1,
                FirstName = "Test",
                LastName = "Test",
                Language = Language.nl
            };

            return Ok(patient);
        }
    }
}
