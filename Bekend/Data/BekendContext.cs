using Bekend.Models;
using Microsoft.EntityFrameworkCore;

namespace Bekend.Data
{
    public class BekendContext :DbContext
    {
        public BekendContext(DbContextOptions<BekendContext> options) : base(options)
        {
            
        }

        public DbSet<Zaposlenik> Zaposlenici { get; set; }
    }
}
