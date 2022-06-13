using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PoliceSystemApi.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;


namespace PoliceSystemApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public RegisterController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        public JsonResult Post(Register reg)
        {
            string query = @"insert into register (emri , mbiemri , email , password , nrtel , gjinia) values (@emri, @mbiemri, @email, @password, @nrtel, @gjinia) ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SqlServer");
            SqlDataReader myReader;
            using (var myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myCommand.Parameters.AddWithValue("@emri", reg.emri);
                    myCommand.Parameters.AddWithValue("@mbiemri", reg.mbiemri);
                    myCommand.Parameters.AddWithValue("@email", reg.email);
                    myCommand.Parameters.AddWithValue("@password", reg.password);
                    myCommand.Parameters.AddWithValue("@nrtel", reg.nrtel);
                    myCommand.Parameters.AddWithValue("@gjinia", reg.gjinia);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }
            return new JsonResult("Thank you for your registration!");
        }

    }
}
