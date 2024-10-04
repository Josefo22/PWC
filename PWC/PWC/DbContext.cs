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

    // DbSet para la entidad Client
    public DbSet<Client> Clients { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      base.OnModelCreating(modelBuilder);

      // Configuraciones adicionales si es necesario
      // Por ejemplo, restricciones, relaciones entre tablas, índices, etc.

      // Ejemplo de configuración personalizada
      modelBuilder.Entity<Client>(entity =>
      {
        entity.HasKey(e => e.IdCliente); // Clave primaria
        entity.Property(e => e.NombreCliente).IsRequired().HasMaxLength(100); // Restricción de longitud
        entity.Property(e => e.CorreoCliente).HasMaxLength(100); // Opcional, agregar más configuraciones según tu necesidad
      });
    }
  }
}
