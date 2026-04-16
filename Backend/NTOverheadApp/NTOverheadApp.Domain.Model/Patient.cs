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
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public Language Language { get; set; }
        public DateTime? LastPlayedDate { get; set; }
        public int LevelSpotTheDifference { get; set; } = 1;
        public int LevelVoorwerpenLokaliseren { get; set; } = 1;
        public int LevelDoolhof1 { get; set; } = 1;
        public int LevelDoolhof2 { get; set; } = 1;
        public int LevelBoodschappen { get; set; } = 1;
        public int LevelMensenTellen { get; set; } = 1;
        public int DifficultyId { get; set; } = 1;
    }
}
