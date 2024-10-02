using Microsoft.EntityFrameworkCore;
using PWC.Models;

namespace PWC.Data
{
  public class ApplicationDbContext : DbContext
  {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Client> Clients { get; set; } // DbSet para la entidad Client

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      base.OnModelCreating(modelBuilder);
      // Configuraciones adicionales si es necesario
    }
  }
}
