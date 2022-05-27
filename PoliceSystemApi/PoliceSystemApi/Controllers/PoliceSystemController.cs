using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PoliceSystemApi.Models;
using System.Data;
using System.Data.SqlClient;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace PoliceSystemApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PoliceSystemController : Controller
    {
        private readonly IConfiguration _configuration;

        public PoliceSystemController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpGet]
        public JsonResult Get()
        {
            string query = @"select * from Stafi";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SqlServer");
            SqlDataReader myReader;
            using (var myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using var myCommand = new SqlCommand(query, myConn);
                myReader = myCommand.ExecuteReader();
                table.Load(myReader);
                myReader.Close();
                myConn.Close();
            }
            return new JsonResult(table);
        }



        [HttpGet("{id}")]
        public JsonResult GetbyId(int id)
        {
            string query = @"select * from Stafi where id = @Id  ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SqlServer");
            SqlDataReader myReader;
            using (var myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myCommand.Parameters.AddWithValue("@Id", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }
            return new JsonResult(table);
        }



        [HttpPost]
        public JsonResult Post(PoliceSystem stf)
        {
            string query = @"
                           insert into stafi
                           values (@Emri, @Mbiemri )
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SqlServer");
            SqlDataReader myReader;
            using (var myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@emri", stf.emri);
                    myCommand.Parameters.AddWithValue("@mbiemri", stf.mbiemri);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }

            return new JsonResult("Added Successfully");
        }



        [HttpPut]
        public JsonResult Put(PoliceSystem stf)
        {
            string query = @"update stafi 
                             set name = @emri, lastname = @mbiemri
                              where id = @Id";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SqlServer");
            SqlDataReader myReader;
            using (var myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myCommand.Parameters.AddWithValue("@id", stf.id);
                    myCommand.Parameters.AddWithValue("@Emri", stf.emri);
                    myCommand.Parameters.AddWithValue("@Mbiemri", stf.mbiemri);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }
            return new JsonResult("Updated Successfully");
        }



        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"delete Stafi 
                             where id = @Id";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("SqlServer");
            SqlDataReader myReader;
            using (var myConn = new SqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myConn))
                {
                    myCommand.Parameters.AddWithValue("@Id", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }
            return new JsonResult("Deleted Successfully");
        }
    }
}
