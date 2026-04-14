using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NTOverheadApp.Domain.Model
{
    public class Patient
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int LastPlayedLevel { get; set; }
        public Language Language { get; set; }
        public DateTime? LastPlayedDate { get; set; }
    }
}
