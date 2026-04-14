using Microsoft.AspNetCore.Mvc;
using NTOverheadApp.Domain.Model;

namespace NTOverheadApp.Api.Controllers
{
    [Controller]
    [Route("api/patients")]
    public class PatientController : ControllerBase
    {
        public IActionResult GetPatient()
        {
            var patient = new Patient
            {
                Id = 1,
                FirstName = "Test",
                LastName = "Test",
                LastPlayedLevel = 1,
                Language = Language.nl
            };

            return Ok(patient);
        }
    }
}
