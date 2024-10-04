using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PWC.Data;
using PWC.Models;
using System.Threading.Tasks;

namespace PWC.Controllers
{


  [Route("api/[controller]")]
  [ApiController]
  public class ClientsController : ControllerBase
  {
    private readonly ApplicationDbContext _context;
   
    public ClientsController(ApplicationDbContext context)
    {
      _context = context;
    }

    // Método para crear cliente (POST)
    [HttpPost("{id}")]
    public async Task<ActionResult<Client>> CreateClient(Client client)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState); // Retorna errores de validación
      }

      _context.Clients.Add(client); // Agregar cliente
      await _context.SaveChangesAsync(); // Guardar cambios

      return CreatedAtAction(nameof(CreateClient), new { id = client.IdCliente }, client); // Retornar respuesta
    }

    // Método para editar cliente (PUT)
    [HttpPut("{id}")]
    public async Task<IActionResult> EditClient(int id, Client client)
    {
      if (id != client.IdCliente)
      {
        return BadRequest("ID de cliente no coincide"); // Verifica que el ID coincida
      }

      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState); // Retorna errores de validación
      }

      _context.Entry(client).State = EntityState.Modified; // Marca el cliente como modificado

      try
      {
        await _context.SaveChangesAsync(); // Guarda los cambios
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ClientExists(id))
        {
          return NotFound("Cliente no encontrado"); // Verifica que el cliente exista
        }
        else
        {
          throw;
        }
      }

      return NoContent(); // Retorna una respuesta vacía pero exitosa
    }

    // Método para eliminar cliente (DELETE)
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteClient(int id)
    {
      var client = await _context.Clients.FindAsync(id); // Busca el cliente por ID
      if (client == null)
      {
        return NotFound("Cliente no encontrado");
      }

      _context.Clients.Remove(client); // Elimina el cliente
      await _context.SaveChangesAsync(); // Guarda los cambios

      return NoContent(); // Retorna una respuesta vacía pero exitosa
    }

    // Método privado para verificar si el cliente existe
    private bool ClientExists(int id)
    {
      return _context.Clients.Any(e => e.IdCliente == id);
    }
  }
}
