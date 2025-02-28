using System.ComponentModel.DataAnnotations.Schema;

namespace Bekend.Models
{
    public class Zaposlenik :Entitet
    {

        public string Ime { get; set; }
        public string Prezime { get; set; }
        public string OIB { get; set; }

    }
}
