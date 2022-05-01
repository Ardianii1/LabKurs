using Microsoft.EntityFrameworkCore;
using PoliceSystemApi.Models;

namespace PoliceSystemApi.Data
{
    public class PoliceSystemDbContext : DbContext
    {
        internal object stafi;

        public PoliceSystemDbContext(DbContextOptions<PoliceSystemDbContext> options)
            : base(options)
        { 

        }
        

        public DbSet<Stafi> Stafi { get; set; }
        public object Issues { get; internal set; }
    }
}
