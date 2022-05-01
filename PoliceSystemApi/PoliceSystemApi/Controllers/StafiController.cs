using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PoliceSystemApi.Data;
using PoliceSystemApi.Models;

namespace PoliceSystemApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StafiController : ControllerBase
    {
        private readonly PoliceSystemDbContext _context;

        public StafiController(PoliceSystemDbContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<IEnumerable<Stafi>> Get()
           => await _context.Stafi.ToListAsync();
        

        [HttpGet("id")]
        [ProducesResponseType(typeof(Stafi), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetById(int id)
        {
            var stafi = await _context.Stafi.FindAsync(id);

            return stafi == null ? NotFound() : Ok(stafi);  
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        public async Task<IActionResult> Create(Stafi stf)
        {
            await _context.Stafi.AddAsync(stf);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = stf.Id }, stf);
        }


        [HttpPut("id")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Update(int id, Stafi stf)
        {
            if (id != stf.Id) return BadRequest();

            _context.Entry(stf).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> Delete(int id)
        {
            var stafiToDelete = await _context.Stafi.FindAsync(id);
            if(stafiToDelete == null) return NotFound();

            _context.Stafi.Remove(stafiToDelete);
            await _context.SaveChangesAsync();

            return NoContent();
        }



        //public JsonResult Get()
        //{
        //    return
        //        new JsonResult(
        //            new Stafi {
        //                Emri = "Ardian",
        //                Mbiemri = "Hoti" }
        //        );
        //}
        //[HttpPost]
        //public JsonResult Post()
        //{
        //    return
        //        new JsonResult(
        //            new Stafi
        //            {
        //                Emri = "Ardian",
        //                Mbiemri = "Hoti"
        //            }
        //        );
        //}
    }
}
