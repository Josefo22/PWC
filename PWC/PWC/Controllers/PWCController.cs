using System.ComponentModel.DataAnnotations;

namespace PWC.Models
{
  public class Client
  {
    [Key] // Indica que esta propiedad es la clave primaria
    public int IdCliente { get; set; }

    [Required(ErrorMessage = "El nombre del cliente es obligatorio.")]
    public string NombreCliente { get; set; }

    [Required(ErrorMessage = "El teléfono del cliente es obligatorio.")]
    public string TelefonoCliente { get; set; }

    [Required(ErrorMessage = "El correo del cliente es obligatorio.")]
    [EmailAddress(ErrorMessage = "El formato del correo electrónico no es válido.")]
    public string CorreoCliente { get; set; }

    public Client()
    {
    }
  }
}
