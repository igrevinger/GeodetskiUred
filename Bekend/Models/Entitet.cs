using System.ComponentModel.DataAnnotations;

namespace Bekend.Models
{
    public abstract class Entitet
    {
        [Key]
        public int Sifra { get; set; }
    }
}
