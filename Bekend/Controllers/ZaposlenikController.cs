using Bekend.Data;
using Bekend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Bekend.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class ZaposlenikController : ControllerBase
    {

        // koristimo dependency injection
        // 1. definiramo privatno svojstvo
        private readonly BekendContext _context;

        // koristimo dependency injection
        // 2. proslijediš instancu kroz konstruktor
        public ZaposlenikController(BekendContext context)
        {
            _context = context;
        }


        [HttpGet]
            public IActionResult Get()
            {
                try
                {
                    return Ok(_context.Zaposlenici);
                }
                catch (Exception e)
                {
                    return BadRequest(e);
                }
            }

            [HttpGet]
            [Route("{sifra:int}")]
            public IActionResult GetBySifra(int sifra)
            {
                try
                {
                    var s = _context.Zaposlenici.Find(sifra);
                    if (s == null)
                    {
                        return NotFound();
                    }
                    return Ok(s);
                }
                catch (Exception e)
                {
                    return BadRequest(e);
                }
            }


            [HttpPost]
            public IActionResult Post(Zaposlenik zaposlenik)
            {
                try
                {
                    _context.Zaposlenici.Add(zaposlenik);
                    _context.SaveChanges();
                    return StatusCode(StatusCodes.Status201Created, zaposlenik);
                }
                catch (Exception e)
                {
                    return BadRequest(e);
                }
            }


            [HttpPut]
            [Route("{sifra:int}")]
            [Produces("application/json")]
            public IActionResult Put(int sifra, Zaposlenik zaposlenik)
            {
                try
                {

                    var s = _context.Zaposlenici.Find(sifra);

                    if (s == null)
                    {
                        return NotFound();
                    }

                    // Rucno mapiranje, kasnije automapper
                    s.Ime = zaposlenik.Ime;
                    s.Prezime = zaposlenik.Prezime;
                    s.OIB = zaposlenik.OIB;

                    _context.Zaposlenici.Update(s);
                    _context.SaveChanges();
                    return Ok(new { poruka = "Uspješno promijenjeno" });
                }
                catch (Exception e)
                {
                    return BadRequest(e);
                }
            }


            [HttpDelete]
            [Route("{sifra:int}")]
            public IActionResult Delete(int sifra)
            {
                try
                {
                    var s = _context.Zaposlenici.Find(sifra);
                    if (s == null)
                    {
                        return NotFound();
                    }
                    _context.Zaposlenici.Remove(s);
                    _context.SaveChanges();
                    return Ok(new { poruka = "Uspješno obrisano" });
                }
                catch (Exception e)
                {
                    return BadRequest(e);
                }
            }
        }
    }