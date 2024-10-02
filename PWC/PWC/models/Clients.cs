using System.ComponentModel.DataAnnotations;

namespace PWC.Models
{
  public class Clients
  {
    public int IdCliente { get; set; }

    [Required(ErrorMessage = "El nombre del cliente es obligatorio.")]
    public string NombreCliente { get; set; }

    [Required(ErrorMessage = "El teléfono del cliente es obligatorio.")]
    public string TelefonoCliente { get; set; }

    [Required(ErrorMessage = "El correo del cliente es obligatorio.")]
    [EmailAddress(ErrorMessage = "El correo electrónico no es válido.")]
    public string CorreoCliente { get; set; }

    public Clients()
    {
      // Constructor por defecto
    }
  }
}
